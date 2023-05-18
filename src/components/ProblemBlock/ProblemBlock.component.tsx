import {
  ProblemBlockLanguageIconList,
  ProblemBlockLayout,
  ProblemBlockMetaDataBox,
  ProblemBlockTitle,
  ProblemBlockHeaderBox,
  ProblemBlockDataBox,
  ProblemBlockMetaDataSpan,
  ProblemBlockTagSpan,
  ProblemBlockTagBox,
  ProblemBlockTagList,
} from "./ProblemBlock.styles";

import { ReactComponent as CSS } from "@/assets/images/css.svg";
import { ReactComponent as Dislike } from "@/assets/images/dislike.svg";
import { ReactComponent as DislikeActivated } from "@/assets/images/dislike_activated.svg";
import { ReactComponent as Fail } from "@/assets/images/fail.svg";
import { ReactComponent as HTML } from "@/assets/images/html.svg";
import { ReactComponent as JS } from "@/assets/images/javascript.svg";
import { ReactComponent as Like } from "@/assets/images/like.svg";
import { ReactComponent as LikeActivated } from "@/assets/images/like_activated.svg";
import { ReactComponent as Person } from "@/assets/images/person.svg";
import { ReactComponent as Star } from "@/assets/images/star.svg";
import { ReactComponent as StarActivated } from "@/assets/images/star_activated.svg";
import { ReactComponent as Success } from "@/assets/images/success.svg";
import { ReactComponent as Successrate } from "@/assets/images/successrate.svg";
import { ReactComponent as Tag } from "@/assets/images/Tags.svg";

type supportedLanguage = "HTML" | "CSS" | "JS";

const languageSvgMap: { [K in supportedLanguage]: typeof HTML } = {
  HTML: HTML,
  CSS: CSS,
  JS: JS,
};

interface ProblemBlockProps {
  title: string;
  isSuccess?: boolean;
  isBookmark: boolean;
  bookmarkCount: number;
  isLike: boolean;
  likeCount: number;
  isDislike: boolean;
  dislikeCount: number;
  successRate: number;
  author: string;
  tags: string[];
  languages: supportedLanguage[];
}

const ProblemBlock = ({
  title,
  isSuccess,
  isBookmark,
  bookmarkCount,
  isLike,
  likeCount,
  isDislike,
  dislikeCount,
  successRate,
  author,
  tags,
  languages,
}: ProblemBlockProps) => {
  return (
    <ProblemBlockLayout>
      <ProblemBlockDataBox>
        <ProblemBlockHeaderBox>
          <ProblemBlockTitle>{title}</ProblemBlockTitle>
          {isSuccess !== undefined && (isSuccess ? <Success /> : <Fail />)}
        </ProblemBlockHeaderBox>
        <ProblemBlockMetaDataBox>
          <ProblemBlockMetaDataSpan>
            {isBookmark ? <StarActivated /> : <Star />}
            {bookmarkCount}
          </ProblemBlockMetaDataSpan>
          <ProblemBlockMetaDataSpan>
            {isLike ? <LikeActivated /> : <Like />}
            {likeCount}
          </ProblemBlockMetaDataSpan>
          <ProblemBlockMetaDataSpan>
            {isDislike ? <DislikeActivated /> : <Dislike />}
            {dislikeCount}
          </ProblemBlockMetaDataSpan>
          <ProblemBlockMetaDataSpan>
            <Successrate />
            {successRate + "%"}
          </ProblemBlockMetaDataSpan>
          <ProblemBlockMetaDataSpan>
            <Person />
            {author}
          </ProblemBlockMetaDataSpan>
        </ProblemBlockMetaDataBox>
        <ProblemBlockTagBox>
          <Tag />
          <ProblemBlockTagList>
            {tags.map((item) => (
              <li key={item}>
                <ProblemBlockTagSpan>{item}</ProblemBlockTagSpan>
              </li>
            ))}
          </ProblemBlockTagList>
        </ProblemBlockTagBox>
      </ProblemBlockDataBox>
      <ProblemBlockLanguageIconList>
        {languages.map((language) => {
          const LanguageIcon = languageSvgMap[language];
          return (
            <li key={language}>
              <LanguageIcon />
            </li>
          );
        })}
      </ProblemBlockLanguageIconList>
    </ProblemBlockLayout>
  );
};
export default ProblemBlock;
