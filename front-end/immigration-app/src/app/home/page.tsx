import SectionFive from "@/components/mainPage/SectionFive";
import SectionFour from "@/components/mainPage/SectionFour";
import SectionOne from "@/components/mainPage/SectionOne";
import SectionThree from "@/components/mainPage/SectionThree";
import SectionTwo from "@/components/mainPage/SectionTwo";
import WhereToStart from "@/components/mainPage/WhereToStart";
import Testimonials from "@/components/mainPage/Testimonials";

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
