import html2canvas from "html2canvas";

export const elementToPNG = async (element: HTMLElement, fileName: string) => {
  const canvas = await html2canvas(element);
  const imageUrl = canvas.toDataURL("image/png");
  const blob = await fetch(imageUrl).then((res) => res.blob());
  return new File([blob], `${fileName}.png`, {
    type: "image/png",
  });
};
