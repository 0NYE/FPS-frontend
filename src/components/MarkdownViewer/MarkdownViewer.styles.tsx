import styled from "styled-components";

export const MarkdownViewerLayout = styled.div`
  width: 100%;
  height: 100%;

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  em {
    font: italic;
  }

  blockquote,
  q {
    quotes: initial;
  }
`;
