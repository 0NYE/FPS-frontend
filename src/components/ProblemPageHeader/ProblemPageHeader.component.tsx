import Logo from "@/components/Logo/Logo.component";
import {
  ProblemPageHeaderLayout,
  ProblemPageHeaderLoginLink,
  ProblemPageHeaderNavLink,
} from "@/components/ProblemPageHeader/ProblemPageHeader.styles";

const ProblemPageHeader = () => {
  return (
    <ProblemPageHeaderLayout>
      <Logo />
      <ProblemPageHeaderNavLink to="/problems">
        문제 리스트
      </ProblemPageHeaderNavLink>
      <ProblemPageHeaderLoginLink to="/login">
        로그인
      </ProblemPageHeaderLoginLink>
    </ProblemPageHeaderLayout>
  );
};

export default ProblemPageHeader;
