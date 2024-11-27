import FreeConsultationBtn from "@/components/FreeConsultationBtn";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";

interface QuizResultProps {
  title: string;
  image: StaticImport;
  alt: string;
  sizes?: string;
}

export default function QuizResult({
  title,
  image,
  alt,
  sizes,
}: QuizResultProps) {
  return (
    <div className="flex flex-col w-auto">
      <p>Your pathway option could be ...</p>
      <h1 className="flex justify-center text-2xl font-bold items-center pb-5">
        {title}!
      </h1>
      <h2 className="text-sm">
        You might benefit from applying for {title}. Find out more by talking
        with our consultant!
      </h2>
      <Image
        src={image}
        alt={alt}
        sizes={sizes}
        className="w-80 items-center m-auto rounded-lg"
      />
      <div className="flex justify-center items-center">
        <FreeConsultationBtn />
      </div>
    </div>
  );
}
