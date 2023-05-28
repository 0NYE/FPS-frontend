import { useEffect, useRef } from "react";

import MDEditor from "@uiw/react-md-editor";

import { MarkdownViewerLayout } from "@/components/MarkdownViewer/MarkdownViewer.styles";

interface MarkdownViewerProps {
  markdown: string;
}

const MarkdownViewer = ({ markdown }: MarkdownViewerProps) => {
  const layoutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!layoutRef.current) return;

    const allLinkElement = layoutRef.current.querySelectorAll("a");
    for (const linkElement of allLinkElement) {
      linkElement.setAttribute("target", "_blank");
    }
  }, [markdown]);

  return (
    <MarkdownViewerLayout ref={layoutRef}>
      <MDEditor.Markdown source={markdown} />
    </MarkdownViewerLayout>
  );
};

export default MarkdownViewer;
