import { CircleProgressbar } from "./CircleProgressBar.component";

import { colors } from "@/style/theme";

const themes = {
  bad: {
    color: colors.red,
    backgroundColor: colors.white
  },
  good: {
    color: colors.orange,
    backgroundColor: colors.white
  },
  elite: {
    color: colors.green,
    backgroundColor: colors.white
  }
};

const sizes = {
  small: {
    radius: 48,
    stroke: 11
  },
  medium: {
    radius: 68,
    stroke: 16
  }
};

export const CircleChart = ({
  currentPoints = 25,
  goalPoints = 100,
  theme = "",
  size = "small",
}) => {
  if(currentPoints<=100&&currentPoints>75) theme="elite"
  else if(currentPoints<=75&&currentPoints>25) theme="good"
  else theme="bad"
  
  const style = themes[theme];
  const radius = sizes[size];
  const progress = (currentPoints * 100) / goalPoints;
  const pointsForNextCategory = currentPoints;

  return (
    <CircleProgressbar
      {...style}
      {...radius}
      duration={1}
      progress={progress}
    >
      {(
        <div
          style={{
            textAlign: "center"
          }}
        >
          <br />
          <span>{pointsForNextCategory}</span>
        </div>
      )}
    </CircleProgressbar>
  );
};
