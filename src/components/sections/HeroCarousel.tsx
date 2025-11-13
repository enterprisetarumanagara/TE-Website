"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const images = [
  "/carousel/dummy1.jpeg",
  "/carousel/dummy2.jpeg",
  "/carousel/dummy3.jpeg",
  "/carousel/dummy4.jpeg",
  "/carousel/dummy5.jpeg",
];

const AUTO_DELAY = 3500;

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, AUTO_DELAY);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      {/* IMAGE WRAPPER */}
      <div
        className="
          relative w-full max-w-[1400px]
          h-[220px] sm:h-[260px] md:h-[320px] lg:h-[400px] xl:h-[500px]
          overflow-hidden rounded-[20px]
          shadow-[0_10px_24px_rgba(0,0,0,0.16)]
        "
      >
        {/* SLIDER */}
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="min-w-full h-full relative">
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* DOT INDICATORS */}
      <div className="mt-3 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={clsx(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              i === index
                ? "bg-neutral-900 scale-110"
                : "bg-neutral-400/60 hover:bg-neutral-600/80"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
