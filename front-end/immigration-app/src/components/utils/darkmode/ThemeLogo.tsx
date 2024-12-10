"use client";

import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import LogoDark from "@/assets/logo/LOGO_WHITE.png";
import LogoLight from "@/assets/logo/logo_up_immigration.png";
import { Reveal } from "@/utils/Reveal";

export function ThemeLogo() {
  const { theme } = useTheme();

  return (
    <Reveal>
      <Image
        src={theme === "dark" ? LogoDark : LogoLight}
        alt="logo"
        width={150}
        height={100}
        className="object-cover w-28" // Maintains aspect ratio without distortion
        priority
      />
    </Reveal>
  );
}
