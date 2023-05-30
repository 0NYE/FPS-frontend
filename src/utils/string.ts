export const changeEscapesToReal = (str: string) => {
  return str
    .replaceAll("\\n", "\n")
    .replaceAll("\\'", "'")
    .replaceAll(`\\"`, '"')
    .replaceAll("\\&", "&")
    .replaceAll("\\r", "\r")
    .replaceAll("\\t", "\t")
    .replaceAll("\\b", "\b")
    .replaceAll("\\f", "\f");
};
