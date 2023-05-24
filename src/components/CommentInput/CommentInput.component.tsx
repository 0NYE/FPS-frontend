import React, { useRef } from "react";

import {
  CommentInputLayout,
  CommentInputTextArea,
} from "./CommentInput.styles";

import Button from "../Button/Button.component";

interface CommentInputProps {
  onSubmit?: (value: string) => void;
}

const CommentInput = ({ onSubmit }: CommentInputProps) => {
  const textArea = useRef<HTMLTextAreaElement>(null);

  const onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (textArea.current) onSubmit && onSubmit(textArea.current.value);
  };

  return (
    <CommentInputLayout>
      <CommentInputTextArea
        placeholder="댓글을 입력하세요"
        ref={textArea}
      ></CommentInputTextArea>
      <Button variant="green" size="small" onClick={onClickHandler}>
        댓글 쓰기
      </Button>
    </CommentInputLayout>
  );
};

export default CommentInput;
