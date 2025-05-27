import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ProductListView } from "@/modules/products/ui/views/product-list-view";
import { DEFAULT_LIMIT } from "@/constants";

interface Props {
  params: Promise<{
    genre: string;
  }>;
  searchParams: Promise<{
    minPrice: string | undefined;
    maxPrice: string | undefined;
  }>;
}

const page = async ({ params, searchParams }: Props) => {
  const { genre } = await params;
  const { minPrice, maxPrice } = await searchParams;

  const queryClient = getQueryClient();
  void queryClient.prefetchInfiniteQuery(
    trpc.products.getMany.infiniteQueryOptions({
      genre,
      maxPrice,
      minPrice,
      limit: DEFAULT_LIMIT,
    })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductListView genre={genre} />
    </HydrationBoundary>
  );
};

export default page;
