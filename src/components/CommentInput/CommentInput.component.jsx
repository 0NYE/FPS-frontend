import React,{useState} from 'react';

import { InputBoxContainer,InputBox,ButtonWrapper } from './CommentInput.styles';

import Button from '../Button/Button.component';

const CommentInput=(onSubmit)=>{
  
  return(
  <InputBoxContainer>
    <InputBox placeholder='댓글을 입력하세요'></InputBox>
    <Button variant="green" size="small" onClick={onSubmit}>댓글쓰기</Button>
  </InputBoxContainer>
  )
}

export default CommentInput;
