import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAtom } from "jotai";
import { useResetAtom } from "jotai/utils";

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
  const resetProblemCreateInfo = useResetAtom(problemCreateInfoAtom);
  const [isAddingTag, setIsAddingTag] = useState(false);
  const notifySuccess = () => toast.success("문제 생성에 성공했습니다!");
  const notifyError = (message: string) => toast.error(message);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      resetProblemCreateInfo();
    };
  }, [resetProblemCreateInfo]);

  const formSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  const titleInputHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setProblemCreateInfo({ ...problemCreateInfo, title: e.target.value });
  };

  const addTagClickHandler = () => {
    if (tags.length >= 5) {
      notifyError("태그는 최대 5개까지 작성할 수 있습니다.");
      return;
    }
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

  const inputChangeHandler: React.ChangeEventHandler<HTMLInputElement> = async (
    e
  ) => {
    const language = e.target.dataset.infoKey;
    if (!language || !e.target.files) return;

    setProblemCreateInfo({
      ...problemCreateInfo,
      [language]: await readTextFromFile(e.target.files[0]),
    });
  };

  const problemSubmitHandler = async () => {
    if (!title) {
      notifyError("제목을 입력해주세요.");
      return;
    } else if (!tags.length) {
      notifyError("최소 1개 이상의 태그를 작성해야 합니다.");
      return;
    } else if (!htmlCode) {
      notifyError("HTML 파일을 제출해야 합니다.");
      return;
    }
    console.log("fetch2");
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
    console.log("fetch2");
    const responseMessage = await response.json();
    console.log(responseMessage);
    if (!response.ok) {
      notifyError(
        "서버 오류로 인해 문제 생성에 실패했습니다. 잠시 후에 다시 시도해주세요"
      );
      return;
    }

    notifySuccess();
    navigate("/problems");
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
          data-info-key="htmlCode"
          onChange={inputChangeHandler}
          active={!!htmlCode}
        />
        <FileSubmissionButton
          id="css"
          fileType="CSS"
          data-info-key="cssCode"
          onChange={inputChangeHandler}
          active={!!cssCode}
        />
        <FileSubmissionButton
          id="js"
          fileType="JavaScript"
          data-info-key="jsCode"
          onChange={inputChangeHandler}
          active={!!jsCode}
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
