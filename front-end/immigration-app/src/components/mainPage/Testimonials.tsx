import React from "react";
import SectionTitle from "../SectionTitle";
import { CardContent } from "../ui/card";
import Lauta from "@/assets/lauta.jpeg";
import Maria from "@/assets/maria.jpeg";
import Juan from "@/assets/juan.jpeg";
import Image, { StaticImageData } from "next/image";
import google from "@/assets/google_reviews.png";
import { Button } from "../ui/button";

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
      name: "Lauta Ribeiro",
      visa: "Express Entry",
      flag: "🇧🇷",
      img: Lauta,
      description:
        "“I had an amazing experience with my visa application. They made the entire process easy and stress-free. The staff's expertise and attention to detail were impressive. ”",
    },
    {
      name: "Maria Torres",
      visa: "Express Entry",
      flag: "🇨🇴",
      img: Maria,
      description:
        "“I had an amazing experience with my visa application. They made the entire process easy and stress-free. The staff's expertise and attention to detail were impressive. ”",
    },
    {
      name: "Juan Sanchez",
      visa: "Permanent Resident",
      flag: "🇲🇽",
      img: Juan,
      description:
        "“I had an amazing experience with my visa application. They made the entire process easy and stress-free. The staff's expertise and attention to detail were impressive. ”",
    },
  ];

  return (
    <div className="p-10 items-center">
      <div className="ml-10">
        <SectionTitle text="Testimonials" />
        <div className="flex">
          <CardContent className="flex gap-6 m-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white shadow-md w-72">
                <Image
                  src={testimonial.img as string}
                  alt={testimonial.name}
                  className="w-full h-36 border-gray-300 shadow-lg mb-4 object-cover object-top"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.visa}
                      </p>
                    </div>
                    <div className="text-2xl">{testimonial.flag}</div>
                  </div>
                  <p className="mt-2 text-gray-700">
                    {testimonial.description}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </div>
        <div className="flex-col justify-center text-center m-auto align-middle">
          <div className="flex align-middle justify-center">
            <Image
              src={google}
              alt="Google Review"
              width={170}
              height={70}
              className="object-fill"
            />
          </div>
          <p>Explore our Google Reviews for top-rated immigration services.</p>
          <div className="mt-6 text-center">
            <Button
              size="lg"
              className="bg-primary-red hover:bg-red-800 text-white font-bold text-lg"
            >
              Read more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
