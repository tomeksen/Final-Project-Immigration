import React from "react";
import whiteLogo from "@/assets/logo/LOGO_WHITE.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-primary-red">
      <div>
        <div>
          <Image src={whiteLogo} alt="White logo" width={150} height={100} />
        </div>
        <div>nav</div>
        <div>social</div>
      </div>
      <div>
        <p>©Up Immigration Consulting. All Rights Reserved</p>
      </div>
    </div>
  );
}
