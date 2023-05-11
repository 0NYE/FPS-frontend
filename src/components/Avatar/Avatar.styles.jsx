import styled from "styled-components";

import bp from "@/assets/images/basicprofile.png"

export const Wrapper = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
`;

export const StyledAvatar = styled.div`
  width: ${({rad})=>rad}px;
  height: ${({rad})=>rad}px;
  border-radius: 50%;
  // background-image: url(${(backgroundImg)=>backgroundImg});
  background-image: url(${bp});
	background-repeat: no-repeat;
  background-size: cover;
`;
