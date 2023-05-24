import React, { useRef, useState } from "react";

import {
  FileSubmitLayout,
  FileSubmitHeader,
  FileSubmitSVG,
  FileInput,
  FileLabel,
  FileButton,
  FileSubmitBottom,
} from "./FileSubmissionButton.styles";

import { ReactComponent as File } from "@/assets/images/File.svg";
import { ReactComponent as FileActivated } from "@/assets/images/FileActivated.svg";

type FileType = "HTML" | "CSS" | "JavaScript";

const fileMIMEType: { [K in FileType]: string } = {
  HTML: "text/html",
  CSS: "text/css",
  JavaScript: "text/javascript",
};

interface FileSubmissionButtonProps {
  fileType?: FileType;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const defaultFileName = "클릭 혹은 드래그";

const FileSubmissionButton = ({
  fileType,
  onChange,
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
    <FileSubmitLayout isFileSubmitted={isFileSubmitted}>
      <FileLabel htmlFor="sub">
        <FileSubmitHeader isFileSubmitted={isFileSubmitted}>
          {fileType || "파일"} 제출
        </FileSubmitHeader>
        <FileSubmitSVG>
          {isFileSubmitted ? <FileActivated /> : <File />}
        </FileSubmitSVG>
        <FileSubmitBottom isFileSubmitted={isFileSubmitted}>
          {selectedFileName && <p>{selectedFileName}</p>}
        </FileSubmitBottom>
      </FileLabel>
      <FileInput
        id="sub"
        type="file"
        accept={fileType ? fileMIMEType[fileType] : undefined}
        onChange={onChangeHandler}
      ></FileInput>
    </FileSubmitLayout>
  );
};

export default FileSubmissionButton;
