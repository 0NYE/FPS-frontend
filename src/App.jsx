import { ThemeProvider } from "styled-components";

import Avatar from "./components/Avatar/Avatar.component";

import GlobalStyles from "@/style/GlobalStyles";
import { theme } from "@/style/theme";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Avatar src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}></Avatar>
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
