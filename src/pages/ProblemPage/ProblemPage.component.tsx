import { Routes, Route } from "react-router-dom";

import ProblemPageHeader from "@/components/ProblemPageHeader/ProblemPageHeader.component";
import ProblemPageMenu from "@/components/ProblemPageMenu/ProblemPageMenu.component";
import {
  ProblemPageLayout,
  ProblemPageMain,
} from "@/pages/ProblemPage/ProblemPage.styles";
import ProblemSolve from "@/pages/ProblemSolve/ProblemSolve.component";
import ProblemSubmissions from "@/pages/ProblemSubmissions/ProblemSubmissions.components";

const ProblemPage = () => {
  return (
    <ProblemPageLayout>
      <ProblemPageHeader />
      <ProblemPageMenu />
      <ProblemPageMain>
        <Routes>
          <Route index element={<ProblemSolve />}></Route>
          <Route path="/solve" element={<ProblemSolve />}></Route>
          <Route path="/submissions" element={<ProblemSubmissions />}></Route>
        </Routes>
      </ProblemPageMain>
    </ProblemPageLayout>
  );
};

export default ProblemPage;
