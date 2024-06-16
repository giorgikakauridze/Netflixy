import Image from "next/image";
import React from "react";
import TextExpander from "./TextExpander";

const VenomPage = () => {
  const overview =
    "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance";

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
            src="https://i.pinimg.com/736x/2f/28/45/2f2845fd8c0ba57e2be869b7520a2431.jpg"
            alt="star wars poster"
          />
        </div>
        <div className=" flex flex-col gap-2 md:gap-12 2xl:gap-32 ">
          <h1 className="md:text-5xl"> Venom: The Last Dance </h1>
          <h3 className="md:text-3xl">Release Date: 2024</h3>
          <h3 className="md:text-3xl">Language: EN</h3>
          <h3 className="md:text-3xl">Budget: 100M</h3>
          <p className="md:text-4xl"> Revenue: 520M</p>
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
          src={`https://www.youtube.com/embed/__2bjWbetsA?controls=0&rel=0&modestbranding=1`}
          title="YouTube video player"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </div>
    </>
  );
};

export default VenomPage;
