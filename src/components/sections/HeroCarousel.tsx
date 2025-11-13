"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";

const images = [
  "/carousel/slide1.png",
  "/carousel/slide1.png",
  "/carousel/slide1.png",
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[1400px] h-[500px] overflow-hidden rounded-[20px] shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
      <div
        className="flex h-full transition-transform duration-700"
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

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={clsx(
              "w-3 h-3 rounded-full transition-all",
              i === index
                ? "bg-white shadow-md scale-80"
                : "bg-white/80 hover:bg-white/80"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
