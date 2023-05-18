import { ProfileIMG, Wrapper } from "./Avatar.styles";

import basicProfileImg from "@/assets/images/basicprofile.png";

type AvatarSize = "large" | "medium" | "small";

const RadiusMap: { [K in AvatarSize]: number } = {
  small: 24,
  medium: 48,
  large: 100,
};

interface AvatarProps {
  size?: AvatarSize;
  src?: string;
}

const Avatar = ({ size = "large", src = basicProfileImg }: AvatarProps) => {
  const radius = RadiusMap[size];

  return (
    <Wrapper>
      <ProfileIMG
        src={src}
        alt="profile"
        width={radius}
        height={radius}
      ></ProfileIMG>
    </Wrapper>
  );
};

export default Avatar;
