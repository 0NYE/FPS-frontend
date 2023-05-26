export const mergeHtmlCssJs = (html: string, css = "", js = "") => {
  return `
  <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  </html>
`;
};
