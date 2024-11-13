import Breadcrumbs from "@/components/Breadcrumbs";
import FreeConsultationBtn from "@/components/FreeConsultationBtn";
import ImmigrationFAQ from "@/components/immigratePage/ImmigrationFAQ";
import Testimonials from "@/components/mainPage/Testimonials";
import WhereToStart from "@/components/mainPage/WhereToStart";
import SectionTitle from "@/components/SectionTitle";
import React from "react";
import handshake from "@/assets/work/handshake.jpeg";
import BgImageContainerHeader from "@/components/BgImageContainerHeader";
import DiscoverOptions from "@/components/work/DiscoverOptions";

export default function page() {
  return (
    <div>
      <div className="h-80">
        <BgImageContainerHeader
          bgImage={handshake}
          alt="Handshake between workers"
          text="Work"
          className="object-cover h-32 md:object-bottom xl:object-center"
        />
      </div>
      <Breadcrumbs />
      <div className="px-4 sm:px-8 lg:px-16 pb-10 mt-10 ">
        <SectionTitle text="How to work in Canada?" />
        <p>
          Over 400,000 international workers come to Canada each year, playing a
          crucial role in the country's economy and diversity. Canada offers
          numerous opportunities for skilled workers seeking to advance their
          careers and gain international experience. Whether you're looking for
          temporary work or a permanent move, understanding your options is the
          first step toward working in Canada.
        </p>
        <br />
        <p>
          Our team at Up Immigration is here to guide you through the process,
          helping you find the program that best suits your needs for a
          successful transition to your new life in Canada. Contact us today to
          start your journey to Canada with confidence.
        </p>
        <FreeConsultationBtn />
      </div>
      <DiscoverOptions />
      <WhereToStart />
      <Testimonials />
      <ImmigrationFAQ />
    </div>
  );
}
