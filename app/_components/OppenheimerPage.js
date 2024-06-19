import Image from "next/image";
import React from "react";
import TextExpander from "./TextExpander";

const OppenheimerPage = () => {
  const overview =
    "Oppenheimer is a 2023 epic biographical thriller drama film written, directed, and produced by Christopher Nolan. It follows the life of J. Robert Oppenheimer, the American theoretical physicist who helped develop the first nuclear weapons during World War II";

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
            src="https://i.pinimg.com/564x/e5/dd/89/e5dd8946ec656421e3ed366f8ea3ea20.jpg"
            alt="star wars poster"
          />
        </div>
        <div className=" flex flex-col gap-2 md:gap-12 2xl:gap-32 ">
          <h1 className="md:text-5xl"> Oppenheimer </h1>
          <h3 className="md:text-3xl">Release Date: 2023</h3>
          <h3 className="md:text-3xl">Language: EN</h3>
          <h3 className="md:text-3xl">Budget: 100M</h3>
          <p className="md:text-4xl"> Revenue: 960M</p>
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
          src={`https://www.youtube.com/embed/R1yOrl1ynOg?controls=1&rel=0&modestbranding=1`}
          title="YouTube video player"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </div>
    </>
  );
};

export default OppenheimerPage;
