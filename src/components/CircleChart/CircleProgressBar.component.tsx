import { useEffect, useRef } from "react";

interface CircleProgressbarProps {
  progress: number;
  radius?: number;
  strokeWidth?: number;
  strokeColor?: string;
  strokeBackgroundColor?: string;
  animationStartMs?: number;
  animationDuration?: number;
}

export const CircleProgressbar = ({
  progress,
  radius = 100,
  strokeWidth = 12,
  strokeColor = "#000",
  strokeBackgroundColor = "",
  animationStartMs = 300,
  animationDuration = 1,
}: CircleProgressbarProps) => {
  if (progress > 100) progress = 100;
  if (progress < 0) progress = 0;

  const diameter = radius * 2;
  const normalizedRadius = radius - strokeWidth / 1.5;
  const circumference = normalizedRadius * 2 * Math.PI;

  const circle = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (!circle.current) return;

    circle.current.style.transition = "";
    circle.current.style.strokeDashoffset = circumference.toString();

    const id = setTimeout(() => {
      if (!circle.current) return;
      const newOffset = circumference - (progress / 100) * circumference;

      circle.current.style.transition = `stroke-dashoffset ${animationDuration}s`;
      circle.current.style.strokeDashoffset = newOffset.toString();
    }, animationStartMs);

    return () => clearTimeout(id);
  }, [progress, circumference, animationDuration]);

  return (
    <div>
      <svg height={diameter} width={diameter}>
        <circle
          className="circle"
          fill="none"
          stroke={strokeBackgroundColor}
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          ref={circle}
          className="circle"
          stroke={strokeColor}
          fill={strokeBackgroundColor}
          strokeDasharray={`${circumference}`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(270 ${radius} ${radius})`}
        ></circle>
      </svg>
    </div>
  );
};
