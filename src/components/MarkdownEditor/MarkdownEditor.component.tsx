import React from "react";

// eslint-disable-next-line import/named
import MDEditor, { MDEditorProps } from "@uiw/react-md-editor";

import { MarkdownEditorLayout } from "@/components/MarkdownEditor/MarkdownEditor.styles";

const MarkdownEditor = ({ value, onChange }: MDEditorProps) => {
  return (
    <MarkdownEditorLayout>
      <MDEditor
        value={"ASD"}
        onChange={onChange}
        preview="edit"
        visibleDragbar={false}
        fullscreen={false}
        height={"100%"}
        extraCommands={[]}
      ></MDEditor>
    </MarkdownEditorLayout>
  );
};

export default MarkdownEditor;
