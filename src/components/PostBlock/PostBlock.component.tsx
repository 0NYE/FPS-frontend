import {
  PostBlockDataSpan,
  PostBlockLayout,
  AvatarDiv,
  OverallDiv,
  PostHeader,
  PostTitle,
  NameTimeDiv,
  NameSpan,
  TimeSpan,
  PostBlockTagBox,
  PostDiv,
  ChevronDiv,
} from "./PostBlock.styles";

import Avatar from "../Avatar/Avatar.component";

import { ReactComponent as Comment } from "@/assets/images/comment.svg";
import { ReactComponent as Dislike } from "@/assets/images/dislike.svg";
import { ReactComponent as DislikeActivated } from "@/assets/images/dislike_activated.svg";
import { ReactComponent as Like } from "@/assets/images/like.svg";
import { ReactComponent as LikeActivated } from "@/assets/images/like_activated.svg";
import { ReactComponent as RightChevron } from "@/assets/images/RightChevron.svg";
import { ReactComponent as Star } from "@/assets/images/star.svg";
import { ReactComponent as StarActivated } from "@/assets/images/star_activated.svg";

interface PostBlockProps {
  id: string;
  title: string;
  userName: string;
  date: Date;
  isBookmark?: boolean;
  isLike?: boolean;
  isDislike?: boolean;
  bookmarkCount: number;
  likeCount: number;
  dislikeCount: number;
  commentCount: number;
  isActive?: boolean;
  onClick?: (id: string) => void;
}

const PostBlock = ({
  id,
  title,
  userName,
  date,
  isBookmark = false,
  isLike = false,
  isDislike = false,
  bookmarkCount,
  likeCount,
  dislikeCount,
  commentCount,
  isActive = false,
  onClick,
}: PostBlockProps) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();

  return (
    <PostBlockLayout active={isActive} onClick={() => onClick && onClick(id)}>
      <PostDiv>
        <AvatarDiv>
          <Avatar size={"medium"} />
        </AvatarDiv>
        <OverallDiv>
          <PostHeader>
            <PostTitle>{title}</PostTitle>
          </PostHeader>
          <NameTimeDiv>
            <NameSpan>{userName}</NameSpan>
            <TimeSpan>{`${year}-${month}-${day} ${hour}:${min}`}</TimeSpan>
          </NameTimeDiv>
          <PostBlockTagBox>
            <PostBlockDataSpan>
              {isBookmark ? <StarActivated /> : <Star />}
              {bookmarkCount}
            </PostBlockDataSpan>
            <PostBlockDataSpan>
              {isLike ? <LikeActivated /> : <Like />}
              {likeCount}
            </PostBlockDataSpan>
            <PostBlockDataSpan>
              {isDislike ? <DislikeActivated /> : <Dislike />}
              {dislikeCount}
            </PostBlockDataSpan>
            <PostBlockDataSpan>
              <Comment />
              {commentCount}
            </PostBlockDataSpan>
          </PostBlockTagBox>
        </OverallDiv>
      </PostDiv>
      <ChevronDiv>
        <RightChevron />
      </ChevronDiv>
    </PostBlockLayout>
  );
};

export default PostBlock;
