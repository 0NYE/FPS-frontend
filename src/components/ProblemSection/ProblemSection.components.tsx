import CodeResultFrame from "@/components/CodeResultFrame/CodeResultFrame.component";
import MarkdownViewer from "@/components/MarkdownViewer/MarkdownViewer.component";
import {
  ProblemSectionLayout,
  ProblemTextSection,
  ProblemTitle,
  ProblemTagList,
  ProblemRenderBox,
  ProblemTipParagraph,
} from "@/components/ProblemSection/ProblemSection.styles";
import Tag from "@/components/Tag/Tag.component";

interface ProblemSectionProps {
  id?: string;
  title: string;
  tags: string[];
  descriptionMarkdown: string;
  htmlCode: string;
  cssCode: string;
  jsCode: string;
  tipText?: string;
}

const ProblemSection = ({
  id,
  title,
  tags,
  descriptionMarkdown,
  htmlCode,
  cssCode,
  jsCode,
  tipText = "",
}: ProblemSectionProps) => {
  return (
    <ProblemSectionLayout>
      <ProblemTextSection>
        <ProblemTitle>{`${id ? `${id}. ` : ``}${title}`}</ProblemTitle>
        <ProblemTagList>
          {tags.map((tag) => (
            <li key={tag}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ProblemTagList>
        <MarkdownViewer markdown={descriptionMarkdown} />
      </ProblemTextSection>
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
