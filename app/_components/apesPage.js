import Image from "next/image";
import React from "react";
import TextExpander from "./TextExpander";

const ApesPage = () => {
  const overview =
    "Synopsis. Many generations after Caesar's death, apes have established numerous clans, while humans have become feral. Noa, a chimpanzee from a falconry-practicing ape clan, prepares for a coming-of-age ceremony by collecting eagle eggs with his friends Anaya and Soona.";

  return (
    <>
      {" "}
      <div className=" lg:ml-20 ml-5   lg:gap-40 md:gap-10 gap-3 flex   ">
        <div className="relative w-[100vh] ">
          <Image
            fill
            quality={100}
            // height="1"
            className="object-top object-cover"
            src="https://i.pinimg.com/736x/32/8f/3b/328f3be2071aa81bd1061e40e4e984a3.jpg"
            alt="star wars poster"
          />
        </div>
        <div className=" flex flex-col gap-2 md:gap-12 2xl:gap-32 ">
          <h1 className="md:text-5xl">Kingdom of the Planet of The Apes</h1>
          <h3 className="md:text-3xl">Release Date: 2024</h3>
          <h3 className="md:text-3xl">Language: EN</h3>
          <h3 className="md:text-3xl">Budget: 160M</h3>
          <p className="md:text-4xl"> Revenue: 237M</p>
          <p className="md:text-lg lg:text-3xl w-2/3">
            <span className="md:text-3xl">Overview: </span>{" "}
            <span className="opacity-70">
              <TextExpander overview={overview} />
            </span>
          </p>
        </div>
      </div>
      <div className="flex py-40  justify-center">
        <iframe
          className="w-full h-72   sm:w-3/4 md:h-[500px] lg:h-[750px] lg:w-2/3 "
          src={`https://www.youtube.com/embed/XtFI7SNtVpY?controls=0&rel=0&modestbranding=1`}
          title="YouTube video player"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </div>
    </>
  );
};

export default ApesPage;
