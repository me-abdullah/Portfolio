import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export function SpotlightHero() {
  return (
    <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">
      {/* Background Grid */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      {/* Spotlights */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="DimGray"
      />
      <Spotlight
        className="h-[80vh] w-[50vw] top-10 left-full"
        fill="DimGray"
      />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="Silver" />

      {/* Content Section */}
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Transforming Concepts into Seamless User Experiences
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
          Hi! I&apos;m Muhammad Abdullah, a Next.js Developer based in Karachi,Pakistan. Dynamic Web
          Magic with Next.js is what I do.
        </p>

        <div className="flex justify-center mt-8">
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SpotlightHero;
