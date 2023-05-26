import html2canvas from "html2canvas";

export const iframeToPNG = async (
  element: HTMLIFrameElement,
  fileName: string
) => {
  const target = element.contentWindow?.document.querySelector(
    "body"
  ) as HTMLBodyElement;
  const canvas = await html2canvas(target, {
    useCORS: true,
    allowTaint: true,
    foreignObjectRendering: true,
  });

  const imageUrl = canvas.toDataURL("image/png");
  const blob = await fetch(imageUrl).then((res) => res.blob());
  return new File([blob], `${fileName}.png`, {
    type: "image/png",
  });
};
