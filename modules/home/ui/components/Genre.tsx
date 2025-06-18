"use client";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import FadeContent from "@/react-bits/Animations/FadeContent/FadeContent";
import AnimatedContent from "@/react-bits/Animations/AnimatedContent/AnimatedContent";

const categories = [
  { name: "Rock", count: 1250, icon: "🎸", link: "/shop/rock" },
  { name: "Jazz", count: 890, icon: "🎺", link: "/shop/jazz" },
  { name: "Pop", count: 650, icon: "🎤", link: "/shop/pop" },
  { name: "Country", count: 97, icon: "🪕", link: "/shop/country" },
  { name: "Reggae", count: 150, icon: "🪇", link: "/shop/reggae" },
];

export const Genre = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeContent duration={1000} easing="ease-in-out" initialOpacity={0}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse by Genre
            </h2>
            <p className="text-gray-600">
              Explore our vast collection across all music genres
            </p>
          </div>
        </FadeContent>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl w-full">
            {categories.map((category, index) => (
              <AnimatedContent
                distance={150}
                config={{ tension: 100, friction: 20 }}
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={index * 200}
              >
                <Link key={category.name} href={category.link}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer text-center p-8 min-h-[140px] flex flex-col justify-center">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-600">
                      {category.count} records
                    </p>
                  </Card>
                </Link>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
