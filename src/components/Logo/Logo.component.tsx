import { Link } from "react-router-dom";

import { LogoLayout, LogoParagraph } from "@/components/Logo/Logo.styles";

const Logo = () => {
  return (
    <LogoLayout>
      <Link to="/">
        <LogoParagraph>fps</LogoParagraph>
      </Link>
    </LogoLayout>
  );
};

export default Logo;
