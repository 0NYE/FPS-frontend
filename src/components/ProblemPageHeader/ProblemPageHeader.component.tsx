import { useAtom } from "jotai";

import { loginModalActiveAtom } from "@/atoms/modal";
import { userAtom } from "@/atoms/user";
import Avatar from "@/components/Avatar/Avatar.component";
import Logo from "@/components/Logo/Logo.component";
import {
  ProblemPageHeaderLayout,
  ProblemPageHeaderLoginButton,
  ProblemPageHeaderNavLink,
} from "@/components/ProblemPageHeader/ProblemPageHeader.styles";

const ProblemPageHeader = () => {
  const [loginModalActive, setLoginModalActive] = useAtom(loginModalActiveAtom);
  const [user] = useAtom(userAtom);

  const loginButtonClickHandler = () => {
    setLoginModalActive(true);
  };

  return (
    <ProblemPageHeaderLayout>
      <Logo />
      <ProblemPageHeaderNavLink to="/problems">
        문제 리스트
      </ProblemPageHeaderNavLink>
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
