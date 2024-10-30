"use client";

import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import LogoDark from "@/assets/logo/LOGO_WHITE.png";
import LogoLight from "@/assets/logo/Up_Immigration_Logo.png";

export function ThemeLogo() {
  const { theme } = useTheme();

  return (
    <Image
      src={theme === "dark" ? LogoDark : LogoLight}
      alt="logo"
      width={170}
      height={70}
    />
  );
}
