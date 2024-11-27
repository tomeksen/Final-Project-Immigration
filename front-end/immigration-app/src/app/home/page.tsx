import SectionOne from "@/components/staticPage/mainPage/SectionOne";
import SectionTwo from "@/components/staticPage/mainPage/SectionTwo";
import SectionFive from "@/components/staticPage/mainPage/SectionFive";
import SectionFour from "@/components/staticPage/mainPage/SectionFour";
import SectionThree from "@/components/staticPage/mainPage/SectionThree";
import Testimonials from "@/components/staticPage/mainPage/Testimonials";
import WhereToStart from "@/components/staticPage/mainPage/WhereToStart";

export default function HomePage() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <WhereToStart />
      <Testimonials />
    </div>
  );
}
