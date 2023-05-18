import { ThemeProvider } from "styled-components";

import GlobalStyles from "@/style/GlobalStyles";
import { theme } from "@/style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div></div>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
