"use client";

import React from "react";
import img from "@/public/hero-bg.jpg";
import { Button } from "../../../../components/ui/button";

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
      <div className="relative z-10 mt-8">
        <Button size="lg">Discover</Button>
      </div>
    </section>
  );
};

export default Hero;
