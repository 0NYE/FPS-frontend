import styled from "styled-components";

export const AvatarLayout = styled.div``;

export const ProfileIMG = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  object-fit: cover;
`;
