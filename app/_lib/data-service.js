import { supabase } from "./supabase";

export async function getMoviesByName(query) {
  const apiKey = "9dd6a06096e62e027d257b44a59fba23";
  const maxPages = 1; // Limit the number of pages to fetch
  const fetchPromises = [];

  for (let page = 1; page <= maxPages; page++) {
    fetchPromises.push(
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`
      ).then((res) => res.json())
    );
  }

  const results = await Promise.all(fetchPromises);
  const allMovies = results.flatMap((result) => result.results);

  return {
    results: allMovies,
  };
}

export async function getMovieById(movieId) {
  const apiKey = "9dd6a06096e62e027d257b44a59fba23";
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
  );
  const data = await res.json();
  return data;
}

export async function getMovieTrailerById(movieId) {
  const apiKey = "9dd6a06096e62e027d257b44a59fba23";
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`
  );
  const data = await res.json();
  return data;
}

export async function getImage() {
  let { data, error } = await supabase.from("images").select("imageUrl");

  return data;
}
