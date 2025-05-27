import { ProductDetail } from "@/modules/products/ui/components/product-detail";
import { TrackList } from "@/modules/products/ui/components/track-list";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Link from "next/link";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const page = async ({ params }: Props) => {
  const { id } = await params;
  const queryClient = getQueryClient();

  //   fix these
  void queryClient.prefetchQuery(
    trpc.products.getOne.queryOptions({
      id,
    })
  );

  return (
    <div className="my-20">
      <Link href="/shop" className="px-20">
        <span className="text-2xl font-bold">&larr; Back to Shop</span>
      </Link>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductDetail id={id} />
        <TrackList id={id} />
      </HydrationBoundary>
    </div>
  );
};

export default page;
