import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/Pagination";
import { cn } from "@/utils/cn.util";
import type { FC } from "react";

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  onPageChange,
  totalPages,
}) => {
  return (
    <PaginationComponent>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={cn({
              "text-background/70 border-background/70 border": currentPage > 1,
              "bg-background/70 cursor-not-allowed": currentPage === 1,
            })}
            href="#"
            onClick={(e) => {
              e.preventDefault();

              if (currentPage <= 1) return;
              onPageChange(currentPage - 1);
            }}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              className={cn({
                "text-background/70 border-background/70 border":
                  currentPage - 1 !== index,
              })}
              href="#"
              onClick={(e) => {
                e.preventDefault();

                onPageChange(index + 1);
              }}
              isActive={currentPage - 1 === index}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            className={cn({
              "text-background/70 border-background/70 border":
                currentPage < totalPages,
              "bg-background/70 cursor-not-allowed": currentPage >= totalPages,
            })}
            onClick={(e) => {
              e.preventDefault();

              if (currentPage >= totalPages) return;
              onPageChange(currentPage + 1);
            }}
            href="#"
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  );
};
