import { ThemeProvider } from "styled-components";

import GlobalStyles from "@/style/GlobalStyles";
import { theme } from "@/style/theme";
import MainHeader from "./components/MainHeader/MainHeader.component";
import Dropdown from "./components/dropdown/Dropdown.component";
import { BasicCheckbox } from "./components/Checkbox/Checkbox.style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <BasicCheckbox></BasicCheckbox> */}
        <Dropdown text="test"></Dropdown>
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
