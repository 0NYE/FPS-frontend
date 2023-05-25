import { CodeResultFrameLayout } from "@/components/CodeResultFrame/CodeResultFrame.styles";

interface CodeResultFrameProps
  extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  html?: string;
  css?: string;
  js?: string;
}

const CodeResultFrame = ({
  html = "",
  css = "",
  js = "",
  ...props
}: CodeResultFrameProps) => {
  const resultSourceCode = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `;

  return (
    <CodeResultFrameLayout>
      <iframe
        srcDoc={resultSourceCode}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
        {...props}
      />
    </CodeResultFrameLayout>
  );
};

export default CodeResultFrame;
