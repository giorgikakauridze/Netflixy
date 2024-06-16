"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <main className="h-[100svh] flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <Link className="inline-block  bg-slate-500  px-6 py-3 text-lg" href="/">
        Go Back
      </Link>
    </main>
  );
}
