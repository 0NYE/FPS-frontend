import React,{useState} from 'react';

import {PostBlockDataSpan,
        PostBox,
        AvatarDiv,
        OverallDiv,
        PostHeader,
        PostTitle,
        NameTimeDiv,
        NameTimeSpan, 
        PostBlockTagBox,
        PostDiv,
        ChevronDiv,
} from './PostBlock.styles';

import Avatar from '../Avatar/Avatar.component';

import { ReactComponent as Comment} from "@/assets/images/comment.svg"
import { ReactComponent as Dislike } from "@/assets/images/dislike.svg";
import { ReactComponent as DislikeActivated } from "@/assets/images/dislike_activated.svg";
import { ReactComponent as Like } from "@/assets/images/like.svg";
import { ReactComponent as LikeActivated } from "@/assets/images/like_activated.svg";
import { ReactComponent as RightChevron} from "@/assets/images/RightChevron.svg";
import { ReactComponent as Star } from "@/assets/images/star.svg";
import { ReactComponent as StarActivated } from "@/assets/images/star_activated.svg";

const PostBlock= 
({userName,
  title,
  isBookmark,
  isLike,
  isDisLike,
  bookmarkCount,
  likeCount,
  dislikeCount,
  commentCount,
  isActive,
  setIsActive,
  handleClick
})=>{
  const currentDate = new Date();
  const year = currentDate.getFullYear(); 
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hour = currentDate.getHours();
  const min = currentDate.getMinutes();
  return(
  <PostBox active={isActive} onClick={handleClick}>
    <PostDiv>
      <AvatarDiv>
        <Avatar size={"small"}/>
      </AvatarDiv>
      <OverallDiv>
        <PostHeader>
          <PostTitle>{title}</PostTitle>
        </PostHeader>
        <NameTimeDiv>
        <NameTimeSpan active={isActive} onClick={handleClick}>
          {userName} {year}-{month}-{day} {hour}:{min}
        </NameTimeSpan>
        </NameTimeDiv>
        <PostBlockTagBox>
          <PostBlockDataSpan active={isActive} onClick={handleClick}>
            {isBookmark ? <StarActivated /> : <Star />}
              {bookmarkCount}
          </PostBlockDataSpan>
          <PostBlockDataSpan active={isActive} onClick={handleClick}>
            {isLike ? <LikeActivated /> : <Like />}
              {likeCount}
          </PostBlockDataSpan>
          <PostBlockDataSpan active={isActive} onClick={handleClick}>
            {isDisLike ? <DislikeActivated /> : <Dislike />}
              {dislikeCount}
          </PostBlockDataSpan>
          <PostBlockDataSpan active={isActive} onClick={handleClick}>
            <Comment />
              {commentCount}
          </PostBlockDataSpan>
        </PostBlockTagBox>
      </OverallDiv>
    </PostDiv>
    <ChevronDiv>
      <RightChevron />
    </ChevronDiv>
  </PostBox>
  )
}

export default PostBlock;