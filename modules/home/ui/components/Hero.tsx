"use client";

import React from "react";
import img from "@/public/hero-bg.jpg";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";
import { ShoppingCart, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex flex-col h-screen justify-center items-start px-10 md:px-20 py-12">
      {/* Background Image + Dark Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Hero Text Content */}
      <div className="relative z-10 text-white max-w-5xl mt-5">
        <h2 className="text-5xl md:text-8xl font-bold leading-none">
          Spin the Classic. <br />
          Discover New Grooves.
        </h2>
      </div>

      {/* CTA Button */}
      <div className="relative z-10 mt-8 flex gap-5">
        {/* <Button size="lg">
          
        </Button> */}
        <Button asChild variant={"primary"} size="lg" className="text-lg px-8 ">
          <Link href="/shop" className="flex items-center">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Start Shopping
          </Link>
        </Button>

        <Button asChild variant={"second"} size="lg" className="text-lg px-8">
          <Link href="/sign-up" className="flex items-center">
            <Users className="mr-2 h-5 w-5" />
            Become a Seller
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
