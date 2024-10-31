import React from "react";

interface Text {
  text: string;
}

export default function SectionTitle({ text }: Text) {
  return <h1 className="text-2xl font-semibold mb-4">{text}</h1>;
}
