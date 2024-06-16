import Image from "next/image";
import React from "react";
import TextExpander from "./TextExpander";

const HotdPage = () => {
  const overview =
    "Based on material from George R. R. Martins book Fire & BloodHouse of the Dragon tells the story of the Dance of Dragons andthe events leading up to the brutal civil war. King Viserys I Targaryen rules over an unprecedented time of peace, butquestions about his succession threaten to send the realm intochaos.";

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
            src="https://i.pinimg.com/564x/ec/0b/f4/ec0bf4c3c76191feda8e182ae45f171e.jpg"
            alt="star wars poster"
          />
        </div>
        <div className=" flex flex-col gap-2 md:gap-12 2xl:gap-32 ">
          <h1 className="md:text-5xl"> The House of the Dragon </h1>
          <h3 className="md:text-3xl">Release Date: 2022</h3>
          <h3 className="md:text-3xl">Language: EN</h3>
          <h3 className="md:text-3xl">Budget: 20M</h3>
          <p className="md:text-4xl"> Revenue: 2.6M</p>
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
          src={`https://www.youtube.com/embed/YN2H_sKcmGw?controls=0&rel=0&modestbranding=1`}
          title="YouTube video player"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </div>
    </>
  );
};

export default HotdPage;

// " Based on material from George R. R. Martins book Fire & Blood,
// House of the Dragon tells the story of the Dance of Dragons and
// the events leading up to the brutal civil war. King Viserys I
// Targaryen rules over an unprecedented time of peace, but
// questions about his succession threaten to send the realm into
// chaos."
