"use client";
import FadeContent from "@/react-bits/Animations/FadeContent/FadeContent";
import { Button } from "../../../../components/ui/button";
import { ProductCard } from "@/modules/products/ui/components/product-card";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import AnimatedContent from "@/react-bits/Animations/AnimatedContent/AnimatedContent";

export const PopularVinyl = () => {
  const trpc = useTRPC();
  const { data, error } = useQuery(
    trpc.products.getMany.queryOptions({
      limit: 4,
    })
  );

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <FadeContent duration={1000} easing="ease-in-out" initialOpacity={0}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Vinyl Records
            </h2>
            <p className="text-gray-600">
              Handpicked gems from our trusted sellers
            </p>
          </div>
        </FadeContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data?.docs.map((product, index) => (
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

        <FadeContent
          duration={1000}
          easing="ease-in-out"
          initialOpacity={0}
          delay={(data?.docs ? data.docs.length + 1 : 1) * 200}
        >
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              <Link href="/shop">View All Records</Link>
            </Button>
          </div>
        </FadeContent>
      </div>
    </section>
  );
};
