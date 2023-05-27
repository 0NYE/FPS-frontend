import { Routes, Route } from "react-router-dom";

import { useAtom } from "jotai";
import { ThemeProvider } from "styled-components";

import { loginModalActiveAtom } from "@/atoms/modal";
import LoginModal from "@/components/LoginModal/LoginModal.component";
import CreateProblemPage from "@/pages/CreateProblemPage/CreateProblemPage.component";
import ProblemListPage from "@/pages/ProblemListPage/ProblemListPage.component";
import ProblemPage from "@/pages/ProblemPage/ProblemPage.component";
import GlobalStyles from "@/style/GlobalStyles";
import { theme } from "@/style/theme";

function App() {
  const [loginModalActive, setLoginModalActive] = useAtom(loginModalActiveAtom);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route index element={<ProblemListPage />} />
        <Route path="/problems" element={<ProblemListPage />} />
        <Route path="/create-problem" element={<CreateProblemPage />} />
        <Route path="/problems/:problem_id/*" element={<ProblemPage />} />
      </Routes>
      <LoginModal
        isOpen={loginModalActive}
        closeHandler={() => setLoginModalActive(false)}
      ></LoginModal>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
