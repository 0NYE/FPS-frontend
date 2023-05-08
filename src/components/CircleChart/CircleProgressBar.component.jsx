import { useEffect, useRef } from "react";

import { CircleContent} from "./CircleProgressBar.styles";

export const CircleProgressbar = ({
  progress = 0,
  radius = 100,
  stroke = 10,
  color = "",
  backgroundColor = "",
  duration = 3,
}) => {

  if (progress > 100) progress = 100;
  if (progress < 0) progress = 0;

  const diameter = radius * 2;
  const normalizedRadius = radius - stroke / 1.5;
  const circumference = normalizedRadius * 2 * Math.PI;

  const circle = useRef();

  useEffect(() => {
    circle.current.style.transition = "";
    circle.current.style.strokeDashoffset = circumference;

    const id = setTimeout(() => {
      const newOffset = circumference - (progress / 100) * circumference;

      circle.current.style.transition = `stroke-dashoffset ${duration}s`;
      circle.current.style.strokeDashoffset = newOffset;
    }, 300);

    return () => clearTimeout(id);
  }, [progress, circumference, duration]);

  return (
    <div>
      <svg height={diameter} width={diameter}>
        <circle
          className="circle"
          fill="none"
          stroke={backgroundColor}
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          ref={circle}
          className="circle"
          stroke={color}
          fill="none"
          strokeDasharray={`${circumference}`}
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(270 ${radius} ${radius})`}
        >
          
        </circle>
      </svg>
      {/* {children && (
        <CircleContent
          diameter={diameter}
          stroke={stroke}
          radius={radius}
        >
          {children}
        </CircleContent>
      )} */}
    </div>
  );
};
