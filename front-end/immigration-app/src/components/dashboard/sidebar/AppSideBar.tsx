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
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import bg from "@/assets/logo/Up_Immigration_Logo.png";
import {  useClerk, useUser  } from "@clerk/nextjs";

export function AppSidebar() {
  const pathname = usePathname();
  const t = useTranslations("Sidebar");
  const user = useUser();
  const { signOut } = useClerk()
  const contentAdminItems = [
    {
      title: t("Content.dashboard"),
      url: "/home",
      icon: LayoutDashboard,
    },
    {
      title: t("Content.applications"),
      url: "/template-manager",
      icon: FileEdit,
    },
    {
      title: t("Content.payments"),
      url: "/payments",
      icon: DollarSign,
    },
    {
      title: t("Content.calendar"),
      url: "/appointments",
      icon: Users,
    },
    {
      title: t("Content.users"),
      url: "/users",
      icon: User,
    },
    {
      title: "Notifications",
      url: "/notifications",
      icon: MessageSquare,
    }
  ];

  const contentItems = [
    {
      title: t("Content.dashboard"),
      url: "/home",
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
      url: "/appointments",
      icon: Users,
    },
    {
      title: t("Content.profile"),
      url: "/profile",
      icon: User,
    },
  ];

  const footerItems = [
    {
      title: t("Footer.faq"),
      url: "/faq",
      icon: HelpCircle,
    },
    {
      title: t("Footer.logout"),
      url: "#",
      icon: LogOut,
      onClick: () => signOut({ redirectUrl: '/' }),
    },
  ];
  
  const isAdminUser = user.user?.publicMetadata?.role ? user.user?.publicMetadata?.role === "admin" : false;
  return (
    <Sidebar variant="sidebar">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="mb-5 ml-1">
            <Image src={bg} width={150} height={100} alt="logo" />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>LOGO</SidebarGroupLabel>  unnecessary for now */}
          <SidebarGroupContent>
            <SidebarMenu>
            {isAdminUser ? (
                contentAdminItems.map((item) => {
                const isActive = pathname.includes(item.url);

                return (
                  <div key={item.title}>
                    <SidebarMenuItem
                      className={cn(
                        "relative flex items-center mx-3",
                        isActive &&
                          "bg-sidebar-accent hover:bg-sidebar-accent text-sidebar-accent-foreground  font-semibold rounded-md"
                      )}
                    >
                      {isActive && (
                        <div className="absolute -left-5 top-0 bottom-0 w-2 bg-sidebar-accent  rounded-r-md" />
                      )}
                      <SidebarMenuButton asChild>
                        <Link
                          href={item.url}
                          className={cn(
                            "px-2 py-6 flex items-center gap-2",
                            isActive
                              ? "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                              : "hover:bg-secondary-lightGray hover:text-primary-black hover:font-bold"
                          )}
                        >
                          <item.icon className="h-4 w-4 font-bold" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </div>
                );
              })
              ) : (
                contentItems.map((item) => {
                  const isActive = pathname.includes(item.url);
  
                  return (
                    <div key={item.title}>
                      <SidebarMenuItem
                        className={cn(
                          "relative flex items-center mx-3",
                          isActive &&
                            "bg-sidebar-accent hover:bg-sidebar-accent text-sidebar-accent-foreground  font-semibold rounded-md"
                        )}
                      >
                        {isActive && (
                          <div className="absolute -left-5 top-0 bottom-0 w-2 bg-sidebar-accent  rounded-r-md" />
                        )}
                        <SidebarMenuButton asChild>
                          <Link
                            href={item.url}
                            className={cn(
                              "px-2 py-6 flex items-center gap-2",
                              isActive
                                ? "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                                : "hover:bg-secondary-lightGray hover:text-primary-black hover:font-bold"
                            )}
                          >
                            <item.icon className="h-4 w-4 font-bold" />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </div>
                  );
                })
              )}
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
                        <Link
                          href={item.url}
                          onClick={item.onClick}
                          className={cn(
                            "px-2 py-6",
                            "hover:bg-secondary-lightGray hover:text-primary-black hover:font-bold"
                          )}
                        >
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
