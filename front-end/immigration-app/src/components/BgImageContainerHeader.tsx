import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface BgImage {
  bgImage: StaticImport;
  alt: string;
  text: string;
  sizes?: string;
  className?: string;
}

export default function BgImageContainerHeader({
  bgImage,
  alt,
  text,
  sizes,
  className,
}: BgImage) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={bgImage}
        alt={alt}
        layout="fill"
        sizes={sizes}
        // objectFit="cover"
        className={className}
      />
      {/* overlay filter */}
      <div className="absolute inset-0 bg-sky-600 opacity-30 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full text-center text-white">
        <h1 className="text-3xl font-bold max-w-md leading-normal">{text}</h1>
      </div>
    </div>
  );
}
