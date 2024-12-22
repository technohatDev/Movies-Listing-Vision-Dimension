import { Skeleton } from "@/shared/Skeleton";

const LoadingMovies = () => {
  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {Array.from({ length: 20 }, (_, index) => (
        <Skeleton
          className="aspect-[22 / 31] w-full rounded-lg h-[310px]"
          key={index}
        />
      ))}
    </div>
  );
};

export default LoadingMovies;
