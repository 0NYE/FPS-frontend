import { CircleProgressbar } from "./CircleProgressBar.component";

import {
  CircleChartLayout,
  CircleChartSpan,
} from "@/components/CircleChart/CircleChart.styles";
import { colors } from "@/style/theme";

const circleChartThemes = {
  bad: {
    color: colors.red,
    backgroundColor: colors.lightRed,
  },
  good: {
    color: colors.orange,
    backgroundColor: colors.lightOrange,
  },
  best: {
    color: colors.green,
    backgroundColor: colors.lightGreen,
  },
};

const circleChartSizes = {
  small: {
    radius: 24,
    strokeWidth: 5,
    fontSize: 14,
  },
  medium: {
    radius: 34,
    strokeWidth: 7,
    fontSize: 16,
  },
  large: {
    radius: 50,
    strokeWidth: 9,
    fontSize: 22,
  },
};

type Theme = "best" | "good" | "bad";
type Size = "small" | "medium" | "large";

interface CircleChartProps {
  score: number;
  perfectScore: number;
  size: Size;
}

export const CircleChart = ({
  score,
  perfectScore = 100,
  size = "small",
}: CircleChartProps) => {
  let theme: Theme = "bad";
  if (score >= perfectScore * 0.75) theme = "best";
  else if (score >= perfectScore * 0.25) theme = "good";

  const { color, backgroundColor } = circleChartThemes[theme];
  const { radius, strokeWidth, fontSize } = circleChartSizes[size];
  const progress = (score / perfectScore) * 100;

  return (
    <CircleChartLayout radius={radius}>
      <CircleProgressbar
        progress={progress}
        radius={radius}
        strokeWidth={strokeWidth}
        strokeColor={color}
        strokeBackgroundColor={backgroundColor}
        duration={1.25}
      />
      <CircleChartSpan color={color} fontSize={fontSize}>
        {score}
      </CircleChartSpan>
    </CircleChartLayout>
  );
};
