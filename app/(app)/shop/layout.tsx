import React from "react";
import Hero from "@/modules/shop/ui/components/Hero";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import ProductView from "@/modules/shop/ui/components/ProductView";
import {
  SearchFilters,
  SearchFiltersLoading,
} from "@/modules/shop/ui/components/SearchFilters";
import { getQueryClient, trpc } from "@/trpc/server";
import { Suspense } from "react";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.genres.getMany.queryOptions());
  return (
    <main className="flex-1">
      <Hero />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<SearchFiltersLoading />}>
          <SearchFilters />
        </Suspense>
      </HydrationBoundary>
      {children}
      {/* <ProductView />*/}
    </main>
  );
}
