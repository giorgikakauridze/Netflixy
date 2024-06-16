import Spinner from "@/app/_components/Spinner";
import VenomPage from "@/app/_components/venomPage";
import Link from "next/link";
import React, { Suspense } from "react";

const page = () => {
  return (
    <>
      <div className="py-32 mx-20">
        <Link href="/" className="underline">
          Back to the Main Page
        </Link>
      </div>
      <Suspense fallback={<Spinner />}>
        <VenomPage />
      </Suspense>
    </>
  );
};

export default page;
