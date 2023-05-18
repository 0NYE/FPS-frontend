import React, { useState } from "react";

import { ProfileIMG, Wrapper } from "./Avatar.styles";

const sizes = {
  small: {
    radius: 24,
  },
  medium: {
    radius: 48,
  },
  large: {
    radius: 100,
  },
};

const Avatar = ({ size = "large", src }) => {
  const [Image, setImage] = useState(src);
  const radius = sizes[size].radius;

  return (
    <Wrapper>
      <ProfileIMG
        src={Image}
        alt="profile"
        width={radius}
        height={radius}
      ></ProfileIMG>
    </Wrapper>
  );
};

export default Avatar;
