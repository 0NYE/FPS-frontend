import { useAtom } from "jotai";

import { loginModalActiveAtom } from "@/atoms/modal";
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
              <MainHeaderNavLink to="/problems">문제 풀기</MainHeaderNavLink>
            </MainHeaderNavListItem>
            <MainHeaderNavListItem>
              <MainHeaderNavLink to="/create-problem">
                문제 생성하기
              </MainHeaderNavLink>
            </MainHeaderNavListItem>
          </MainHeaderNavList>
        </MainHeaderNav>
      </MainHeaderRightRow>
      <MainHeaderLoginButton onClick={loginButtonClickHandler}>
        로그인
      </MainHeaderLoginButton>
    </MainHeaderLayout>
  );
};

export default MainHeader;
