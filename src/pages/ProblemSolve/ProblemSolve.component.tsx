import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";

import Editor, { OnMount } from "@monaco-editor/react";
import { useAtom } from "jotai";
import { editor } from "monaco-editor";

import { htmlAtom, cssAtom, jsAtom } from "@/atoms/code";
import Button from "@/components/Button/Button.component";
import CodeResultFrame from "@/components/CodeResultFrame/CodeResultFrame.component";
import ProblemSection from "@/components/ProblemSection/ProblemSection.components";
import ProgressBar from "@/components/ProgressBar/ProgressBar.components";
import TwoVerticalSection from "@/components/TwoVerticalSection/TwoVerticalSection.component";
import { domain } from "@/constants/api";
import { useFetch } from "@/hooks/useFetch";
import {
  SolveSectionLayout,
  EditorControlBox,
  LanguageButton,
  EditorBox,
  UserCodeRenderBoxWrapper,
  UserCodeRenderBox,
  SubmissionControlBox,
  ProgressBarBox,
} from "@/pages/ProblemSolve/ProblemSolve.styles";
import { colors } from "@/style/theme";
import { ProblemDetailInformation } from "@/types/problem";
import { iframeToPNG } from "@/utils/html2canvas";

type Languages = "html" | "css" | "javascript";

const ProblemSolve = () => {
  const { problem_id } = useParams();
  const { data: problem } = useFetch<ProblemDetailInformation>(
    `http://${domain}/problems/${problem_id}`
  );
  const [currentLanguage, setCurrentLanguage] = useState<Languages>("html");
  const [html, setHtml] = useAtom(htmlAtom);
  const [css, setCss] = useAtom(cssAtom);
  const [js, setJs] = useAtom(jsAtom);
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const changeFlag = useRef(false);
  const [simillarity, setSimillarity] = useState(0);

  const langButtonClickHandler: React.MouseEventHandler<HTMLDivElement> = (
    e
  ) => {
    const language = (e.target as HTMLElement).dataset.lang;
    if (!language) return;
    setCurrentLanguage(language as Languages);

    changeFlag.current = true;
    if (language === "html") editorRef.current?.setValue(html);
    else if (language === "css") editorRef.current?.setValue(css);
    else if (language === "javascript") editorRef.current?.setValue(js);
    changeFlag.current = false;
  };

  const editorMountHandler: OnMount = (editor) => {
    editorRef.current = editor;
  };

  const captureOriginalCodeResult = () => {
    const problemIframe = document.querySelector(
      "#problem-iframe"
    ) as HTMLIFrameElement;

    return iframeToPNG(problemIframe, "original");
  };

  const captureUserCodeResult = () => {
    const problemIframe = document.querySelector(
      "#user-code-iframe"
    ) as HTMLIFrameElement;
    return iframeToPNG(problemIframe, "user");
  };

  const fetchSimillarity = async () => {
    const formData = new FormData();
    formData.append("problem", await captureOriginalCodeResult());
    formData.append("submit", await captureUserCodeResult());
    const json = await fetch(`http://${domain}/compare`, {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    setSimillarity(json?.score ? json.score * 100 : 0);
  };

  const editorChangeHandler = (code: string | undefined) => {
    if (!code || changeFlag.current) return;

    if (currentLanguage === "html") setHtml(code);
    else if (currentLanguage === "css") setCss(code);
    else if (currentLanguage === "javascript") setJs(code);

    fetchSimillarity();
  };

  return (
    <>
      {problem ? (
        <TwoVerticalSection
          leftChildren={
            <ProblemSection
              id={problem_id ?? ""}
              title={problem.title}
              tags={[]}
              descriptionMarkdown={problem.description}
              htmlCode={problem.HTML_code}
              cssCode={problem.CSS_code}
              jsCode={problem.JS_code}
              tipText="잘 모르겠다면 브라우저 개발자 도구를 활용해보세요!"
            />
          }
          rightChildren={
            <SolveSectionLayout>
              <EditorControlBox onClick={langButtonClickHandler}>
                <LanguageButton
                  color={colors.htmlTheme}
                  data-lang="html"
                  active={currentLanguage === "html"}
                >
                  HTML
                </LanguageButton>
                <LanguageButton
                  color={colors.cssTheme}
                  data-lang="css"
                  active={currentLanguage === "css"}
                >
                  CSS
                </LanguageButton>
                <LanguageButton
                  color={colors.jsTheme}
                  data-lang="javascript"
                  active={currentLanguage === "javascript"}
                >
                  JavaScript
                </LanguageButton>
              </EditorControlBox>
              <EditorBox>
                <Editor
                  defaultLanguage="html"
                  loading="에디터를 불러오는 중입니다..."
                  options={{
                    minimap: { enabled: false },
                    scrollbar: { vertical: "auto", horizontal: "auto" },
                    lineNumbersMinChars: 3,
                  }}
                  onMount={editorMountHandler}
                  onChange={editorChangeHandler}
                />
              </EditorBox>
              <UserCodeRenderBoxWrapper>
                <UserCodeRenderBox>
                  <CodeResultFrame
                    id="user-code-iframe"
                    html={html}
                    css={css}
                    js={js}
                  />
                </UserCodeRenderBox>
              </UserCodeRenderBoxWrapper>
              <SubmissionControlBox>
                <ProgressBarBox>
                  <ProgressBar
                    value={simillarity}
                    label={`유사도: ${simillarity}%`}
                  />
                </ProgressBarBox>
                <Button variant="green">제출</Button>
              </SubmissionControlBox>
            </SolveSectionLayout>
          }
        />
      ) : (
        <TwoVerticalSection />
      )}
    </>
  );
};

export default ProblemSolve;
