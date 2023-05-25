import React from "react";

import MainHeader from "@/components/MainHeader/MainHeader.component";
import TwoVerticalSection from "@/components/TwoVerticalSection/TwoVerticalSection.component";
import {
  CreateProblemPageLayout,
  CreateProblemPageMain,
} from "@/pages/CreateProblemPage/CreateProblemPage.styles";

const CreateProblemPage = () => {
  return (
    <CreateProblemPageLayout>
      <MainHeader />
      <CreateProblemPageMain>
        <TwoVerticalSection />
      </CreateProblemPageMain>
    </CreateProblemPageLayout>
  );
};

export default CreateProblemPage;
