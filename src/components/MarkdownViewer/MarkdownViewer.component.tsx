import MDEditor from "@uiw/react-md-editor";

import { MarkdownViewerLayout } from "@/components/MarkdownViewer/MarkdownViewer.styles";

interface MarkdownViewerProps {
  markdown: string;
}

const MarkdownViewer = ({ markdown }: MarkdownViewerProps) => {
  return (
    <MarkdownViewerLayout>
      <MDEditor.Markdown source={markdown} />
    </MarkdownViewerLayout>
  );
};

export default MarkdownViewer;
