import React, { useState, useRef, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "react-toastify";

import Editor, { OnMount } from "@monaco-editor/react";
import { useAtom } from "jotai";
import { editor } from "monaco-editor";

import { ReactComponent as Reset } from "@/assets/images/replay.svg";
import { ReactComponent as ShortCut } from "@/assets/images/shortcut.svg";
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
  LanguageButtonBox,
  LanguageButton,
  AdditionalControlBox,
  EditorToolButton,
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
  const loadingCounterRef = useRef(0);
  const [isSimillarityLoading, setIsSimillarityLoading] = useState(false);
  const navigate = useNavigate();
  const notifyShortcuts = () =>
    toast.info("되돌리기: Ctrl + Z", {
      autoClose: false,
    });
  const notifySubmissionSuccess = () =>
    toast.success("제출 성공! 아래에서 결과를 확인하세요.");
  const notifySubmissionError = () =>
    toast.error("제출에 실패했습니다. 잠시 후에 다시 시도해주세요.");

  const resetAllState = useCallback(() => {
    setCurrentLanguage("html");
    setHtml("");
    setCss("");
    setJs("");
    setSimillarity(0);
    editorRef.current?.setValue("");
  }, [setHtml, setCss, setJs, setSimillarity]);

  useEffect(() => {
    resetAllState();
  }, [problem_id, resetAllState]);

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

  const resetButtonClickHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    resetAllState();
  };

  const showShortcutsButtonClickHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    notifyShortcuts();
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
    try {
      formData.append("problem", await captureOriginalCodeResult());
      formData.append("submit", await captureUserCodeResult());
    } catch {
      return;
    }

    loadingCounterRef.current++;
    setIsSimillarityLoading(true);

    const json = await fetch(`http://${domain}/compare`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .catch((error) => console.error(error));

    setSimillarity(json?.score ? json.score * 100 : 0);
    loadingCounterRef.current--;
    if (loadingCounterRef.current === 0) setIsSimillarityLoading(false);
  };

  const editorChangeHandler = (code: string | undefined) => {
    if (code === undefined || changeFlag.current) return;

    if (currentLanguage === "html") setHtml(code);
    else if (currentLanguage === "css") setCss(code);
    else if (currentLanguage === "javascript") setJs(code);

    if (currentLanguage === "html" && code === "") return;
    if (html === "") return;
    fetchSimillarity();
  };

  const submitButtonClickHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    try {
      const formData = new FormData();
      formData.append("problem_image", await captureOriginalCodeResult());
      formData.append("user_image", await captureUserCodeResult());
      formData.append("html_code", html);
      formData.append("css_code", css);
      formData.append("js_code", js);

      const response = await fetch(`http://${domain}/problems/submit`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error();
      notifySubmissionSuccess();
      navigate("submissions");
    } catch {
      notifySubmissionError();
    }
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
              tipText="정확한 수치를 모르겠다면 브라우저 개발자 도구를 활용해보세요!"
            />
          }
          rightChildren={
            <SolveSectionLayout>
              <EditorControlBox onClick={langButtonClickHandler}>
                <LanguageButtonBox>
                  {" "}
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
                </LanguageButtonBox>
                <AdditionalControlBox>
                  <EditorToolButton onClick={resetButtonClickHandler}>
                    <Reset />
                  </EditorToolButton>
                  <EditorToolButton onClick={showShortcutsButtonClickHandler}>
                    <ShortCut />
                  </EditorToolButton>
                </AdditionalControlBox>
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
                    animated={true}
                    label={`결과물 유사도: ${parseFloat(
                      simillarity.toFixed(2)
                    )}%`}
                  />
                  <ClipLoader
                    color="#999"
                    loading={isSimillarityLoading}
                    size={20}
                  />
                </ProgressBarBox>
                <Button variant="green" onClick={submitButtonClickHandler}>
                  제출
                </Button>
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
