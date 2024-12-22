import { MoviesList } from "@/components/MoviesList/MoviesList";
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

          <MoviesList moviesList={moviesList} />
        </div>
      </div>
    </div>
  );
};

export default Home;
