import React from "react";

import Lauta from "@/assets/lauta.jpeg";
import Maria from "@/assets/maria.jpeg";
import Juan from "@/assets/juan.jpeg";
import Image, { StaticImageData } from "next/image";
import google from "@/assets/google_reviews.png";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/utils/Reveal";

type TestimonialType = {
  name: string;
  visa: string;
  flag: string;
  img: string | StaticImageData;
  description: string;
};

export default function Testimonials() {
  const testimonials: TestimonialType[] = [
    {
      name: "Laura Ribeiro",
      visa: "Express Entry",
      flag: "🇧🇷",
      img: Lauta,
      description:
        "“I had an amazing experience with my visa application. They made the entire process easy and stress-free. The staff's expertise and attention to detail were impressive.”",
    },
    {
      name: "Maria Torres",
      visa: "Express Entry",
      flag: "🇨🇴",
      img: Maria,
      description:
        "“I had an amazing experience with my visa application. They made the entire process easy and stress-free. The staff's expertise and attention to detail were impressive.”",
    },
    {
      name: "Juan Sanchez",
      visa: "Permanent Resident",
      flag: "🇲🇽",
      img: Juan,
      description:
        "“I had an amazing experience with my visa application. They made the entire process easy and stress-free. The staff's expertise and attention to detail were impressive.”",
    },
  ];

  return (
    <Reveal>
      <div className="p-4 sm:p-10 flex flex-col items-star md:mx-7">
        <SectionTitle text="Testimonials" />

        <div className="flex flex-wrap gap-6 justify-center mt-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md w-full sm:w-72 flex flex-col items-center"
            >
              <Image
                src={testimonial.img as StaticImageData}
                alt={testimonial.name}
                className="w-full h-36 border-gray-300 shadow-lg mb-4 object-cover object-top"
              />
              <div className="p-4 text-center sm:text-left">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.visa}</p>
                  </div>
                  <div className="text-2xl">{testimonial.flag}</div>
                </div>
                <p className="mt-2 text-gray-700">{testimonial.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-8 text-center">
          <div className="flex justify-center mb-2">
            <Image
              src={google}
              alt="Google Review"
              width={170}
              height={70}
              className="object-fill"
            />
            <p className="text-4xl font-bold text-blue-500 sm:hidden">5.0</p>
          </div>
          <p className="mb-4">
            Explore our Google Reviews for top-rated immigration services.
          </p>

          <Button
            size="lg"
            className="bg-primary-red hover:bg-red-800 text-white font-bold text-lg"
          >
            Read more
          </Button>
        </div>
      </div>
    </Reveal>
  );
}
