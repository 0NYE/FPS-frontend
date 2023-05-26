import { useAtom } from "jotai";

import { loginModalActiveAtom } from "@/atoms/modal";
import Logo from "@/components/Logo/Logo.component";
import {
  ProblemPageHeaderLayout,
  ProblemPageHeaderLoginButton,
  ProblemPageHeaderNavLink,
} from "@/components/ProblemPageHeader/ProblemPageHeader.styles";

const ProblemPageHeader = () => {
  const [loginModalActive, setLoginModalActive] = useAtom(loginModalActiveAtom);

  const loginButtonClickHandler = () => {
    setLoginModalActive(true);
  };

  return (
    <ProblemPageHeaderLayout>
      <Logo />
      <ProblemPageHeaderNavLink to="/problems">
        문제 리스트
      </ProblemPageHeaderNavLink>
      <ProblemPageHeaderLoginButton onClick={loginButtonClickHandler}>
        로그인
      </ProblemPageHeaderLoginButton>
    </ProblemPageHeaderLayout>
  );
};

export default ProblemPageHeader;
