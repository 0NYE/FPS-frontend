import React,{useState} from 'react';

import { InputBoxContainer,InputBox,ButtonWrapper } from './CommentInput.styles';

import Button from '../Button/Button.component';

const CommentInput=()=>{
  
  return(
  <InputBoxContainer>
    <InputBox placeholder='댓글을 입력하세요'></InputBox>
    <ButtonWrapper>
      <Button variant="green" size="small">댓글쓰기</Button>
    </ButtonWrapper>
  </InputBoxContainer>
  )
}

export default CommentInput;
