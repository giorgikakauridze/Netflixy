"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ButtonSvg from "@/app/_components/ButtonSvg";
import CommaSvg from "@/app/_components/CommaSvg";
import Link from "next/link";
import { useMovies } from "@/app/_components/MoviesContext";

// Copyright By Giorgi Kakauridze

const HomePage = ({ imageUrls }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  const { movies } = useMovies();

  useEffect(() => {
    if (imageUrls.length) {
      const interval = setInterval(() => {
        setFadeClass("fade-out");
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
          setFadeClass("fade-in");
        }, 700);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [imageUrls]);

  return (
    <main className="relative w-full h-full min-h-screen bg-black ">
      <div className={` ${fadeClass} w-full h-screen`}>
        <Image
          src={movies[currentIndex].src}
          fill
          placeholder="blur"
          blurDataURL={movies[currentIndex].blurDataURL}
          quality={60}
          className="object-cover object-top"
          alt={movies[currentIndex].urlName}
        />

        <div className="md:gap-10 gap-5 opacity-80 md:mx-5  lg:px-36 lg:py-36 p-12 pb-16 inset-0 flex flex-col items-start justify-end h-full ">
          <h1
            className={`text-2xl md:text-4xl lg:text-5xl text-white  tracking-tight font-normal text-center ${fadeClass}`}
          >
            {movies[currentIndex].text}
          </h1>
          <p className="flex items-center gap-3 opacity-80 text-2xl ">
            <span>{movies[currentIndex].year}</span>
            <span>
              <CommaSvg />
            </span>
            <span>{movies[currentIndex].svg}</span>
            <span>
              <CommaSvg />
            </span>
            <span>{movies[currentIndex].type}</span>
          </p>
          <Link
            href={`/details/${movies[currentIndex].id}
          `}
            className={`w-[25svh] border-gray-500  transparent-blur-button xl:w-[27svh] xl:hover:w-[29svh]  px-5 py-3 rounded-[26px] border hover:w-[30svh]  flex justify-center gap-4     ${fadeClass}`}
          >
            <ButtonSvg />
            <span>Play Trailer</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
