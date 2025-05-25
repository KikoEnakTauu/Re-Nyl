import Hero from "@/modules/home/ui/components/Hero";
import Footer from "@/modules/home/ui/components/Footer";
import { Feature } from "@/modules/home/ui/components/Feature";
import { PopularVinyl } from "@/modules/home/ui/components/PopularVinyl";
import { Stats } from "@/modules/home/ui/components/stats";
import { Genre } from "@/modules/home/ui/components/Genre";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Stats />
      <Feature />
      <PopularVinyl />
      <Genre />
      {/* CTA */}
    </main>
  );
}
