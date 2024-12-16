"use client";
import React, { useState } from "react";
import Image from "next/image";
import quiz from "@/assets/graphic_tasks_girl_pencil.png";
import { MdOutlineArrowForward } from "react-icons/md";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import Modal from "../Modal";
import Quiz from "../quiz/Quiz";
import { Reveal } from "@/utils/Reveal";
import { useTranslations } from "next-intl";

export default function SectionFour() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const t = useTranslations("HomePage");
  return (
    <Reveal>
      <div className="p-6 md:p-10 items-center bg-gray-100">
        <div className="p-4 md:p-6">
          <SectionTitle text={t("Quiz.title")} />
          <p className="mb-5">{t("Quiz.paragraph")}</p>
          <div className="bg-sky-200 flex-col justify-center m-auto items-center align-middle w-full lg:w-2/5 rounded-lg relative">
            <Image
              src={quiz}
              alt="Graphic Image of a girl"
              className="m-auto"
            />
            <Button
              className="bg-primary-red w-full absolute bottom-0 h-14 font-bold text-3xl rounded-none rounded-b-lg hover:bg-red-800"
              onClick={openModal}
            >
              {t("Quiz.button")} <MdOutlineArrowForward size={50} />
            </Button>

            {/* modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <Quiz onClose={closeModal} />
            </Modal>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
