import React from "react";
interface Text {
  title: string;
  description: string;
}
export default function SubSection({ title, description }: Text) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="w-10 h-1 bg-red-500 mb-4"></div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
