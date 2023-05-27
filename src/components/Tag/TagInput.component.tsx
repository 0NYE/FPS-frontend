import React, { useRef } from "react";

import { TagSize } from "@/components/Tag/Tag.component";
import { TagInputLayout } from "@/components/Tag/TagInput.styled";

interface TagProps {
  size?: TagSize;
  onSubmit: (target: string) => void;
}

const MAX_LENGTH = 14;

const TagInput = ({ size = "small", onSubmit }: TagProps) => {
  const inputRef = useRef<HTMLDivElement | null>(null);

  const handleInputEvent = (e: React.ChangeEvent<HTMLDivElement>) => {
    const newValue = e.target.textContent;

    // 최대 입력 갯수를 MAX_LENGTH로 제한
    if (newValue && newValue.length > MAX_LENGTH) {
      if (inputRef.current && inputRef.current.textContent) {
        inputRef.current.textContent = inputRef.current.textContent.slice(
          0,
          MAX_LENGTH
        );

        // input의 커서를 제일 뒤로 설정
        const range = document.createRange();
        const sel = window.getSelection();
        range.setStart(inputRef.current.childNodes[0], MAX_LENGTH);
        range.collapse(true);
        if (!sel) return;
        sel.removeAllRanges();
        sel.addRange(range);
        inputRef.current.focus();
      }
    }
  };

  const blurHandler: React.FocusEventHandler<HTMLSpanElement> = () => {
    if (!inputRef.current) return;
    onSubmit(inputRef.current.textContent ?? "");
  };

  return (
    <TagInputLayout
      size={size}
      ref={inputRef}
      spellCheck={false}
      contentEditable
      onInput={handleInputEvent}
      onBlur={blurHandler}
    ></TagInputLayout>
  );
};

export default TagInput;
