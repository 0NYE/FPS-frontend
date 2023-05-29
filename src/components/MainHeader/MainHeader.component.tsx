import { useAtom } from "jotai";

import { loginModalActiveAtom } from "@/atoms/modal";
import { userAtom } from "@/atoms/user";
import Avatar from "@/components/Avatar/Avatar.component";
import Logo from "@/components/Logo/Logo.component";
import {
  MainHeaderLayout,
  MainHeaderRightRow,
  MainHeaderLoginButton,
  MainHeaderNav,
  MainHeaderNavList,
  MainHeaderNavListItem,
  MainHeaderNavLink,
} from "@/components/MainHeader/MainHeader.styles";

const MainHeader = () => {
  const [loginModalActive, setLoginModalActive] = useAtom(loginModalActiveAtom);
  const [user] = useAtom(userAtom);

  const loginButtonClickHandler = () => {
    setLoginModalActive(true);
  };

  return (
    <MainHeaderLayout>
      <MainHeaderRightRow>
        <Logo />
        <MainHeaderNav>
          <MainHeaderNavList>
            <MainHeaderNavListItem>
              <MainHeaderNavLink
                to="/problems"
                data-active={
                  window.location.pathname === "/" ? "active" : undefined
                }
              >
                문제 풀기
              </MainHeaderNavLink>
            </MainHeaderNavListItem>
            <MainHeaderNavListItem>
              <MainHeaderNavLink to="/create-problem">
                문제 생성하기
              </MainHeaderNavLink>
            </MainHeaderNavListItem>
          </MainHeaderNavList>
        </MainHeaderNav>
      </MainHeaderRightRow>
      {!user ? (
        <MainHeaderLoginButton onClick={loginButtonClickHandler}>
          로그인
        </MainHeaderLoginButton>
      ) : (
        <Avatar size="small" />
      )}
    </MainHeaderLayout>
  );
};

export default MainHeader;
