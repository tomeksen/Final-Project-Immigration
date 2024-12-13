'use client'
import { MobileCalendar } from "@/components/common/Calendar/MobileCalendar";
import HeaderBreadCrumbs from "@/components/common/HeaderBreadCrumbs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AppPaymentSwiper from "../payments/_components/paymentSwiper/AppPaymentSwiper";
import { AppProgressChart } from "@/components/dashboard/progressChart/AppProgressChart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageSquare, Paperclip, Trash2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { useUser } from "@clerk/nextjs";

const DashboardHome = () => {
  const user = useUser();
  const isAdminUser = user?.user?.publicMetadata.role === "admin"? true : false;
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
    return (
      <>
      <div className="h-full bg-gray-100">
       {isAdminUser ? (
        <div className="h-full p-6 w-full ">
      <div className=" max-w-screen flex flex-col">
        {/* Main content */}
        <div className="flex flex-1 flex-col gap-4 p-4">
          {/* Layout for xl */}
          <div className="hidden xl:grid gap-4 xl:grid-cols-4 xl:grid-rows-2 ">
            {/* Row 1 (2:1 ratio in xl) */}
            <div className="rounded-xl bg-muted/50 xl:col-span-3 xl:grid-rows-1 max-h-[350px]">
              Mot implemented
            </div>
            <div className="rounded-xl bg-muted/50 xl:col-span-1 xl:grid-rows-1 max-h-[350px]">
              Not implemented
            </div>
            {/* Row 2 */}
            <div className="rounded-xl bg-muted/50 xl:col-span-2 xl:row-span-2 mt-[-80px] h-full">
            {/* Remove Later*/}
              Not implemented
            </div>
            <div className="rounded-xl bg-muted/50 xl:col-span-1 mt-[-80px]">
              {/* Remove Later*/}
              Not implemented
            </div>
            <div className="rounded-xl bg-muted/50 xl:col-span-1 mt-[-80px]">
              <Card className="w-full h-full">
                <CardHeader>
                  <CardTitle>My Schedule</CardTitle>
                  <CardDescription className="mt-3 text-foreground">
                    You have <span className="text-primary-red">3 pending payments</span>.
                  </CardDescription>
                </CardHeader>
                <CardContent className="w-full mx-auto pl-14 items-center">
                  <MobileCalendar className="" bookedDays={bookedDays} />
                </CardContent>
              </Card>
            </div>
          </div>
          
          </div>
      
        </div>
        </div>
        ):(
          <div className="h-full p-6 w-full bg-gray-100">
        <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2 text-sm">
          <HeaderBreadCrumbs rootName={"Applications"} breadName="Maria_CICCC_UX/UI_2" />
        </div>
        <Select defaultValue="Maria_CICCC_UX/UI_2">
          <SelectTrigger className="w-[200px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Maria_CICCC_UX/UI_2">Maria_CICCC_UX/UI_2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className=" max-w-screen flex flex-col">
        {/* Main content */}
        <div className="flex flex-1 flex-col gap-4 p-4">
          {/* Layout for xl */}
          <div className="hidden xl:grid gap-4 xl:grid-cols-3 xl:grid-rows-2 ">
            {/* Row 1 (2:1 ratio in xl) */}
            <div className="rounded-xl bg-muted/50 xl:col-span-2 xl:grid-rows-2 max-h-[350px]">
              <AppProgressChart/>
            </div>
            <div className="rounded-xl bg-muted/50 xl:col-span-1 xl:grid-rows-1 max-h-[350px]">
              <AppPaymentSwiper swiperType="sm"/>
            </div>
            {/* Row 2 */}
            <div className="rounded-xl bg-muted/50 xl:col-span-1 xl:row-span-1 mt-[-80px] h-full">
            {/* Remove Later*/}
            <Card>
              <CardContent className="p-6">
                <h2 className="font-medium mb-4">Current Tasks</h2>
                <div className="bg-gray-600 text-white p-3 rounded-md mb-4">
                  <div className="flex justify-between items-center">
                    <span>Visa Application</span>
                    <span className="text-sm">50%</span>
                  </div>
                  <Progress value={50} className="h-2 mt-2" />
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Fill IMM form", messages: 0, attachments: 1, avatars: 1 },
                    { title: "Review IMM and Visa documents", messages: 1, attachments: 2, avatars: 2 },
                    { title: "Receive Visa", messages: 0, attachments: 1, avatars: 1 },
                  ].map((task, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <Checkbox className="mt-1" />
                      <div className="flex-1 space-y-1">
                        <div className="font-medium text-sm">{task.title}</div>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center">
                            <MessageSquare className="w-3 h-3 mr-1" />
                            <span>{task.messages}</span>
                          </div>
                          <div className="flex items-center">
                            <Paperclip className="w-3 h-3 mr-1" />
                            <span>{task.attachments}</span>
                          </div>
                          <div className="flex -space-x-1">
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600">
                  Label
                </Button>
              </CardContent>
            </Card>
            </div>
            <div className="rounded-xl bg-muted/50 xl:col-span-1 mt-[-80px]">
              {/* Remove Later*/}
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-medium mb-4">Latest Updates</h2>
                  <div className="flex space-x-2 mb-4">
                    <Input 
                      placeholder="Search..." 
                      className="flex-1"
                    />
                    <Button variant="ghost" size="icon">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {[
                      { text: "You've received email with instructions", date: "8:13 AM" },
                      { text: "Your documents have been reviewed successfully", date: "21/07/24" },
                      { text: "Actions needed: Rename documents", date: "05/06/24" },
                      { text: "Actions needed: Payment for processing fees", date: "17/05/24" },
                      { text: "Actions needed: Biometrics Fee Payment", date: "08/02/24" },
                    ].map((update, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Checkbox className="mt-1" />
                        <div className="flex-1 flex justify-between items-start">
                          <span className="text-sm">{update.text}</span>
                          <span className="text-xs text-gray-500 ml-2">{update.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600">
                    Label
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="rounded-xl bg-muted/50 xl:col-span-1 mt-[-80px]">
              <Card className="w-full h-full">
                <CardHeader>
                  <CardTitle>My Schedule</CardTitle>
                  <CardDescription className="mt-3 text-foreground">
                    You have <span className="text-primary-red">3 pending payments</span>.
                  </CardDescription>
                </CardHeader>
                <CardContent className="w-full mx-auto pl-14 items-center">
                  <MobileCalendar className="" bookedDays={bookedDays} />
                </CardContent>
              </Card>
            </div>
          </div>
          
          </div>
      
        </div>
        </div>
        )}
        
        </div>
      </>
    )
  };
  
export default DashboardHome;