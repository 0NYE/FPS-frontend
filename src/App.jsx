import { useState } from "react";

import { ThemeProvider } from "styled-components";

import Avatar from "./components/Avatar/Avatar.component";
import Button from "./components/Button/Button.component";
import TapButton from "./components/Button/TapButton.component";
import Ddown from "./components/dropdown/Ddown";
import MainHeader from "./components/MainHeader/MainHeader.component";
import Problem from "./components/Problem/Problem.component.jsx";

import GlobalStyles from "@/style/GlobalStyles";
import { theme } from "@/style/theme";



function App() {
  const content=["레이아웃","호버"];
  const [isPassed,setIsPassed] = useState(true);
  const [language, setLanguage] = useState({
    HTML: true,
    CSS: true,
    JS: false,
  });
  
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Problem title={"문제제목"}bookmark={229} like={573} dislike={27} successrate={84} makerName={"nickname"} content={content}
                  isPassed={isPassed} setIsPassed={setIsPassed} language={language} setLanguage={setLanguage}
        ></Problem>
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
