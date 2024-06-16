import React, { Suspense } from "react";
import MoviesPage from "../_components/MoviesPage";
import { getMoviesByName } from "../_lib/data-service";
import Spinner from "../_components/Spinner";

export default async function Page({ searchParams }) {
  const query = searchParams.q;
  let movies = [];

  if (query) {
    const data = await getMoviesByName(query);
    movies = data.results;
  }

  return (
    <div className="h-[100svh]">
      <Suspense fallback={<Spinner />}>
        <MoviesPage movies={movies} queryInput={query} />
      </Suspense>
    </div>
  );
}
