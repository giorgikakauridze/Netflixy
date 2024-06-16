"use client";
import oppenheimer from "@/public/oppenheimer.jpg";
import bodyProblem from "@/public/3bodyproblem.jpg";
import hotd2 from "@/public/rame.jpg";
import kingdofOfApes from "@/public/kingdomOfApes.jpg";
import TVseries from "@/app/_components/TVseries";
import MovieSvg from "@/app/_components/MovieSvg";
import venom from "@/public/venom.jpg";
import strangerThings from "@/public/strangerThings.jpg";
import { createContext, useContext, useState } from "react";

const MoviesContext = createContext();
const initialState = [
  {
    src: hotd2,
    text: "House of the Dragon",
    year: "2022",
    type: "TV Series",
    svg: <TVseries />,
    id: "2359293",
  },
  {
    src: oppenheimer,
    text: "Oppenheimer",
    year: "2023",
    type: "Movie",
    svg: <MovieSvg />,
    id: "292348820",
  },
  {
    src: bodyProblem,
    text: "3 Body Problem",
    year: "2024",
    type: "TV Series",
    svg: <TVseries />,
    id: "12932312",
  },
  {
    src: strangerThings,
    text: "Stranger Things",
    year: "2016",
    type: "TV Series",
    svg: <TVseries />,
    id: "3459112",
  },
  {
    src: kingdofOfApes,
    text: "Kingdom of the Planet of the Apes",
    year: "2024",
    type: "Movie",
    svg: <MovieSvg />,
    id: "923135",
  },

  {
    src: venom,
    text: "Venom: The Last Dance",
    year: "2024",
    type: "Movie",
    svg: <MovieSvg />,
    id: "7234621",
  },
];

function MoviesProvider({ children }) {
  const [movies, setMovies] = useState(initialState);

  return (
    <MoviesContext.Provider value={{ movies }}>
      {children}
    </MoviesContext.Provider>
  );
}

function useMovies() {
  const context = useContext(MoviesContext);

  if (context === undefined)
    throw new Error("Context was used outside provider");

  return context;
}

export { MoviesProvider, useMovies };
