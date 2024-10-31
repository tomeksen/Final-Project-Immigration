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
  SidebarHeader,
  // SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import bg from "@/assets/logo/Up_Immigration_Logo.png";

export function AppSidebar() {
  const pathname = usePathname();
  const t = useTranslations("Sidebar");

  const contentItems = [
    {
      title: t("Content.dashboard"),
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: t("Content.applications"),
      url: "/applications",
      icon: FileEdit,
    },
    {
      title: t("Content.payments"),
      url: "/payments",
      icon: DollarSign,
    },
    {
      title: t("Content.documents"),
      url: "/documents",
      icon: FileText,
    },
    {
      title: t("Content.appointment"),
      url: "/appointment",
      icon: Users,
    },
    {
      title: t("Content.inbox"),
      url: "/inbox",
      icon: MessageSquare,
    },
    {
      title: t("Content.profile"),
      url: "/profile",
      icon: User,
    },
  ];

  const footerItems = [
    {
      title: t("Footer.settings"),
      url: "/settings",
      icon: Settings,
    },
    {
      title: t("Footer.faq"),
      url: "/faq",
      icon: HelpCircle,
    },
    {
      title: t("Footer.logout"),
      url: "/logout",
      icon: LogOut,
    },
  ];

  const isDashboardDomain =
    typeof window !== "undefined" &&
    window.location.hostname.startsWith("dashboard");

  return (
    <Sidebar variant="sidebar">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Image src={bg} width={200} height={200} alt="logo" />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>LOGO</SidebarGroupLabel>  unnecessary for now */}
          <SidebarGroupContent>
            <SidebarMenu>
              {contentItems.map((item) => {
                const isActive = pathname.includes(item.url);

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
                {footerItems.map((item) => {
                  const isActive = pathname.includes(item.url);
                  return (
                    <SidebarMenuItem
                      key={item.title}
                      className={cn(
                        "flex items-center mx-3",
                        isActive &&
                          "bg-sidebar-accent text-sidebar-accent-foreground font-semibold rounded-md"
                      )}
                    >
                      <SidebarMenuButton asChild>
                        <Link href={item.url} className="px-2 py-6">
                          <item.icon className={cn("h-6 w-6 font-bold")} />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </SidebarFooter>
    </Sidebar>
  );
}
