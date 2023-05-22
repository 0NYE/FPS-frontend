import styled from "styled-components";

export const CircleChartLayout = styled.div<{ radius: number }>`
  position: relative;
  width: ${(props) => props.radius * 2}px;
  height: ${(props) => props.radius * 2}px;
`;

export const CircleChartSpan = styled.span<{ color: string; fontSize: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
  font-weight: 700;
`;
