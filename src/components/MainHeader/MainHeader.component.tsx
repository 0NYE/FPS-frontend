import Logo from "@/components/Logo/Logo.component";
import {
  MainHeaderLayout,
  MainHeaderRightRow,
  MainHeaderLoginLink,
  MainHeaderNav,
  MainHeaderNavList,
  MainHeaderNavListItem,
  MainHeaderNavLink,
} from "@/components/MainHeader/MainHeader.styles";

const MainHeader = () => {
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
      <MainHeaderLoginLink to="/login">로그인</MainHeaderLoginLink>
    </MainHeaderLayout>
  );
};

export default MainHeader;
