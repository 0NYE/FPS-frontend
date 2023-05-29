import { useParams } from "react-router-dom";

import { useAtom } from "jotai";

import { ReactComponent as ChevronLeft } from "@/assets/images/chevron_left.svg";
import { ReactComponent as VerticalList } from "@/assets/images/list.svg";
import { ReactComponent as ChevronRight } from "@/assets/images/RightChevron.svg";
import { loginModalActiveAtom } from "@/atoms/modal";
import { userAtom } from "@/atoms/user";
import Avatar from "@/components/Avatar/Avatar.component";
import Logo from "@/components/Logo/Logo.component";
import {
  ProblemPageHeaderLayout,
  ProblemPageHeaderLoginButton,
  ProblemPageHeaderControls,
  ProblemPageHeaderNextLinkBox,
  ProblemPageHeaderNavLink,
  ProblemPageHeaderNextLink,
} from "@/components/ProblemPageHeader/ProblemPageHeader.styles";

const ProblemPageHeader = () => {
  const { problem_id } = useParams();
  const [loginModalActive, setLoginModalActive] = useAtom(loginModalActiveAtom);
  const [user] = useAtom(userAtom);

  const loginButtonClickHandler = () => {
    setLoginModalActive(true);
  };

  return (
    <ProblemPageHeaderLayout>
      <Logo />
      <ProblemPageHeaderControls>
        <ProblemPageHeaderNextLinkBox disabled={problem_id === "1"}>
          <ProblemPageHeaderNextLink
            to={`/problems/${Number(problem_id) - 1}/solve`}
          >
            <ChevronLeft />
          </ProblemPageHeaderNextLink>
        </ProblemPageHeaderNextLinkBox>
        <ProblemPageHeaderNavLink to="/problems">
          <VerticalList />
          문제 리스트
        </ProblemPageHeaderNavLink>
        <ProblemPageHeaderNextLinkBox disabled={false}>
          <ProblemPageHeaderNextLink
            to={`/problems/${Number(problem_id) + 1}/solve`}
          >
            <ChevronRight />
          </ProblemPageHeaderNextLink>
        </ProblemPageHeaderNextLinkBox>
      </ProblemPageHeaderControls>
      {!user ? (
        <ProblemPageHeaderLoginButton onClick={loginButtonClickHandler}>
          로그인
        </ProblemPageHeaderLoginButton>
      ) : (
        <Avatar size="small" />
      )}
    </ProblemPageHeaderLayout>
  );
};

export default ProblemPageHeader;
