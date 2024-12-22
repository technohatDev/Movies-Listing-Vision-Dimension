"use client";

import { Slider } from "@/shared/Slider";
import { useState, type FC } from "react";

interface RatingFilterProps {
  onValueChange: (value: number) => void;
}

export const RatingFilter: FC<RatingFilterProps> = ({ onValueChange }) => {
  const [rating, setRating] = useState<number>(0);

  return (
    <div className="flex flex-col gap-3 md:max-w-[300px]">
      <div className="flex justify-between items-center">
        <div className="text-background">Filter By Rate</div>
        <div className="text-background text-sm text-yellow-400">
          {rating.toFixed(1)}
        </div>
      </div>

      <Slider
        max={10}
        step={0.1}
        onValueChange={(value) => {
          setRating(value[0]);
          onValueChange(value[0]);
        }}
      />
    </div>
  );
};
