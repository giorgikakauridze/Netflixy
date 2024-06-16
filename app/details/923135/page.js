import Spinner from "@/app/_components/Spinner";
import ApesPage from "@/app/_components/apesPage";
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
        <ApesPage />
      </Suspense>
    </>
  );
};

export default page;
