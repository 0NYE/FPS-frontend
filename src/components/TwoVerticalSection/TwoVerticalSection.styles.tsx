import styled from "styled-components";

export const TwoVerticalSectionLayout = styled.div`
  display: flex;
  justify-content: stretch;
  gap: 8px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.grey4};
`;

export const VerticalSection = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
`;
