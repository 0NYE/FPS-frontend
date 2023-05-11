import React, { useState } from "react";

import { Wrapper, StyledAvatar } from "./Avatar.styles";

const sizes = {
  small: {
    radius: 24
  },
  medium: {
    radius: 48
  },
  large: {
    radius: 100
  },
};

const Avatar = ({size="medium"}) => {
  const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
  const radius=sizes[size].radius;

  
  return (
    <Wrapper>
      <StyledAvatar rad={radius}
      backgroundImg={Image}
      style={{margin:'20px'}} 
      >
      </StyledAvatar>
    </Wrapper>
  );
};

export default Avatar;
