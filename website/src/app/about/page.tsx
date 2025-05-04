"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Header />
      <main className="bg-white text-red-800 font-[family-name:var(--font-geist-sans)] px-6 sm:px-12 lg:px-24 py-16">
        {/* Manifesto and Core Values Section */}
        <section className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-16 items-center mb-32">
          {/* Image on the Left */}
          <div className="relative w-full sm:w-1/2 aspect-w-1 aspect-h-1 overflow-hidden rounded-lg shadow-lg">
            <Image
              src={isHovered ? "/founder-hover.jpg" : "/founder.jpg"}
              alt="Founder"
              layout="fill"
              objectFit="cover"
              className="transition duration-500 ease-in-out"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </div>

          {/* Text on the Right */}
          <div className="sm:w-1/2">
            <h1 className="text-3xl sm:text-5xl font-light leading-tight mb-6">
              We are architects of feeling,
              <br />
              technologists of emotion.
            </h1>
            <p className="text-lg sm:text-xl text-red-700 mb-8">
              Two Twelve is a creative concept studio fusing code, craft, and
              culture.
            </p>
            <div className="text-center text-xl uppercase font-medium my-5">
              Our core values
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-red-700">
              <div className="text-center">
                <h2 className="text-xl mb-4">Art as System</h2>
              </div>
              <div className="text-center">
                <h2 className="text-xl mb-4">Technology as Material</h2>
              </div>
              <div className="text-center">
                <h2 className="text-xl mb-4">Emotion as Interface</h2>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
