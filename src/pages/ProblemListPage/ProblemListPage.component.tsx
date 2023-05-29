import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useAtom } from "jotai";

import { problemsAtom } from "@/atoms/problem";
import MainHeader from "@/components/MainHeader/MainHeader.component";
import ProblemBlock, {
  SupportedLanguage,
} from "@/components/ProblemBlock/ProblemBlock.component";
import SearchBar from "@/components/SearchBar/SearchBar.component";
import { domain } from "@/constants/api";
import {
  ProblemListPageLayout,
  ProblemListPageMain,
  ProblemListControlBox,
  ProblemBlockList,
} from "@/pages/ProblemListPage/ProblemListPage.styles";
import { Problem } from "@/types/problem";
import { debounce } from "@/utils/debounce";

const ProblemListPage = () => {
  const navigate = useNavigate();
  const [problems, setProblems] = useAtom(problemsAtom);
  const searchBarRef = useRef<HTMLInputElement | null>(null);
  const [filterValue, setFilterValue] = useState("");
  const notifyError = () =>
    toast.error(
      "문제 데이터 호출에 실패했습니다! 잠시 후에 다시 시도해주세요."
    );

  useEffect(() => {
    fetch(`http://${domain}/problems`)
      .then((res) => res.json())
      .then((problems) => {
        setProblems(problems as Problem[]);
      })
      .catch(() => {
        notifyError();
        setProblems([]);
      });
  }, [setProblems]);

  const searchBarChangeHandler: React.ChangeEventHandler<HTMLInputElement> =
    debounce((e) => {
      setFilterValue(e.target.value);
    }, 250);

  const isSubstringExsits = (str: string, substr: string) =>
    str.indexOf(substr) !== -1;

  const filteredProblems = problems.filter(({ title, tags }) => {
    return (
      isSubstringExsits(title, filterValue) ||
      tags.some((tag) => isSubstringExsits(tag, filterValue))
    );
  });

  return (
    <ProblemListPageLayout>
      <MainHeader />
      <ProblemListPageMain>
        <ProblemListControlBox>
          <SearchBar
            inputRef={searchBarRef}
            onChange={searchBarChangeHandler}
            placeholder="문제 검색"
          />
        </ProblemListControlBox>
        <ProblemBlockList>
          {filteredProblems.map(
            ({
              id,
              title,
              uploader,
              bookmarkCount,
              likeCount,
              dislikeCount,
              successRate,
              tags,
              isHTML,
              isCSS,
              isJS,
            }) => {
              const languages: SupportedLanguage[] = [];
              isHTML && languages.push("HTML");
              isCSS && languages.push("CSS");
              isJS && languages.push("JS");

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
