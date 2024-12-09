import { DesktopCalendar } from "@/app/playground/test1/_components/Calendar/DesktopCalendar";
import SideSchedule from "@/app/playground/test1/_components/Calendar/SideSchedule";

const bookedDays = [
  {
    startDate: new Date(2024, 10, 5),
    endDate: new Date(2024, 10, 7),
    title: "Event 1",
  },
  {
    startDate: new Date(2024, 10, 6),
    endDate: new Date(2024, 10, 8),
    title: "Event 2",
  },
  {
    startDate: new Date(2024, 10, 25),
    endDate: new Date(2024, 10, 25),
    title: "One-day Event",
  },
];

const AppointmentsPage = () => {
    return (
      <>
        <div>
        <div className="container mx-auto gap-2 flex items-stretch">
          <SideSchedule />
          <DesktopCalendar bookedDays={bookedDays} />
        </div>
      </div>
      </>
    )
  };
  
export default AppointmentsPage;