import CodeResultFrame from "@/components/CodeResultFrame/CodeResultFrame.component";
import {
  ProblemSectionLayout,
  ProblemTitle,
  ProblemDescription,
  ProblemRenderBox,
  ProblemTipParagraph,
} from "@/components/ProblemSection/ProblemSection.styles";

interface ProblemSectionProps {
  id: string;
  title: string;
  descriptionMarkdown: string;
  htmlCode: string;
  cssCode: string;
  jsCode: string;
  tipText: string;
}

const ProblemSection = ({
  id,
  title,
  descriptionMarkdown,
  htmlCode,
  cssCode,
  jsCode,
  tipText,
}: ProblemSectionProps) => {
  return (
    <ProblemSectionLayout>
      <ProblemTitle>{`${id}. ${title}`}</ProblemTitle>
      <ProblemDescription>{descriptionMarkdown}</ProblemDescription>
      <ProblemRenderBox>
        <CodeResultFrame
          id="problem-iframe"
          html={htmlCode}
          css={cssCode}
          js={jsCode}
        />
      </ProblemRenderBox>
      <ProblemTipParagraph>{tipText}</ProblemTipParagraph>
    </ProblemSectionLayout>
  );
};

export default ProblemSection;
