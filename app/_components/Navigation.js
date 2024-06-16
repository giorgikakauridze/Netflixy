"use client";
import React, { useState, useEffect } from "react";
import SearchSvg from "./SearchSvg";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query) {
        router.push(`/search?q=${query}`);
      } else {
        router.push(`/`);
      }
    }, 1000); // 1000 milliseconds = 1 second

    // Cleanup function to clear the timeout if query changes
    return () => {
      clearTimeout(handler);
    };
  }, [query, router]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="absolute top-0 lg:right-[10%]  items-center right-[5%] w-full z-50 flex gap-5 justify-end p-4">
      <input
        placeholder="Search movie or TV series..."
        className="focus:outline-none lg:focus:w-[30%] lg:hover:w-[30%] hover:w-[65%] focus:w-[65%] transparent-blur-input lg:w-[25%] w-[50%] px-6 py-2"
        value={query}
        onChange={handleChange}
      />
      <SearchSvg />
    </div>
  );
};

export default Navigation;
