"use client";
import { useTRPC } from "@/trpc/client";
import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useProductFilters } from "../../hooks/use-product-filter";
import { ProductCard, ProductCardSkeleton } from "./product-card";
import { Button } from "@/components/ui/button";
import { DEFAULT_LIMIT } from "@/constants";
import { InboxIcon } from "lucide-react";
import AnimatedContent from "@/react-bits/Animations/AnimatedContent/AnimatedContent";

interface Props {
  genre?: string;
}

export const ProductList = ({ genre }: Props) => {
  const [filters] = useProductFilters();

  const trpc = useTRPC();
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useSuspenseInfiniteQuery(
      trpc.products.getMany.infiniteQueryOptions(
        {
          ...filters,
          genre,
          limit: DEFAULT_LIMIT,
        },
        {
          getNextPageParam: (lastPage) => {
            return lastPage.docs.length > 0 ? lastPage.nextPage : undefined;
          },
        }
      )
    );

  if ((data?.pages?.[0]?.docs?.length ?? 0) === 0) {
    return (
      <div className="border border-black border-dashed flex items-center justify-center p-8 flex-col gap-y-4 bg-white w-full rounded-lg">
        <InboxIcon />
        <p className="text-base font-medium">No products found</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {data.pages
          .flatMap((page) => page.docs)
          .map((product, index) => (
            <AnimatedContent
              distance={150}
              config={{ tension: 100, friction: 20 }}
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={index * 200}
            >
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                imageUrl={product.image.url}
                artistName={product.artist}
                authorUsername={product.tenant?.name}
                price={product.price}
              />
            </AnimatedContent>
          ))}
      </div>
      <div className="flex justify-center pt-8">
        {hasNextPage && (
          <Button
            variant={"second"}
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}
            className="font-medium disabled:opacity-50"
          >
            Load More
          </Button>
        )}
      </div>
    </>
  );
};

export const ProductListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {Array.from({ length: DEFAULT_LIMIT }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};
