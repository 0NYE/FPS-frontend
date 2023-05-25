import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import CreateProblemPage from "@/pages/CreateProblemPage/CreateProblemPage.component";
import ProblemListPage from "@/pages/ProblemListPage/ProblemListPage.component";
import GlobalStyles from "@/style/GlobalStyles";
import { theme } from "@/style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route index element={<ProblemListPage />} />
        <Route path="/problems" element={<ProblemListPage />} />
        <Route path="/create-problem" element={<CreateProblemPage />} />
      </Routes>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
