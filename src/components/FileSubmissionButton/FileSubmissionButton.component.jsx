import React,{useRef, useState} from 'react';

import { 
    FileSubmitLayout,
    FileSubmitHeader,
    FileSubmitSVG,
    FileInput,
    FileLabel,
    FileButton,
    FileSubmitBottom
} from "./FileSubmissionButton.styles";

import { ReactComponent as File } from "@/assets/images/File.svg";
import { ReactComponent as FileActivated } from "@/assets/images/FileActivated.svg";

const FileSubmissionButton =()=>{
  const fileInputRef = useRef();
  const [selectedFileName, setSelectedFileName] = useState("클릭 혹은 드래그");
  const [isFileSubmitted, setIsFileSubmitted] = useState(false);

  const handleFileChange = (event) => {
    const files = event.target.files;
    // 선택한 파일 처리 로직 추가
    console.log(files);

    // 파일 제출 시에만 파일 이름 업데이트
    if (isFileSubmitted && files && files.length > 0) {
      setSelectedFileName(files[0].name);
    } else {
      setSelectedFileName("");
    }
  };

  const handleSubmit = () => {
    // 파일 제출 로직 추가
    // 파일 제출이 성공하면 setIsFileSubmitted(true) 호출
    setIsFileSubmitted(true);
  };

  return(
  <FileSubmitLayout isFileSubmitted={isFileSubmitted} onClick={handleSubmit}> 
    <FileLabel htmlFor="sub" >
      <FileSubmitHeader isFileSubmitted={isFileSubmitted}>
        html제출
      </FileSubmitHeader>
      <FileSubmitSVG>
        {isFileSubmitted ? <FileActivated /> : <File />}
      </FileSubmitSVG>
      <FileSubmitBottom isFileSubmitted={isFileSubmitted}>
        {selectedFileName && (
          <p>{selectedFileName}</p>
        )}
      </FileSubmitBottom>
    </FileLabel>
    <FileInput id="sub" type="file" onChange={handleFileChange} ></FileInput>
  </FileSubmitLayout>
  )
}

export default FileSubmissionButton;
