import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export async function uploadImage(file: File): Promise<string> {
  const IMGBB_API_KEY = "57cb63de76ef47313d77cfe5b6604aca";
  const MAX_FILE_SIZE = 15 * 1024 * 1024; // 15MB

  if (file.size > MAX_FILE_SIZE) {
    throw new Error("Image must be less than 15MB.");
  }

  const base64 = await toBase64(file);
  const formData = new FormData();
  formData.append("key", IMGBB_API_KEY);
  formData.append("image", base64.replace(/^data:image\/\w+;base64,/, ""));

  const res = await fetch("https://api.imgbb.com/1/upload", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();

  if (!data.success) {
    throw new Error("Upload failed");
  }
  return data.data.url;
}
