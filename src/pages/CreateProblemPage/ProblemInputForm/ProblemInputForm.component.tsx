import Button from "@/components/Button/Button.component";
import FileSubmissionButton from "@/components/FileSubmissionButton/FileSubmissionButton.component";
import Tag from "@/components/Tag/Tag.component";
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
  return (
    <ProblemInputFormLayout>
      <ProblemInputFormTitleInput placeholder="제목" />
      <ProblemInputFormTagInputBox>
        <ProblemInputFormTagInput placeholder="태그" />
        <Button variant="black">태그 추가</Button>
        <ProblemInputFormTagList>
          <li>
            <Tag>ge</Tag>
          </li>
          <li>
            <Tag>ge</Tag>
          </li>
          <li>
            <Tag>ge</Tag>
          </li>
        </ProblemInputFormTagList>
      </ProblemInputFormTagInputBox>
      <ProblemInputFormDescriptionTextArea placeholder="문제 설명" />
      <ProblemInputFormFileSelectorBox>
        <FileSubmissionButton
          id="html"
          fileType="HTML"
          onChange={console.log}
        />
        <FileSubmissionButton id="css" fileType="CSS" onChange={console.log} />
        <FileSubmissionButton
          id="js"
          fileType="JavaScript"
          onChange={console.log}
        />
      </ProblemInputFormFileSelectorBox>
      <ProblemInputFormControlBox>
        <Button>초기화</Button>
        <Button variant="green">문제 생성하기</Button>
      </ProblemInputFormControlBox>
    </ProblemInputFormLayout>
  );
};

export default ProblemInputForm;
