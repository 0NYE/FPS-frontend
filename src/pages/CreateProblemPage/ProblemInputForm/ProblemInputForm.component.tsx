import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/Button/Button.component";
import FileSubmissionButton from "@/components/FileSubmissionButton/FileSubmissionButton.component";
import Tag from "@/components/Tag/Tag.component";
import { domain } from "@/constants/api";
import { useInput } from "@/hooks/useInput";
import { useTextArea } from "@/hooks/useTextArea";
import {
  ProblemInputFormLayout,
  ProblemInputFormControlBox,
  ProblemInputFormDescriptionTextArea,
  ProblemInputFormFileSelectorBox,
  ProblemInputFormTagInput,
  ProblemInputFormTagInputBox,
  ProblemInputFormTitleInput,
  ProblemInputFormTagList,
} from "@/pages/CreateProblemPage/ProblemInputForm/ProblemInputForm.styles";




const ProblemInputForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const titleInput = useInput("");
  const tagInput = useInput("");
  const descriptionTextArea = useTextArea("");
  const [tags, setTags] = useState<string[]>([]);
  const [htmlFile, setHtmlFile] = useState<File | null>(null);
  const [cssFile, setCssFile] = useState<File | null>(null);
  const [jsFile, setJsFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  const tagButtonClickHandler = () => {
    setTags([...tags, tagInput.value]);
    tagInput.setValue("");
  };

  const tagDeleteHandler = (targetTag: string) => {
    setTags(tags.filter((tag) => tag !== targetTag));
  };

  const htmlInputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (!e.target.files) return;
    setHtmlFile(e.target.files[0]);
  };

  const cssInputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (!e.target.files) return;
    setCssFile(e.target.files[0]);
  };

  const jsInputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (!e.target.files) return;
    setJsFile(e.target.files[0]);
  };

  const problemSubmitHandler = async () => {
    const fileReader = new FileReader();
    const response = await fetch(`http://${domain}/problems`, {
      method: "POST",
      body: JSON.stringify({
        title: titleInput.value,
        description: descriptionTextArea.value,
        tags,
        html_code: htmlFile ? fileReader.readAsText(htmlFile, "utf-8") : "",
        css_code: cssFile ? fileReader.readAsText(cssFile, "utf-8") : "",
        js_code: jsFile ? fileReader.readAsText(jsFile, "utf-8") : "",
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
        placeholder="제목"
      />
      <ProblemInputFormTagInputBox>
        <ProblemInputFormTagInput
          value={tagInput.value}
          onChange={tagInput.onChange}
          placeholder="태그"
        />
        <Button variant="black" onClick={tagButtonClickHandler}>
          태그 추가
        </Button>
        <ProblemInputFormTagList>
          {tags.map((tag) => (
            <li key={tag}>
              <Tag removable={true} onDelete={tagDeleteHandler}>
                {tag}
              </Tag>
            </li>
          ))}
        </ProblemInputFormTagList>
      </ProblemInputFormTagInputBox>
      <ProblemInputFormDescriptionTextArea
        value={descriptionTextArea.value}
        onChange={descriptionTextArea.onChange}
        placeholder="문제 설명"
      />
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
