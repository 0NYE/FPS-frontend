import React from "react";

import MainHeader from "@/components/MainHeader/MainHeader.component";
import {
  ProblemListPageLayout,
  ProblemListPageMain,
} from "@/pages/ProblemListPage/ProblemListPage.styles";

const ProblemListPage = () => {
  return (
    <ProblemListPageLayout>
      <MainHeader />
      <ProblemListPageMain>problem list page</ProblemListPageMain>
    </ProblemListPageLayout>
  );
};

export default ProblemListPage;
