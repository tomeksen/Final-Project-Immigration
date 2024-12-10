import React from "react";
import passport from "@/assets/bg_passport.jpeg";
import work from "@/assets/bg_work.jpeg";
import study from "@/assets/bg_grad_students.jpeg";
import SectionTitle from "@/components/SectionTitle";
import BgImageContainer from "@/components/BgImageContainer";
import { Reveal } from "@/utils/Reveal";

export default function SectionThree() {
  return (
    <Reveal>
      <div className="md:flex justify-center p-11 md:ml-5 lg:ml-10">
        <div className="flex w-full">
          <div className="flex-col gap-4 justify-center items-center align-middle w-full">
            <SectionTitle text="Canadian Immigration Services" />

            <div className="flex flex-col items-center gap-6 justify-center align-middle w-full md:flex-row">
              <div className="w-60 h-60 rounded-sm">
                <BgImageContainer
                  bgImage={passport}
                  alt="Passports"
                  text="Immigrate"
                  sizes="100vw 100vh"
                  className="rounded-2xl"
                />
              </div>

              <div className="w-60 h-60 rounded-sm">
                <BgImageContainer
                  bgImage={work}
                  alt="Friends working"
                  text="Work"
                  sizes="100vw 100vh"
                  className="rounded-2xl"
                />
              </div>

              <div className="w-60 h-60 rounded-sm">
                <BgImageContainer
                  bgImage={study}
                  alt="Grad students"
                  text="Study"
                  sizes="100vw 100vh"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
