import { Routes, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import ProblemListPage from "@/pages/ProblemListPage/ProblemListPage.component";
import GlobalStyles from "@/style/GlobalStyles";
import { theme } from "@/style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route index element={<ProblemListPage />}></Route>
      </Routes>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
