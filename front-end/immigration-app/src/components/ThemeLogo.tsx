"use client";

import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import LogoDark from "@/assets/logo/LOGO_WHITE.png";
import LogoLight from "@/assets/logo/logo_up_immigration.png";

export function ThemeLogo() {
  const { theme } = useTheme();

  return (
    <>
      <Image
        src={theme === "dark" ? LogoDark : LogoLight}
        alt="logo"
        width={150}
        height={100}
        className="object-cover w-28" // Maintains aspect ratio without distortion
        priority
      />
    </>
  );
}
