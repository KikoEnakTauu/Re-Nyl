"use client";
import { Music, ShoppingCart, Star, Store, Users, Zap } from "lucide-react";
import AnimatedContent from "@/react-bits/Animations/AnimatedContent/AnimatedContent";
import FadeContent from "@/react-bits/Animations/FadeContent/FadeContent";

export const Feature = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <FadeContent duration={1000} easing="ease-in-out" initialOpacity={0}>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Re-Nyl?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're more than just a marketplace - we're a community of vinyl
              enthusiasts dedicated to preserving music history
            </p>
          </div>
        </FadeContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedContent
            distance={150}
            config={{ tension: 100, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
          >
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Music className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Authentic Records</h3>
              <p className="text-gray-600">
                Every vinyl is verified for authenticity. Our expert team
                ensures you're getting genuine pressings and rare finds.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent
            distance={150}
            config={{ tension: 100, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={200}
          >
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Secure Transactions
              </h3>
              <p className="text-gray-600">
                Protected payments, buyer guarantee, and secure shipping. Your
                money and records are safe with us.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent
            distance={150}
            config={{ tension: 100, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={400}
          >
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Community</h3>
              <p className="text-gray-600">
                Connect with collectors worldwide. Share your passion, discover
                new music, and build lasting relationships.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent
            distance={150}
            config={{ tension: 100, friction: 20 }}
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={600}
          >
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Curation</h3>
              <p className="text-gray-600">
                Our team of vinyl experts curates the best selections and
                provides detailed condition reports for every record.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};
