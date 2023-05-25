export const readTextFromFile = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.onload = () => {
        if (!reader.result || reader.result instanceof ArrayBuffer) return;
        resolve(reader.result);
      };
      reader.readAsText(file, "utf-8");
    } catch (error) {
      reject(error);
    }
  });
};
