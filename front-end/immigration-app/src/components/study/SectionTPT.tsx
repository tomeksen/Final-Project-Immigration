import Image, { StaticImageData } from "next/image";
import React from "react";

interface Section {
  title: string;
  img: string | StaticImageData;
  imgDescription: string;
  paragraph: string;
}

export default function SectionTPT({
  title,
  img,
  imgDescription,
  paragraph,
}: Section) {
  return (
    <div className="my-4">
      <h3 className="font-semibold text-xl">{title}</h3>
      <div className="my-5">
        {typeof img === "string" ? (
          <img src={img} alt={imgDescription} />
        ) : (
          <Image
            src={img}
            alt={imgDescription}
            className="w-96 h-60 object-cover rounded-lg"
          />
        )}
      </div>
      <p>{paragraph}</p>
    </div>
  );
}
