"use server";
import React from "react";
import HomePage from "./_components/HomePage";
import { getImage } from "./_lib/data-service";

// export async function generateMetaData() {
//   const images = await getImages();
//   return images;
// }

const Page = async () => {
  const data = await getImage();
  const imageUrls = data.map((obj) => obj.imageUrl);

  return <HomePage imageUrls={imageUrls} />;
};

export default Page;
