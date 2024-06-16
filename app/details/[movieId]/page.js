import DetailsPage from "@/app/_components/DetailsPage";
import Spinner from "@/app/_components/Spinner";
import { getMovieById, getMovieTrailerById } from "@/app/_lib/data-service";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

const Page = async ({ params }) => {
  const { movieId } = params;
  const movieTrailer = await getMovieTrailerById(movieId);
  const movieData = await getMovieById(movieId);

  return (
    <>
      <div className="py-32 lg:mx-20 mx-5">
        <Link href="/" className="underline">
          Back to the Main Page
        </Link>
      </div>
      <Suspense fallback={<Spinner />}>
        <DetailsPage movieTrailer={movieTrailer} movie={movieData} />
      </Suspense>
    </>
  );
};

export default Page;
