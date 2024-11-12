import React from "react";
import SectionTitle from "../SectionTitle";

export default function OurStory() {
  return (
    <div>
      <SectionTitle text="Our Story" />
      <div className="flex justify-center items-center">
        <video width="1000" height="600" controls preload="none">
          <source src=".././assets/videos/ourStory.mov" type="video/mov" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
