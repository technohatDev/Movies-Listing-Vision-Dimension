import { MovieCard } from "@/components/MovieCard/MovieCard";
import { SearchForm } from "@/components/SearchForm/SearchForm";
import { getAllMovies } from "@/lib/movies";
import type { FC } from "react";

export interface HomeSearchParams {
  search: string;
}

export interface HomeProps {
  searchParams: Promise<HomeSearchParams>;
}

const Home: FC<HomeProps> = async ({ searchParams }) => {
  const moviesList = await getAllMovies(await searchParams);

  return (
    <div className="py-12">
      <div className="container">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div>
            <div className="text-background font-semibold text-center text-3xl">
              Movies List
            </div>

            <SearchForm />
          </div>

          {/* Movies */}
          <div className="grid grid-cols-5 gap-5">
            {moviesList.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
