import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
];

export default function SideSchedule() {
  return (
    <Card className="flex flex-col items-center overflow-y-scroll max-w-[300px] flex-1">
      <CardHeader>
        <CardTitle>Upcoming Applications</CardTitle>
      </CardHeader>
      <Separator className="mx-auto max-w-[250px] mb-2" />
      <CardContent className="grid gap-4 p-3">
        <div className="grid gap-6 ">
          {events.map((event, index) => (
            <div key={index} className="grid gap-2">
              {/* we can change text color dynamically */}
              <div className={`text-primary-red font-medium`}>
                {event.title}
              </div>
              <div className="text-sm text-muted-foreground">
                {event.startDate}
              </div>
              <div className="text-sm text-muted-foreground">
                {event.location}
              </div>
              <div className="text-sm text-muted-foreground">
                {event.details}
              </div>
              <div className="flex gap-1">
                {event.avatars.map((src, i) => (
                  <Avatar key={i} className="h-6 w-6">
                    <AvatarImage src={src} alt="Avatar" />
                  </Avatar>
                ))}
              </div>
              <Separator className="mx-auto w-[250px] mb-2" />
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full">
          Label
        </Button>
      </CardContent>
    </Card>
  );
}
