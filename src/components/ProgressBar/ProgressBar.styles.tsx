import styled from "styled-components";

export const ProgressBarLayout = styled.div`
  position: relative;
  height: 16px;
  border-radius: 4px;
  overflow: hidden;
`;

export const BackgroundBar = styled.div<{ color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  opacity: 0.35;
`;

export const InnerBar = styled.div<{
  percentage: number;
  color: string;
  animated: boolean;
}>`
  position: absolute;
  width: ${(props) => `${props.percentage}%`};
  height: 100%;
  background-color: ${(props) => props.color};
  color: ${(props) => props.theme.colors.white};
  font-size: 13px;
  text-align: center;
  transition: ${(props) => (props.animated ? "all 600ms ease" : "none")};
  overflow: hidden;
`;
