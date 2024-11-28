import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import GetInTouchForm from "@/components/staticPage/contactUs/GetInTouchForm";
import React from "react";

export default function page() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 pb-10 mt-10 ">
      <Breadcrumbs />
      <div>
        <SectionTitle text="Book a free initial consultation" />
        <div className="w-full m-auto md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md">
          <GetInTouchForm />
        </div>
      </div>
    </div>
  );
}
