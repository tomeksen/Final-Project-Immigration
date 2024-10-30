"use client";
import {
  LayoutDashboard,
  FileEdit,
  DollarSign,
  FileText,
  Users,
  MessageSquare,
  User,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "../../../../../lib/utils";
import { useTranslations } from "next-intl";

// Menu items.
const contentItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Applications",
    url: "/applications",
    icon: FileEdit,
  },
  {
    title: "Payments",
    url: "/payments",
    icon: DollarSign,
  },
  {
    title: "My Documents",
    url: "/documents",
    icon: FileText,
  },
  {
    title: "Appointment",
    url: "/appointment",
    icon: Users,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: MessageSquare,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
];

const footerItems = [
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "FAQ",
    url: "/faq",
    icon: HelpCircle,
  },
  {
    title: "Logout",
    url: "/logout",
    icon: LogOut,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const t = useTranslations("Sidebar.Content.dashboard");
  console.log(t);

  return (
    <Sidebar variant="sidebar">
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>LOGO</SidebarGroupLabel>  unnecessary for now */}
          <SidebarGroupContent>
            <SidebarMenu>
              {contentItems.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <div key={item.title}>
                    <SidebarMenuItem
                      className={cn(
                        "relative flex items-center mx-3",
                        isActive &&
                          "bg-sidebar-accent text-sidebar-accent-foreground font-semibold rounded-md"
                      )}
                    >
                      {isActive && (
                        <div className="absolute -left-5 top-0 bottom-0 w-2 bg-sidebar-accent rounded-r-md" />
                      )}
                      <SidebarMenuButton asChild>
                        <Link
                          href={item.url}
                          className="px-2 py-6 flex items-center gap-2"
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </div>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="border w-full"></div>
      <SidebarFooter>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {footerItems.map((item) => (
                  <SidebarMenuItem
                    key={item.title}
                    className={cn(
                      "flex items-center mx-3",
                      pathname === item.url &&
                        "bg-sidebar-accent text-sidebar-accent-foreground font-semibold rounded-md"
                    )}
                  >
                    <SidebarMenuButton asChild>
                      <Link href={item.url} className="px-2 py-6">
                        <item.icon className="h-6 w-6 font-bold" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </SidebarFooter>
    </Sidebar>
  );
}
