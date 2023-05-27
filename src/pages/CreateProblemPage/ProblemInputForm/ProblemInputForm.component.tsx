import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useAtom } from "jotai";

import { ReactComponent as Add } from "@/assets/images/add.svg";
import { problemCreateInfoAtom } from "@/atoms/problemCreate";
import Button from "@/components/Button/Button.component";
import FileSubmissionButton from "@/components/FileSubmissionButton/FileSubmissionButton.component";
import MarkdownEditor from "@/components/MarkdownEditor/MarkdownEditor.component";
import Tag from "@/components/Tag/Tag.component";
import TagInput from "@/components/Tag/TagInput.component";
import { domain } from "@/constants/api";
import {
  ProblemInputFormLayout,
  ProblemInputFormControlBox,
  ProblemInputFormTagAddButton,
  ProblemInputFormFileSelectorBox,
  ProblemInputFormTagInputBox,
  ProblemInputFormTitleInput,
  ProblemInputFormTagList,
} from "@/pages/CreateProblemPage/ProblemInputForm/ProblemInputForm.styles";
import { readTextFromFile } from "@/utils/readTextFromFile";

const ProblemInputForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [problemCreateInfo, setProblemCreateInfo] = useAtom(
    problemCreateInfoAtom
  );
  const { title, tags, description, htmlCode, cssCode, jsCode } =
    problemCreateInfo;
  const [isAddingTag, setIsAddingTag] = useState(false);
  const navigate = useNavigate();
  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  const titleInputHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setProblemCreateInfo({ ...problemCreateInfo, title: e.target.value });
  };

  const addTagClickHandler = () => {
    setIsAddingTag(true);
  };

  const tagAddHandler = (newTag: string) => {
    if (newTag) {
      const newTags = [...problemCreateInfo.tags, newTag];
      setProblemCreateInfo({ ...problemCreateInfo, tags: newTags });
    }
    setIsAddingTag(false);
  };

  const tagDeleteHandler = (targetTag: string) => {
    const newTags = problemCreateInfo.tags.filter((tag) => tag !== targetTag);
    setProblemCreateInfo({ ...problemCreateInfo, tags: newTags });
  };

  const descriptionInputHandler = (value: string | undefined) => {
    if (value === undefined) return;
    setProblemCreateInfo({ ...problemCreateInfo, description: value });
  };

  const htmlInputChangeHandler: React.ChangeEventHandler<
    HTMLInputElement
  > = async (e) => {
    if (!e.target.files) return;
    setProblemCreateInfo({
      ...problemCreateInfo,
      htmlCode: await readTextFromFile(e.target.files[0]),
    });
  };

  const cssInputChangeHandler: React.ChangeEventHandler<
    HTMLInputElement
  > = async (e) => {
    if (!e.target.files) return;
    setProblemCreateInfo({
      ...problemCreateInfo,
      cssCode: await readTextFromFile(e.target.files[0]),
    });
  };

  const jsInputChangeHandler: React.ChangeEventHandler<
    HTMLInputElement
  > = async (e) => {
    if (!e.target.files) return;
    setProblemCreateInfo({
      ...problemCreateInfo,
      jsCode: await readTextFromFile(e.target.files[0]),
    });
  };

  const problemSubmitHandler = async () => {
    const response = await fetch(`http://${domain}/problems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
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
        value={title}
        onChange={titleInputHandler}
        autoFocus
        placeholder="문제 제목을 입력하세요."
      />
      <ProblemInputFormTagInputBox>
        <div onClick={addTagClickHandler}>
          <ProblemInputFormTagAddButton>
            <Add />
            {"태그"}
          </ProblemInputFormTagAddButton>
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
      <MarkdownEditor
        value={description}
        onChange={descriptionInputHandler}
        enableScroll={true}
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
