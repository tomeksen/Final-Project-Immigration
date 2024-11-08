import BgImageContainerHeader from "@/components/BgImageContainerHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import SectionTitle from "@/components/SectionTitle";
import SubSection from "@/components/SubSection";
import Image from "next/image";
import Link from "next/link";
import provincial from "@/assets/all_options_pics/provincial_nominee.png";
import provinces from "@/assets/provinces.jpeg";
import building from "@/assets/building.jpeg";
import { ProvincialProgram } from "./programsByProvince";

export default function page() {
  return (
    <div>
      <div className="h-80">
        <BgImageContainerHeader
          bgImage={provincial}
          alt="Lake"
          text="Provincial Nominee Programs"
          className="object-cover h-32 md:object-bottom lg:object-bottom xl:object-center"
        />
      </div>
      <div className="pt-4 sm:mx-10 md:mx-20 lg:mx-[124px]">
        <Breadcrumbs />
      </div>
      <div className="px-4 sm:px-8 lg:px-16 pb-10">
        <SectionTitle text="Overview of Provincial Nominee Programs" />
        <div>
          <SubSection
            title="What are Provincial Nominee Programs?"
            description="The Provincial Nominee Programs (PNPs) allow Canadian provinces and territories to nominate individuals who wish to immigrate to Canada and settle in a specific province. These programs are designed to address the unique labor market needs of each province and territory."
          />
          <h3 className="font-semibold">Benefits of PNPs</h3>
          <p>
            PNPs provide a faster pathway to permanent residency, address
            specific provincial labor market needs, and offer a variety of
            categories to attract skilled workers, entrepreneurs, and
            international graduates.
          </p>
          <SectionTitle text="Provinces and Territories" />
          <Image
            src={provinces}
            alt="Provinces Map"
            className="rounded-xl max-w-auto md:max-w-lg  mx-auto"
          />
          <SubSection title="Provincial Nominee Programs by Province" />
          {ProvincialProgram.map((province) => (
            <div key={province.id}>
              <h3 className="font-semibold my-5">{province.title}</h3>
              <p className="mb-4">{province.description}</p>
            </div>
          ))}
          <SectionTitle text="Express Entry Provincial Nominee Programs" />
          <Image
            src={building}
            alt="Provinces Map"
            className="rounded-xl max-w-auto md:max-w-lg  mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
