"use server";
import fs from "fs";
import path from "path";

export async function getImages() {
  const imagesDirectory = path.join(process.cwd(), "public");
  const filenames = fs.readdirSync(imagesDirectory);

  const images = filenames.map((filename) => ({
    src: `/images/${filename}`,
  }));

  return images;
}
