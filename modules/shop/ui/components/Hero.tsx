import img from "@/public/shop-bg.png";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-96 justify-center items-start px-10 md:px-20 py-12">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${img.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/68"></div>
      </div>

      {/* Hero Text Content */}
      <div className="relative z-10 text-white w-full mt-5">
        <h1 className="text-3xl md:text-5xl font-light mb-4 flex justify-center">
          Discover the Stories
        </h1>
        <h1 className="text-3xl md:text-5xl font-light mb-4 flex justify-center">
          Behind the Music
        </h1>
        <h2 className="text-xl md:text-2xl mt-10 font-light tracking-widest flex justify-center">
          Explore our collections of vinyl.
        </h2>
      </div>
    </div>
  );
};

export default Hero;
