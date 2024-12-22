"use client";

import { MovieCard } from "@/components/MovieCard";
import { RatingFilter } from "@/components/RatingFilter";
import type { MovieItem } from "@/lib/movies";
import { Pagination } from "@/shared/Pagination";
import { useEffect, useState, type FC } from "react";

interface MoviesListProps {
  moviesList: MovieItem[];
}

export const MoviesList: FC<MoviesListProps> = ({ moviesList }) => {
  const [filteredMoviesByRating, setFilteredMoviesByRating] = useState<
    MovieItem[]
  >([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rating, setRating] = useState(0);

  const totalPages = Math.ceil(moviesList.length / 10);

  useEffect(() => {
    if (!Array.isArray(moviesList)) return;
    if (rating) return;

    setFilteredMoviesByRating(moviesList.slice(0, 10));
  }, [moviesList, rating]);

  return (
    <div className="flex flex-col gap-7">
      {/* Rating Filter */}
      <RatingFilter
        onValueChange={(value) => {
          setRating(value);
          const filteredMovies = moviesList.filter(
            (movie) => movie.rating >= value
          );

          setFilteredMoviesByRating(filteredMovies);
        }}
      />

      {/* Movies */}
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {filteredMoviesByRating.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>

      {/* Pagination */}
      {!rating && (
        <Pagination
          currentPage={currentPage}
          onPageChange={(page) => {
            setCurrentPage(page);

            const paginatedMovies = moviesList.slice(
              (page - 1) * 10,
              page * 10
            );
            setFilteredMoviesByRating(paginatedMovies);
          }}
          totalPages={totalPages}
        />
      )}
    </div>
  );
};
