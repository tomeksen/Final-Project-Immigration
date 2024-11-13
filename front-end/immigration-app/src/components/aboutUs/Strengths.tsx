import React from "react";
import SectionTitle from "../SectionTitle";
import { FaUser, FaHeart, FaBriefcase, FaCertificate } from "react-icons/fa";
import Image from "next/image";
import rcic from "@/assets/rcic.png";
import capic from "@/assets/capic.png";

export default function Strengths() {
  const features = [
    {
      icon: <FaUser size={32} />,
      title: "Personalized consultation",
      description:
        "Let's start from a free initial consultation to figure out what would be the best immigration pathway for you together.",
    },
    {
      icon: <FaHeart size={32} />,
      title: "Compassion & support in every step",
      description:
        "Experience a compassionate, welcoming approach, making your immigration journey more simple and supportive.",
    },
    {
      icon: <FaBriefcase size={32} />,
      title: "HR and LMIA expertise",
      description:
        "Benefit from over 5 years of experience in Human Resources and expert guidance on obtaining LMIA, ensuring a smooth work experience in Canada.",
    },
    {
      icon: <FaCertificate size={32} />,
      title: "Our Credentials",
      description:
        "Proudly regulated by and in good standing with the College of Immigration and Citizenship Consultants. Larissa Castelluber.",
    },
  ];
  return (
    <div>
      <SectionTitle text="Our strengths" />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 py-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="text-black">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-red-600">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col p-4 sm:flex-row h-20 gap-5 justify-center items-center md:gap-10 md:h-24 lg:h-32 my-10">
        <Image
          src={rcic}
          alt="RCIC logo"
          className="w-32 sm:w-40 md:w-48 lg:w-56"
        />
        <Image
          src={capic}
          alt="CAPIC ACPC logo"
          className="w-auto sm:h-10 md:h-20"
        />
      </div>
    </div>
  );
}
