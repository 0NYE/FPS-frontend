import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useAtom } from "jotai";

import { htmlAtom, cssAtom, jsAtom } from "@/atoms/code";
import Button from "@/components/Button/Button.component";
import FileSubmissionButton from "@/components/FileSubmissionButton/FileSubmissionButton.component";
import MarkdownEditor from "@/components/MarkdownEditor/MarkdownEditor.component";
import Tag from "@/components/Tag/Tag.component";
import TagInput from "@/components/Tag/TagInput.component";
import { domain } from "@/constants/api";
import { useInput } from "@/hooks/useInput";
import { useTextArea } from "@/hooks/useTextArea";
import {
  ProblemInputFormLayout,
  ProblemInputFormControlBox,
  ProblemInputFormFileSelectorBox,
  ProblemInputFormTagInputBox,
  ProblemInputFormTitleInput,
  ProblemInputFormTagList,
} from "@/pages/CreateProblemPage/ProblemInputForm/ProblemInputForm.styles";
import { readTextFromFile } from "@/utils/readTextFromFile";

const ProblemInputForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const titleInput = useInput("");
  const descriptionTextArea = useTextArea("");
  const [tags, setTags] = useState<string[]>([]);
  const [isAddingTag, setIsAddingTag] = useState(false);
  const [htmlCode, setHtmlCode] = useAtom(htmlAtom);
  const [cssCode, setCssCode] = useAtom(cssAtom);
  const [jsCode, setJsCode] = useAtom(jsAtom);
  const navigate = useNavigate();

  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  const addTagClickHandler = () => {
    setIsAddingTag(true);
  };

  const tagAddHandler = (newTag: string) => {
    if (newTag) setTags([...tags, newTag]);
    setIsAddingTag(false);
  };

  const tagDeleteHandler = (targetTag: string) => {
    setTags(tags.filter((tag) => tag !== targetTag));
  };

  const htmlInputChangeHandler: React.ChangeEventHandler<
    HTMLInputElement
  > = async (e) => {
    if (!e.target.files) return;
    setHtmlCode(await readTextFromFile(e.target.files[0]));
  };

  const cssInputChangeHandler: React.ChangeEventHandler<
    HTMLInputElement
  > = async (e) => {
    if (!e.target.files) return;
    setCssCode(await readTextFromFile(e.target.files[0]));
  };

  const jsInputChangeHandler: React.ChangeEventHandler<
    HTMLInputElement
  > = async (e) => {
    if (!e.target.files) return;
    setJsCode(await readTextFromFile(e.target.files[0]));
  };

  const problemSubmitHandler = async () => {
    const response = await fetch(`http://${domain}/problems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titleInput.value,
        description: descriptionTextArea.value,
        tags,
        html_code: htmlCode,
        css_code: cssCode,
        js_code: jsCode,
      }),
    });

    const responseMessage = await response.json();

    if (!response.ok) {
      alert(`문제 생성에 실패했습니다! 이유: ${responseMessage.message}`);
      return;
    }

    navigate("");
  };

  return (
    <ProblemInputFormLayout ref={form} onSubmit={formSubmitHandler}>
      <ProblemInputFormTitleInput
        value={titleInput.value}
        onChange={titleInput.onChange}
        placeholder="문제 제목을 입력하세요."
      />
      <ProblemInputFormTagInputBox>
        <div onClick={addTagClickHandler}>
          <Tag size="medium">{"태그"}</Tag>
        </div>
        <ProblemInputFormTagList>
          {tags.map((tag) => (
            <li key={tag}>
              <Tag size="medium" removable={true} onDelete={tagDeleteHandler}>
                {tag}
              </Tag>
            </li>
          ))}
          <li>
            {isAddingTag && <TagInput size="medium" onSubmit={tagAddHandler} />}
          </li>
        </ProblemInputFormTagList>
      </ProblemInputFormTagInputBox>
      <MarkdownEditor />
      <ProblemInputFormFileSelectorBox>
        <FileSubmissionButton
          id="html"
          fileType="HTML"
          onChange={htmlInputChangeHandler}
        />
        <FileSubmissionButton
          id="css"
          fileType="CSS"
          onChange={cssInputChangeHandler}
        />
        <FileSubmissionButton
          id="js"
          fileType="JavaScript"
          onChange={jsInputChangeHandler}
        />
      </ProblemInputFormFileSelectorBox>
      <ProblemInputFormControlBox>
        <Button variant="green" onClick={problemSubmitHandler}>
          문제 생성하기
        </Button>
      </ProblemInputFormControlBox>
    </ProblemInputFormLayout>
  );
};

export default ProblemInputForm;
