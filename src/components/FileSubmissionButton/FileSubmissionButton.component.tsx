import React, { useState } from "react";

import {
  FileSubmissionLayout,
  FileSubmissionHeader,
  FileSubmissionSvgBox,
  FileInput,
  FileLabel,
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
  fileType?: FileType;
}

const defaultFileName = "클릭 혹은 드래그";

const FileSubmissionButton = ({
  fileType,
  id,
  onChange,
  ...props
}: FileSubmissionButtonProps) => {
  const [selectedFileName, setSelectedFileName] = useState(defaultFileName);
  const [isFileSubmitted, setIsFileSubmitted] = useState(false);

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      setSelectedFileName(files[0].name);
      setIsFileSubmitted(true);
    } else {
      setSelectedFileName(defaultFileName);
      setIsFileSubmitted(false);
    }

    onChange && onChange(e);
  };

  return (
    <FileSubmissionLayout isFileSubmitted={isFileSubmitted}>
      <FileLabel htmlFor={id}>
        <FileSubmissionHeader isFileSubmitted={isFileSubmitted}>
          {fileType || "파일"} 제출
        </FileSubmissionHeader>
        <FileSubmissionSvgBox>
          {isFileSubmitted ? <FileActivated /> : <File />}
        </FileSubmissionSvgBox>
        <FileSubmissionFooter isFileSubmitted={isFileSubmitted}>
          {selectedFileName && <p>{selectedFileName}</p>}
        </FileSubmissionFooter>
      </FileLabel>
      <FileInput
        {...props}
        id={id}
        type="file"
        accept={fileType ? fileMIMEType[fileType] : undefined}
        onChange={onChangeHandler}
      ></FileInput>
    </FileSubmissionLayout>
  );
};

export default FileSubmissionButton;
