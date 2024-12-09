"use client";
import BgImageContainerHeader from "@/components/BgImageContainerHeader";
import React from "react";
import student from "@/assets/study/student.jpeg";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import FreeConsultationBtn from "@/components/FreeConsultationBtn";
import studentsCanada from "@/assets/study/studentsCanada.jpeg";
import workpermit from "@/assets/study/workpermit.jpeg";
import studentCafe from "@/assets/study/studentCafe.jpeg";
import studentOffice from "@/assets/study/studentOffice.jpeg";
import ImmigrationFAQ from "@/components/staticPage/immigratePage/ImmigrationFAQ";
import Testimonials from "@/components/staticPage/mainPage/Testimonials";
import WhereToStart from "@/components/staticPage/mainPage/WhereToStart";
import SectionTPT from "@/components/staticPage/study/SectionTPT";
import { motion } from "framer-motion";
import { Reveal } from "@/utils/Reveal";

export default function page() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };
  return (
    <div>
      <motion.div
        className="h-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <BgImageContainerHeader
          bgImage={student}
          alt="Female student holding notebooks"
          text="Study"
          className="object-cover h-32 md:object-center lg:object-top xl:object-center"
        />
      </motion.div>
      <Reveal>
        <Breadcrumbs />
      </Reveal>
      <motion.div
        className="px-4 sm:px-8 lg:px-16 pb-10 mt-10 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <SectionTitle text="Why study in Canada?" />
        <motion.p variants={fadeInUp}>
          Canada offers world-class education, diverse cultural experiences, and
          potential pathways to permanent residency. International students
          choose Canada for its top-ranked institutions and the opportunity to
          work during and after their studies, making it an ideal destination
          for higher education.
        </motion.p>
        <FreeConsultationBtn />
      </motion.div>

      <motion.div
        className="px-4 sm:px-8 lg:px-16 pb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <SectionTitle text="All you have to know before enrolling to study in Canada" />
        <SectionTPT
          title="Before Study in Canada"
          img={studentsCanada}
          imgDescription="Students posing for a picture holding canada flags"
          paragraph="Before choosing a school, make sure it is a Designated Learning Institution (DLI). A DLI is a school approved by a provincial or territorial government to host international students. Attending a DLI is crucial because it ensures you can obtain a valid study permit and, in many cases, may impact your eligibility for a Post-Graduation Work Permit (PGWP). If your goal is immigration, I suggest consulting with an immigration consultant before enrolling to ensure your plan is viable and current."
        />
        <SectionTPT
          title="Study and Work Permits"
          img={workpermit}
          imgDescription="Work Permit paper"
          paragraph="Many people choose to study in Canada as an entry door to work or immigration. Here at Up Immigration, we do it all. We provide extensive support for your study in Canada, including assistance with study permits and work permits, helping you choose the right institution and program, and providing comprehensive visa and immigration support.
"
        />

        <SectionTPT
          title="Benefits of Studying in Canada"
          img={studentCafe}
          imgDescription="Student in a café"
          paragraph="Studying in Canada gives you access to quality education from renowned institutions. You can work while studying and after graduation, experience a multicultural and inclusive environment, and explore potential pathways to permanent residency, enhancing both your career and life prospects."
        />

        <SectionTPT
          title="Post Graduation Oportunities"
          img={studentOffice}
          imgDescription="Student in an office"
          paragraph="Some courses enable you to explore post-graduation opportunities in Canada, This includes the Post-Graduation Work Permit (PGWP) to gain valuable work experience. Discover various pathways to transition from being a student to becoming a permanent resident, setting the foundation for a successful future in Canada."
        />
      </motion.div>
      <WhereToStart />
      <Testimonials />
      <ImmigrationFAQ />
    </div>
  );
}
