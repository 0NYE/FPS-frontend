import { ThemeProvider } from "styled-components";

import Avatar from "./components/Avatar/Avatar.component";

import GlobalStyles from "@/style/GlobalStyles";
import { theme } from "@/style/theme";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Avatar></Avatar>
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
