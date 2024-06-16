"use client";
import React, { Suspense } from "react";
import MovieCard from "./MovieCard";
import { useSearchParams } from "next/navigation";
import Spinner from "./Spinner";
import Link from "next/link";

const MoviesPage = ({ movies, queryInput }) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  return (
    <div className="md:m-40  mt-24 ml-10 ">
      <Link href="/" className="underline">
        Back to the Main Page
      </Link>
      <h1 className="text-2xl text-white mb-10">
        Search Results for: <span className="opacity-80">{queryInput}</span>
      </h1>
      <Suspense fallback={<Spinner />}>
        {movies.length ? (
          <div className="flex flex-wrap gap-4">
            {movies?.map((movie, i) => (
              <MovieCard movie={movie} key={i} />
            ))}
          </div>
        ) : (
          <div className="mt-60 flex justify-center">
            {" "}
            Could not find any results
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default MoviesPage;
