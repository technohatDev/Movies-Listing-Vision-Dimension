import React from "react";
import { Star as StarEmpty } from "lucide-react";

interface RatingProps {
  value: number;
  max: number;
  size?: string;
}

export const Rating: React.FC<RatingProps> = ({
  value,
  max,
  size = "24px",
}) => {
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: max }, (_, index) => {
        const fillPercent = Math.min(1, Math.max(0, value - index)) * 100;

        return (
          <div
            key={index}
            className="relative"
            style={{ width: size, height: size }}
          >
            {/* Empty star as background */}
            <StarEmpty
              size={size}
              className="absolute top-0 left-0 text-gray-300"
            />
            {/* Filled star using gradient */}
            <StarEmpty
              size={size}
              className="absolute top-0 left-0 text-yellow-400"
              style={{
                clipPath: `polygon(0 0, ${fillPercent}% 0, ${fillPercent}% 100%, 0% 100%)`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
