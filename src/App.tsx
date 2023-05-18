import { useState } from "react";

import { ThemeProvider } from "styled-components";

import Button from "./components/Button/Button.component";
import TapButton from "./components/Button/TapButton.component";

import GlobalStyles from "@/style/GlobalStyles";
import { theme } from "@/style/theme";

function App() {
  const contents: string[] = ["button", "layout"];
  const [clicked, setClicked] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button buttonColor={theme.colors.red} content={contents}></Button>
        <TapButton
          content={contents}
          isClicked={clicked}
          setIsClicked={setClicked}
        ></TapButton>
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
