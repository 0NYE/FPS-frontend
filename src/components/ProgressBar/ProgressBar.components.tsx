import {
  ProgressBarLayout,
  BackgroundBar,
  InnerBar,
  ProgressBarLabel,
} from "@/components/ProgressBar/ProgressBar.styles";

interface ProgressBarProps {
  min?: number;
  max?: number;
  value: number;
  color?: string;
  animated?: boolean;
  label?: string;
}

const ProgressBar = ({
  min = 0,
  max = 100,
  value,
  color = "#0D6EFD",
  animated = false,
  label = "",
}: ProgressBarProps) => {
  const percentage = ((value - min) / (max - min)) * 100;
  return (
    <ProgressBarLayout>
      <BackgroundBar color={color} />
      <InnerBar percentage={percentage} color={color} animated={animated} />
      <ProgressBarLabel>{label}</ProgressBarLabel>
    </ProgressBarLayout>
  );
};

export default ProgressBar;
