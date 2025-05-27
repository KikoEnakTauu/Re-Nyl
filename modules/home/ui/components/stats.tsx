"use client";
import AnimatedContent from "@/react-bits/Animations/AnimatedContent/AnimatedContent";
import CountUp from "@/react-bits/TextAnimations/CountUp/CountUp";

export const Stats = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <AnimatedContent
            distance={150}
            config={{ tension: 50, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
          >
            <div className="flex flex-col gap-y-3">
              <CountUp
                from={0}
                to={53242}
                separator="."
                direction="up"
                duration={2.5}
                className="text-4xl font-bold"
              />
              <div className="text-white">Vinyl Records</div>
            </div>
          </AnimatedContent>

          <AnimatedContent
            distance={150}
            config={{ tension: 50, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
          >
            <div className="flex flex-col gap-y-3">
              <CountUp
                from={0}
                to={12983}
                separator="."
                direction="up"
                duration={2.5}
                className="text-4xl font-bold"
              />
              <div className="text-white">Active Sellers</div>
            </div>
          </AnimatedContent>

          <AnimatedContent
            distance={150}
            config={{ tension: 50, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
          >
            <div className="flex flex-col gap-y-3">
              <span className="text-4xl font-bold">
                <CountUp
                  from={0}
                  to={98}
                  separator="."
                  direction="up"
                  duration={6}
                />
                %
              </span>
              <div className="text-white">Satisfaction Rate</div>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};
