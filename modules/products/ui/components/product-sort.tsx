"use client";
import { Button } from "@/components/ui/button";
import { useProductFilters } from "../../hooks/use-product-filter";
import { cn } from "@/lib/utils";

export const ProductSort = () => {
  const [filters, setFilters] = useProductFilters();

  return (
    <div className="flex items-center gap-2">
      <Button
        size={"sm"}
        className={cn(
          "rounded-2xl bg-white hover:text-black",
          filters.sort === "curated" && "bg-black text-white border-white"
        )}
        variant={"secondary"}
        onClick={() => setFilters({ sort: "curated" })}
      >
        Curated
      </Button>

      <Button
        size={"sm"}
        className={cn(
          "rounded-2xl bg-white hover:text-black",
          filters.sort === "trending" && "bg-black text-white border-white"
        )}
        variant={"secondary"}
        onClick={() => setFilters({ sort: "trending" })}
      >
        Trending
      </Button>

      <Button
        size={"sm"}
        className={cn(
          "rounded-2xl bg-white hover:text-black",
          filters.sort === "hot_and_new" && "bg-black text-white border-white"
        )}
        variant={"secondary"}
        onClick={() => setFilters({ sort: "hot_and_new" })}
      >
        Hot & New
      </Button>
    </div>
  );
};
