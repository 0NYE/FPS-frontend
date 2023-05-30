import SyntaxHighlighter, {
  // eslint-disable-next-line import/named
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";

import { LanguageSyntaxHighlighterLayout } from "@/components/LanguageSyntaxHighlighter/LanguageSyntaxHighlighter.styles";

const LanguageSyntaxHighlighter = (props: SyntaxHighlighterProps) => {
  return (
    <LanguageSyntaxHighlighterLayout>
      <SyntaxHighlighter {...props} wrapLongLines={true}></SyntaxHighlighter>
    </LanguageSyntaxHighlighterLayout>
  );
};

export default LanguageSyntaxHighlighter;
