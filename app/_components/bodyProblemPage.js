import Image from "next/image";
import React from "react";
import TextExpander from "./TextExpander";

const BodyProblemPage = () => {
  const overview =
    "The series portrays a fictional past, present, and future wherein Earth encounters an alien civilization from a nearby system of three Sun-like stars orbiting one another, a representative example of the three-body problem in orbital mechanics";

  return (
    <>
      {" "}
      <div className=" lg:ml-20 ml-5   lg:gap-40 md:gap-10 gap-3 flex   ">
        <div className="relative w-[100vh] ">
          <Image
            fill
            quality={30}
            // height="1"
            className="object-top object-cover"
            src="https://i.pinimg.com/564x/20/1b/ec/201becdadca4cfb31957c5d5330b0609.jpg"
            alt="star wars poster"
          />
        </div>
        <div className=" flex flex-col gap-2 md:gap-12 2xl:gap-32 ">
          <h1 className="md:text-5xl"> 3 Body Problem </h1>
          <h3 className="md:text-3xl">Release Date: 2024</h3>
          <h3 className="md:text-3xl">Language: EN</h3>
          <h3 className="md:text-3xl">Budget: 80M</h3>
          <p className="md:text-4xl"> Revenue: 640M</p>
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
          src={`https://www.youtube.com/embed/mogSbMD6EcY?controls=1&rel=0&modestbranding=1`}
          title="YouTube video player"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </div>
    </>
  );
};

export default BodyProblemPage;
