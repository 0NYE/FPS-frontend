// eslint-disable-next-line import/named
import MDEditor, { MDEditorProps } from "@uiw/react-md-editor";

import { MarkdownEditorLayout } from "@/components/MarkdownEditor/MarkdownEditor.styles";

const MarkdownEditor = ({ value, onChange }: MDEditorProps) => {
  return (
    <MarkdownEditorLayout>
      <MDEditor
        value={value}
        onChange={onChange}
        preview="edit"
        visibleDragbar={false}
        fullscreen={false}
        extraCommands={[]}
        style={{ minHeight: "100%" }}
      ></MDEditor>
    </MarkdownEditorLayout>
  );
};

export default MarkdownEditor;
