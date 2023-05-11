"use client"; // this is a client component 👈🏽
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CiFilter } from "react-icons/ci";
import ResultCard from "./ResultCard";
import { coursesArr, programsArr } from "@/utils/data";
export default function Main() {
    const [activeTab,setActiveTab] = useState<string>("Programs")

    // function to switch tab
    const handleTabSelect = (text:string) => {
      setActiveTab(text=== "Programs" ? "Programs" : "courses")
      
    }

    // search value
    const [searchVal,setSearchVal] = useState("")

  return (
    <div className="w-full lg:w-[80%] ml-0 lg:ml-[20%] min-h-screen py-28 px-4 lg:px-12">
      {/* tabs */}
      <div className="w-full mt-12 h-12 flex items-center">
        <div className={`w-full lg:w-[12rem] h-10 ${activeTab === "Programs" ? "bg-[#EEF3FC] " : ""} flex justify-center items-center rounded-sm cursor-pointer`} onClick={()=>handleTabSelect("Programs")}>
          <p className={`text-xs ${activeTab === "Programs" ? "text-black-200 scale-105 transition-transform" : "text-[#959595]"} font-bold leading-6`}>
            Programs & Degrees
          </p>
        </div>

        <div className={`w-full lg:w-[12rem] h-10 ${activeTab === "courses" ? "bg-[#EEF3FC]" : ""} flex justify-center items-center rounded-sm cursor-pointer`} onClick={()=>handleTabSelect("courses")}>
          <p className={`text-xs ${activeTab === "courses" ? "text-black-200  scale-105 transition-transform" : "text-[#959595]"} font-bold leading-6`}>
            Short Courses
          </p>
        </div>
      </div>

      {/* search */}
      <div className="w-full mt-14 flex items-center gap-5">
        <div className="w-full lg:w-[40rem] relative rounded-sm">
          <input
            type="text"
            value={searchVal}
            onChange={(e)=>setSearchVal(e.target.value)}
            className="w-full pl-16 h-12 border border-[#CCCCCC] rounded-sm focus:outline-none placeholder:text-black-200 placeholder:text-sm"
            placeholder={activeTab === "Programs" ? "Search for Programs..." : "Search for Short Course..."}
          />
          <BiSearch className="absolute left-4 top-[25%]" size={30} />
        </div>

        <button className="h-12 w-12 border border-[#CCCCCC] rounded-sm flex justify-center items-center">
          <CiFilter />
        </button>
      </div>

      {/* results */}
      <div className="w-full mt-12">
        {/* dynamically rendering the result card component based on the activeTab state */}
        {
          activeTab === "Programs" ? (
            programsArr.map((program,index)=>(
               <ResultCard program={program} key={index}/>
            ))
          ):(
            coursesArr.map((program,index)=>(
              <ResultCard courses={program} key={index}/>
           ))
          )
        }
      </div>
    </div>
  );
}
