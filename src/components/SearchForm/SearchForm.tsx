"use client";

import useQueryParams from "@/hooks/useQueryParams";
import { Button } from "@/shared/Button";
import { Input } from "@/shared/Input";
import { Search } from "lucide-react";
import { useState } from "react";

export const SearchForm = () => {
  const { updateQueryParams, getQueryParam } = useQueryParams();
  const [searchKeyword, setSearchKeyword] = useState(
    getQueryParam("search") || ""
  );

  return (
    <form
      className="flex gap-3 items-center mt-8"
      onSubmit={(e) => {
        e.preventDefault();

        updateQueryParams({ search: searchKeyword });
      }}
    >
      <Input
        className="text-background placeholder:text-white placeholder:text-opacity-70 px-6 py-4 h-auto rounded-3xl border-none bg-white bg-opacity-10"
        placeholder="Search movies by title or keyword..."
        value={searchKeyword}
        onChange={(e) => {
          setSearchKeyword(e.target.value);
        }}
      />

      <Button
        variant="outline"
        className="px-6 py-4 h-auto box-content rounded-[30px]"
      >
        Search <Search />
      </Button>
    </form>
  );
};
