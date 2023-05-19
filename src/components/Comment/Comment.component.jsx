import React,{useState} from 'react';

import{ 
  CommentBox,
  CommentHeader,
  UserDiv,
  CommentDisplayer,
  CommentBottom,
  CommentDataSpan, 
  CommentTitle,
  TimeDiv} 
from './Comment.styles';

import Avatar from '../Avatar/Avatar.component';

import { ReactComponent as NestedComment} from "@/assets/images/comment.svg"
import { ReactComponent as Dislike } from "@/assets/images/dislike.svg";
import { ReactComponent as DislikeActivated } from "@/assets/images/dislike_activated.svg";
import { ReactComponent as Like } from "@/assets/images/like.svg";
import { ReactComponent as LikeActivated } from "@/assets/images/like_activated.svg";



const Comment=({
  userName,
  year,
  month,
  day,
  hour,
  min,
  commentContent,
  isLike,
  likeCount,
  isDislike,
  dislikeCount,
  commentCount
})=>{
  return(
  <CommentBox>
    <CommentHeader>
      <UserDiv>
        <Avatar size="small"></Avatar>
        <CommentTitle>{userName}</CommentTitle>
      </UserDiv>
      <TimeDiv>
        {year}-{month}-{day}  {hour}:{min}
      </TimeDiv>
    </CommentHeader>
    <CommentDisplayer>
      {commentContent}
    </CommentDisplayer>
    <CommentBottom>
      <CommentDataSpan>
        {isLike ? <LikeActivated /> : <Like />}
              {likeCount}
      </CommentDataSpan>
      <CommentDataSpan>
        {isDislike ? <DislikeActivated /> : <Dislike />}
              {dislikeCount}
      </CommentDataSpan>
      <CommentDataSpan>
        <NestedComment />{commentCount}개의 대댓글보기
      </CommentDataSpan>
    </CommentBottom>
  </CommentBox>
  )
}

export default Comment;