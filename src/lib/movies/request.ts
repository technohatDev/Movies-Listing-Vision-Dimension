import Fetch from "@/app/_actions/Fetch";
import type { MovieItem } from "@/lib/movies/types";

export const getAllMovies = (params = {}): Promise<MovieItem[]> => {
  const queryString = new URLSearchParams(params).toString();

  return Fetch.get("/movies", params, {
    next: {
      tags: ["movies", "all", queryString],
    },
  });
};
