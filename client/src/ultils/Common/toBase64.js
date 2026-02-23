import { Buffer } from "buffer";

export const fileToBase64 = (file) =>
  new Promise((resole, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resole(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const blobToBase64 = (blob) => {
  if (!blob) return null;
  return Buffer.from(blob, "base64").toString("binary");
};
