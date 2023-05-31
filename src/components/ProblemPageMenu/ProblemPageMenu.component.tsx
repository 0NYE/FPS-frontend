import { useParams } from "react-router-dom";

import {
  ProblemPageMenuLayout,
  ProblemPageMenuLink,
  ProblemPageMenuList,
} from "@/components/ProblemPageMenu/ProblemPageMenu.styles";

const ProblemPageMenu = () => {
  console.log(window.location.pathname);
  return (
    <ProblemPageMenuLayout>
      <nav>
        <ProblemPageMenuList>
          <li>
            <ProblemPageMenuLink
              to="solve"
              data-active={
                window.location.pathname.length -
                  window.location.pathname.indexOf("/problems") <
                "/problems/1/submissions".length
                  ? "active"
                  : undefined
              }
            >
              문제
            </ProblemPageMenuLink>
          </li>
          <li>
            <ProblemPageMenuLink to="submissions">
              제출 기록
            </ProblemPageMenuLink>
          </li>
        </ProblemPageMenuList>
      </nav>
    </ProblemPageMenuLayout>
  );
};

export default ProblemPageMenu;
