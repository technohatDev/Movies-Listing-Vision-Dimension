"use client";

import { Rating } from "@/components/Rating/Rating";
import type { MovieItem } from "@/lib/movies";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/Tooltip";
import { Info } from "lucide-react";
import Image from "next/image";
import type { FC } from "react";

interface MovieCardProps {
  movie: MovieItem;
}

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative overflow-hidden">
            <Image
              src={movie.poster}
              alt={movie.title}
              width={220}
              height={310}
              className="aspect-[22 / 31] w-full rounded-lg"
            />

            <div className="w-full h-full from-transparent to-[rgba(0,0,0,0.6)] absolute top-0 z-40 bg-gradient-to-b flex flex-col justify-end group">
              <div
                className="cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md"
                onClick={() => {
                  window.open(movie.website, "_blank");
                }}
              >
                <Info
                  className="absolute top-4 right-4 z-50 text-white"
                  size="32px"
                />
              </div>

              <div className="p-4 text-white flex flex-col gap-2">
                <div className="font-semibold text-lg">{movie.title}</div>
                <div className="text-sm">{movie.year}</div>
                <Rating value={movie.rating} max={10} size="16px" />
              </div>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>{movie.plot}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
