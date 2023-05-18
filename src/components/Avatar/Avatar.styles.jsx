import styled from "styled-components";

export const Wrapper = styled.div``;

export const ProfileIMG = styled.img`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 50%;
  object-fit: cover;
`;
