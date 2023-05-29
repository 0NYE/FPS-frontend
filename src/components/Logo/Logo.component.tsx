import { Link } from "react-router-dom";

import { ReactComponent as Aim } from "@/assets/images/aim-arrow.svg";
import { LogoLayout, LogoParagraph } from "@/components/Logo/Logo.styles";

const Logo = () => {
  return (
    <LogoLayout to="/">
      <Aim />
      <LogoParagraph>fps</LogoParagraph>
    </LogoLayout>
  );
};

export default Logo;
