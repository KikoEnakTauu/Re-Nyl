"use client";
import { useTRPC } from "@/trpc/client";
import { GenreFilters } from "./GenreFilters";
import { SearchInput } from "./SearchInput";
import { useSuspenseQuery } from "@tanstack/react-query";

export const SearchFilters = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.genres.getMany.queryOptions());

  return (
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
      <SearchInput />
      <GenreFilters data={data} />
    </div>
  );
};

export const SearchFiltersLoading = () => {
  return (
    <div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
      <SearchInput />
      <div className="h-5" />
    </div>
  );
};
