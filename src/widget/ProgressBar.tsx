import React from "react";
interface progressProps {
  width: number;
}
export default function ProgressBar({ width }: progressProps) {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:justify-between justify-start gap-3 items-center">
    <div className="w-full lg:w-[63%] rounded-lg mt-2 bg-[#CCCCCC]">
      <div
        className={`h-full ${
          width === 80 ? "w-[80%]" : width === 92 ? "w-[90%]" : "w-full"
        } p-[2px] bg-[#004CCC] rounded-lg`}
      ></div>
    </div>
    <span className="text-xs w-full lg:mt-2">{width}% completed</span>
    </div>
  );
}
