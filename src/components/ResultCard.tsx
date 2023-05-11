import Image from "next/image";
import React from "react";
import { courses, programs } from "@/utils/data";
import { AiOutlineRight } from "react-icons/ai";
import ProgressBar from "@/widget/ProgressBar";
interface resultcardProps {
  program?: programs;
  courses?: courses;
}

export default function ResultCard({ program, courses }: resultcardProps) {
  return (
    <>
    {/* if activeTab === "Programs" */}
      {program && (
        <div className="w-full lg:w-[50rem] mb-5 lg:h-24 border border-[#E6E6E6] bg-[#FAFAFA] flex flex-col lg:flex-row justify-between items-center p-5">
          <div className="w-full lg:w-[70%] flex flex-col lg:flex-row justify-start items-start lg:items-center gap-4">
            <div className="w-[3.75rem] h-[3.75rem]">
              {program?.img && (
                <Image
                  src={program.img}
                  className="object-cover w-full h-full"
                  alt=""
                />
              )}
            </div>

            <div>
              <p className="text-sm font-normal leading-5 text-[#004CCC]">
                {program?.university}
              </p>
              <p className="text-md mt-2 font-bold leading-5 text-black-200">
                {program?.course}
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[30%] flex justify-start lg:justify-end items-center">
            <button
              className={`w-20 h-6 ${
                program?.isCompleted
                  ? "bg-[#C8EED3] text-[#24753A]"
                  : "text-[#FFA620] bg-[#FFE6C3]"
              } rounded-[10px] text-xs leading-6 font-bold lg:mt-0 mt-3`}
            >
              {program?.isCompleted ? "Completed" : "Ongoing"}
            </button>
            {!program?.isCompleted && (
              <AiOutlineRight className="mt-3 lg:mt-0" />
            )}
          </div>
        </div>
      )}

    {/* if activeTab === "courses" */}
      {courses && (
        <div className="w-full lg:w-[50rem] mb-5 border border-[#E6E6E6] bg-[#FAFAFA] flex flex-col lg:flex-row justify-between items-center p-4 lg:p-5">
          <div className="w-full lg:w-[70%] flex justify-start items-center gap-4">
            <div className="w-[3.75rem] h-[3.75rem]">
              {courses?.img && (
                <Image
                  src={courses.img}
                  className="object-cover w-full h-full"
                  alt=""
                />
              )}
            </div>

            <div className="w-[90%] lg:w-[90%] flex h-auto">
              <div>
                <p className="text-sm font-normal leading-5 text-[#004CCC]">
                  {courses?.courseProvider}
                </p>
                <p className="text-md font-bold mt-2 leading-5 text-black-200">
                  {courses?.courseName}
                </p>
              </div>

              <ProgressBar width={courses.progressPercentage} />
            </div>
          </div>

          <div className="w-full lg:w-[30%] lg:mt-0 mt-5 flex justify-start lg:justify-end items-center">
            <button
              className={`  ${
                courses?.progressPercentage === 100
                  ? "bg-[#C8EED3] h-6 w-20 text-[#24753A] rounded-[10px]"
                  : "h-12 w-full lg:w-28 bg-[#004CCC] text-white"
              } text-xs leading-6 font-bold`}
            >
              {courses?.progressPercentage === 100 ? "Completed" : "Continue"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
