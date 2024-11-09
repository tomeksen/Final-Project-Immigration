import BgImageContainerHeader from "@/components/BgImageContainerHeader";
import React from "react";
import student from "@/assets/study/student.jpeg";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionTitle from "@/components/SectionTitle";
import FreeConsultationBtn from "@/components/FreeConsultationBtn";
import SectionTPT from "@/components/study/SectionTPT";
import studentsCanada from "@/assets/study/studentsCanada.jpeg";
import workpermit from "@/assets/study/workpermit.jpeg";
import studentCafe from "@/assets/study/studentCafe.jpeg";
import studentOffice from "@/assets/study/studentOffice.jpeg";
import WhereToStart from "@/components/mainPage/WhereToStart";
import Testimonials from "@/components/mainPage/Testimonials";
import ImmigrationFAQ from "@/components/immigratePage/ImmigrationFAQ";

export default function page() {
  return (
    <div>
      <div className="h-80">
        <BgImageContainerHeader
          bgImage={student}
          alt="Female student holding notebooks"
          text="Study"
          className="object-cover h-32 md:object-bottom xl:object-center"
        />
      </div>
      <Breadcrumbs />
      <div className="px-4 sm:px-8 lg:px-16 pb-10 mt-10 ">
        <SectionTitle text="Why study in Canada?" />
        <p>
          Canada offers world-class education, diverse cultural experiences, and
          potential pathways to permanent residency. International students
          choose Canada for its top-ranked institutions and the opportunity to
          work during and after their studies, making it an ideal destination
          for higher education.
        </p>
        <FreeConsultationBtn />
      </div>
      <div className="px-4 sm:px-8 lg:px-16 pb-10">
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
      </div>
      <WhereToStart />
      <Testimonials />
      <ImmigrationFAQ />
    </div>
  );
}
