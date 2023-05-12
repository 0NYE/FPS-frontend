import React, { useState } from "react";

import { Wrapper} from "./Avatar.styles";
import "./Avatar.css"

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

const Avatar = ({size="large"}) => {
  const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
  const radius =sizes[size].radius;

  
  return (
    <Wrapper>
      <img
      className="profile"
      src={Image}
      alt=""
      width={radius}
      height={radius}
      >

      </img>
    </Wrapper>
  );
};

export default Avatar;
