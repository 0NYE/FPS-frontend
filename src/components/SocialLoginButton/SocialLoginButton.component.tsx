import { ReactComponent as GithubSVG } from "@/assets/images/github.svg";
import { ReactComponent as GoogleSVG } from "@/assets/images/google.svg";
import {
  SocialLoginButtonLayout,
  SocialLoginButtonParagraph,
  SocialLoginButtonSvgContainer,
} from "@/components/SocialLoginButton/SocialLoginButton.styles";

type SocialLoginButtonType = "google" | "github";

interface SocialLoginButtonProps {
  type: SocialLoginButtonType;
}

const SocialLoginButtonSvgMap: {
  [K in SocialLoginButtonType]: typeof GoogleSVG;
} = {
  google: GoogleSVG,
  github: GithubSVG,
};

const SocialLoginButtonTextMap: {
  [K in SocialLoginButtonType]: string;
} = {
  google: "구글 아이디로 로그인",
  github: "깃허브 아이디로 로그인",
};

const SocialLoginButton = ({ type }: SocialLoginButtonProps) => {
  const SocialServiceIconSvg = SocialLoginButtonSvgMap[type];
  const text = SocialLoginButtonTextMap[type];

  return (
    <SocialLoginButtonLayout>
      <SocialLoginButtonSvgContainer>
        <SocialServiceIconSvg />
      </SocialLoginButtonSvgContainer>
      <SocialLoginButtonParagraph>{text}</SocialLoginButtonParagraph>
    </SocialLoginButtonLayout>
  );
};

export default SocialLoginButton;
