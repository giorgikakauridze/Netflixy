import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <>
      {movie.poster_path ? (
        <Link href={`/details/${movie.id}`}>
          <div className="bg-gray-800 cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl w-64">
            <Image
              quality={70}
              height={300}
              width={300}
              className="object-top object-cover"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt="star wars poster"
            />
          </div>
        </Link>
      ) : null}
    </>
  );
};

export default MovieCard;
