import { CircleProgressbar } from "./CircleProgressBar.component";

import { CircleChartLayout } from "@/components/CircleChart/CircleChart.styles";
import { colors } from "@/style/theme";

const circleChartThemes = {
  bad: {
    color: colors.red,
    backgroundColor: colors.white,
  },
  good: {
    color: colors.orange,
    backgroundColor: colors.white,
  },
  best: {
    color: colors.green,
    backgroundColor: colors.white,
  },
};

const circleChartSizes = {
  small: {
    radius: 48,
    strokeWidth: 11,
  },
  medium: {
    radius: 68,
    strokeWidth: 16,
  },
};

type Theme = "best" | "good" | "bad";
type Size = "small" | "medium";

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
  const { radius, strokeWidth } = circleChartSizes[size];
  const progress = (score / perfectScore) * 100;
  const pointsForNextCategory = score;

  return (
    <CircleProgressbar
      progress={progress}
      radius={radius}
      strokeWidth={strokeWidth}
      strokeColor={color}
      strokeBackgroundColor={backgroundColor}
      duration={1}
    />
  );
};
