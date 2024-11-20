import React from "react";
import SectionTitle from "../SectionTitle";
import FreeConsultationBtn from "../FreeConsultationBtn";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import GetInTouchForm from "./GetInTouchForm";
import { FormProvider } from "react-hook-form";

export default function GetInTouch() {
  return (
    <div className="flex gap-4 flex-col w-1/2 justify-between align-middle mx-auto items-center md:flex-row lg:flex-row mb-4">
      <div>
        <div className="w-96 bg-white p-6 rounded-lg shadow-md h-96 flex flex-col justify-between">
          <div>
            <SectionTitle text="Get in touch" />
            <p className="flex items-center gap-1">
              <FaWhatsapp />
              +1 672-588-1360
            </p>
            <p className="flex items-center gap-1">
              <MdEmail />
              info@upimmigration.ca
            </p>
          </div>
          <div className="w-full items-end">
            <FreeConsultationBtn />
          </div>
        </div>
      </div>
      <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md max-h-96">
        <SectionTitle text="Send us a message" />
        <GetInTouchForm />
      </div>
    </div>
  );
}
