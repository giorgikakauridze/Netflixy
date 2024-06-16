"use client";
import Image from "next/image";
import React from "react";
import TextExpander from "./TextExpander";

const DetailsPage = ({ movieTrailer, movie }) => {
  const officialTrailer = movieTrailer.results
    .filter((trailer) => trailer.official && trailer.type === "Trailer")
    .reverse();
  console.log(movie);
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
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="star wars poster"
          />
        </div>
        <div className=" flex flex-col gap-2 md:gap-12 2xl:gap-32 ">
          <h1 className="md:text-5xl"> {movie.original_title} </h1>
          <h3 className="md:text-3xl">Release Date: {movie.release_date}</h3>
          <h3 className="md:text-3xl">
            Language: {movie.original_language.toUpperCase()}
          </h3>
          <h3 className="md:text-3xl">
            Budget: {Math.round(movie.budget / 1000000)}M
          </h3>
          <p className="md:text-4xl">
            {" "}
            Revenue: {Math.round(movie.revenue / 1000000)}m
          </p>
          <p className="md:text-lg lg:text-3xl w-2/3">
            <span className="md:text-3xl">Overview: </span>{" "}
            <span className="opacity-70">
              <TextExpander overview={movie.overview} />
            </span>
          </p>
        </div>
      </div>
      <div className="flex py-40  justify-center">
        {officialTrailer ? (
          <iframe
            className="w-full h-72   sm:w-3/4 md:h-[500px] lg:h-[750px] lg:w-2/3 "
            src={`https://www.youtube.com/embed/${officialTrailer[0]?.key}?controls=0&rel=0&modestbranding=0`}
            title="YouTube video player"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          ></iframe>
        ) : (
          <h2>Trailer could not be found</h2>
        )}
      </div>
    </>
  );
};

export default DetailsPage;
