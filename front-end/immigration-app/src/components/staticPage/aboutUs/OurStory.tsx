import SectionTitle from "@/components/SectionTitle";
import React from "react";

export default function OurStory() {
  return (
    <div className="mt-4">
      <SectionTitle text="Our Story" />
      <div className="flex justify-center items-center">
        <iframe
          width="1000"
          height="600"
          src="https://www.youtube.com/embed/W3bUpEIK3Ac?si=Ykxfwhiv-MXRyGAi"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
