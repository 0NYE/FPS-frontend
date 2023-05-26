import { useNavigate } from "react-router-dom";

import MainHeader from "@/components/MainHeader/MainHeader.component";
import ProblemBlock, {
  SupportedLanguage,
} from "@/components/ProblemBlock/ProblemBlock.component";
import { domain } from "@/constants/api";
import { useFetch } from "@/hooks/useFetch";
import {
  ProblemListPageLayout,
  ProblemListPageMain,
  ProblemBlockList,
} from "@/pages/ProblemListPage/ProblemListPage.styles";
import { Problem } from "@/types/problem";

const ProblemListPage = () => {
  const navigate = useNavigate();
  const { data: problems } = useFetch<Problem[]>(`http://${domain}/problems`);

  return (
    <ProblemListPageLayout>
      <MainHeader />
      <ProblemListPageMain>
        <ProblemBlockList>
          {problems &&
            problems.map(
              ({
                id,
                title,
                uploader,
                bookmarkCount,
                likeCount,
                dislikeCount,
                successRate,
                tags,
                isHtml,
                isCss,
                isJs,
              }) => {
                const languages: SupportedLanguage[] = [];
                isHtml && languages.push("HTML");
                isCss && languages.push("CSS");
                isJs && languages.push("JS");

                return (
                  <li key={id} onClick={() => navigate(`/problems/${id}`)}>
                    <ProblemBlock
                      title={title}
                      isSuccess={undefined}
                      isBookmark={false}
                      bookmarkCount={bookmarkCount}
                      isLike={false}
                      likeCount={likeCount}
                      isDislike={false}
                      dislikeCount={dislikeCount}
                      successRate={successRate}
                      author={uploader}
                      tags={tags}
                      languages={languages}
                    ></ProblemBlock>
                  </li>
                );
              }
            )}
        </ProblemBlockList>
      </ProblemListPageMain>
    </ProblemListPageLayout>
  );
};

export default ProblemListPage;
