import React, { useState } from "react";

import {
  FileSubmissionButtonLayout,
  FileSubmissionButtonHeader,
  FileSubmissionButtonSvgBox,
  FileInput,
  FileSubmissionButtonLabel,
  FileSubmissionFooter,
} from "./FileSubmissionButton.styles";

import { ReactComponent as File } from "@/assets/images/File.svg";
import { ReactComponent as FileActivated } from "@/assets/images/FileActivated.svg";

type FileType = "HTML" | "CSS" | "JavaScript";

const fileMIMEType: { [K in FileType]: string } = {
  HTML: "text/html",
  CSS: "text/css",
  JavaScript: "text/javascript",
};

interface FileSubmissionButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  active?: boolean;
  fileType?: FileType;
}

const defaultFileName = "클릭 혹은 드래그";

const FileSubmissionButton = ({
  fileType,
  id,
  active,
  onChange,
  ...props
}: FileSubmissionButtonProps) => {
  const [selectedFileName, setSelectedFileName] = useState(defaultFileName);

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      setSelectedFileName(files[0].name);
    } else {
      setSelectedFileName(defaultFileName);
    }

    onChange && onChange(e);
  };

  return (
    <FileSubmissionButtonLayout isFileSubmitted={!!active}>
      <FileSubmissionButtonLabel htmlFor={id}>
        <FileSubmissionButtonHeader isFileSubmitted={!!active}>
          {fileType || "파일"} 제출
        </FileSubmissionButtonHeader>
        <FileSubmissionButtonSvgBox>
          {active ? <FileActivated /> : <File />}
        </FileSubmissionButtonSvgBox>
        <FileSubmissionFooter isFileSubmitted={!!active}>
          {selectedFileName}
        </FileSubmissionFooter>
      </FileSubmissionButtonLabel>
      <FileInput
        {...props}
        id={id}
        type="file"
        accept={fileType ? fileMIMEType[fileType] : undefined}
        onChange={onChangeHandler}
      ></FileInput>
    </FileSubmissionButtonLayout>
  );
};

export default FileSubmissionButton;
