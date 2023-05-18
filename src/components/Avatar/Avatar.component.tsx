import { ProfileIMG, AvatarLayout } from "./Avatar.styles";

import basicProfileImg from "@/assets/images/basicprofile.png";

type AvatarSize = "large" | "medium" | "small";

const RadiusMap: { [K in AvatarSize]: string } = {
  small: "24px",
  medium: "48px",
  large: "100px",
};

interface AvatarProps {
  size?: AvatarSize;
  src?: string;
}

const Avatar = ({ size = "large", src = basicProfileImg }: AvatarProps) => {
  const radius = RadiusMap[size];

  return (
    <AvatarLayout>
      <ProfileIMG
        src={src}
        alt="profile"
        width={radius}
        height={radius}
      ></ProfileIMG>
    </AvatarLayout>
  );
};

export default Avatar;
