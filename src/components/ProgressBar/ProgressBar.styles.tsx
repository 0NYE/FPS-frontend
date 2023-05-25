import styled from "styled-components";

export const ProgressBarLayout = styled.div`
  height: 16px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.grey4};
  overflow: hidden;
`;

export const InnerBar = styled.div<{
  percentage: number;
  color: string;
  animated: boolean;
}>`
  width: ${(props) => `${props.percentage}%`};
  height: 100%;
  background-color: ${(props) => props.color};
  color: ${(props) => props.theme.colors.white};
  font-size: 13px;
  text-align: center;
  transition: ${(props) => (props.animated ? "all 600ms ease" : "none")};
  overflow: hidden;
`;
