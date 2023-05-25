import {
  TwoVerticalSectionLayout,
  VerticalSection,
} from "@/components/TwoVerticalSection/TwoVerticalSection.styles";

interface TwoVerticalSectionProps {
  leftChildren?: JSX.Element;
  rightChildren?: JSX.Element;
}

const TwoVerticalSection = ({
  leftChildren,
  rightChildren,
}: TwoVerticalSectionProps) => {
  return (
    <TwoVerticalSectionLayout>
      <VerticalSection>{leftChildren}</VerticalSection>
      <VerticalSection>{rightChildren}</VerticalSection>
    </TwoVerticalSectionLayout>
  );
};

export default TwoVerticalSection;
