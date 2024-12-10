import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const events = [
  {
    title: "Review Documents",
    startDate: "Today, 16:00 PM",
    location: "Online",
    details: "Zoom: 256 487 7889",
    avatars: ["@/assets/google_reviews.jpeg", "/placeholder.svg"],
  },
  {
    title: "Submit Visa Application",
    startDate: "2 Aug 2024, all day",
    location: "Online",
    details: "RCIC Website",
    avatars: ["/placeholder.svg"],
  },
  {
    title: "Alumni Seminar",
    startDate: "19 Aug 2024, 14:00pm",
    location: "Online",
    details: "364 986 6681",
    avatars: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    title: "Alumni Seminar",
    startDate: "19 Aug 2024, 14:00pm",
    location: "Online",
    details: "364 986 6681",
    avatars: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    title: "Alumni Seminar",
    startDate: "19 Aug 2024, 14:00pm",
    location: "Online",
    details: "364 986 6681",
    avatars: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    title: "Alumni Seminar",
    startDate: "19 Aug 2024, 14:00pm",
    location: "Online",
    details: "364 986 6681",
    avatars: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    title: "Alumni Seminar",
    startDate: "19 Aug 2024, 14:00pm",
    location: "Online",
    details: "364 986 6681",
    avatars: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    title: "Alumni Seminar",
    startDate: "19 Aug 2024, 14:00pm",
    location: "Online",
    details: "364 986 6681",
    avatars: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    title: "Alumni Seminar",
    startDate: "19 Aug 2024, 14:00pm",
    location: "Online",
    details: "364 986 6681",
    avatars: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    title: "Alumni Seminar",
    startDate: "19 Aug 2024, 14:00pm",
    location: "Online",
    details: "364 986 6681",
    avatars: ["/placeholder.svg", "/placeholder.svg"],
  },
];

export default function MobileSideSchedule() {
  return (
    <div className="h-[400px] w-full overflow-y-auto space-y-2 mt-4">
      {events.map((event, index) => (
        <Card key={index} className="w-full">
          <CardContent className="p-3">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-start justify-between w-full">
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">
                    {event.startDate}
                  </div>
                  <div className="text-primary-red font-medium">
                    {event.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {event.location} {event.details}
                  </div>
                </div>
                <div className="flex items-center">
                  {event.avatars.map((src, i) => (
                    <Avatar
                      key={i}
                      className="h-8 w-8 border-2 border-background bg-slate-500"
                    >
                      <AvatarImage src={src} alt="Avatar" />
                    </Avatar>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
