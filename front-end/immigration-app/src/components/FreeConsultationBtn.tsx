import Link from "next/link";
import React from "react";

export default function FreeConsultationBtn() {
  return (
    <div className="flex items-center justify-center">
      <Link href="/consultation">
        <button className="bg-primary-red text-white py-2 px-4 rounded-xl font-semibold ">
          Book a free consultation
        </button>
      </Link>
    </div>
  );
}
