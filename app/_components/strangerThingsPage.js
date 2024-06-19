import Image from "next/image";
import React from "react";
import TextExpander from "./TextExpander";

const StrangerThingsPage = () => {
  const overview =
    "Stranger Things is set in the fictional rural town of Hawkins, Indiana, in the 1980s. The nearby Hawkins National Laboratory ostensibly performs scientific research for the United States Department of Energy but also secretly experiments with the paranormal and supernatural, sometimes with human test subjects";

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
            src="https://i.pinimg.com/564x/d3/cb/da/d3cbda7118c130b62307347ff17af286.jpg"
            alt="star wars poster"
          />
        </div>
        <div className=" flex flex-col gap-2 md:gap-12 2xl:gap-32 ">
          <h1 className="md:text-5xl"> Stranger Things </h1>
          <h3 className="md:text-3xl">Release Date: 2016</h3>
          <h3 className="md:text-3xl">Language: EN</h3>
          <h3 className="md:text-3xl">Budget: 270M</h3>
          <p className="md:text-4xl"> Revenue: 5.2B</p>
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
          src={`https://www.youtube.com/embed/b9EkMc79ZSU?controls=1&rel=0&modestbranding=1`}
          title="YouTube video player"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </div>
    </>
  );
};

export default StrangerThingsPage;
