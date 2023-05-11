"use client"; // this is a client component 👈🏽
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import { logo, profile } from "../../public/assets";
import {
  AiOutlineDown,
  AiOutlineMenu,
  AiFillCloseCircle,
} from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { nav } from "@/utils/data";

interface sideNavProps {
  navi: nav[];
  setDisplay:Dispatch<SetStateAction<string>>
}

export default function Nav({ navi,setDisplay }: sideNavProps) {
  const [active, setACtive] = useState<string>("Learning");

  const handleActiveSelect = (text:string) =>{
    setACtive(text)
    setDisplay(text)
  }
  // state for mobile menu
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const handleShowMobileNav = () => {
    setShowMobileMenu(true);
  };

  const handleHideMobileNav = () => {
    setShowMobileMenu(false);
  };

  return (
    <div className="px-6 lg:px-12 w-full lg:w-[80%] fixed top-0 left-0 lg:left-[20%] h-28 lg:h-24 flex z-40 justify-between items-center bg-[ rgba(255,255,255,0.6)] border-b border-[#E6E6E6] backdrop-blur-[30px]">
      <div className="flex justify-start items-center gap-5">
        <div className="lg:hidden" onClick={handleShowMobileNav}>
          <AiOutlineMenu size={30} />
        </div>

        <h2 className="text-black-100 font-bold text-md leading-[30px]">
          Learning
        </h2>
      </div>

      <div className="flex justify-start gap-5 items-center">
        <div>
          <Image src={profile} alt="" />
        </div>

        <AiOutlineDown />
      </div>

      {/* mobile nav */}
      <div
        className={`fixed ${
          showMobileMenu ? "left-0" : "left-[-100%]"
        } transition-all  top-0 w-[70%] border  h-screen bg-[#F6F9FD] px-5`}
      >
        <AiFillCloseCircle
          className="absolute right-4 top-4"
          size="30"
          onClick={handleHideMobileNav}
        />

        <div className=" mt-5">
          <Image src={logo} alt="" />
        </div>

        <div className="mt-20">
          {navi.map((nav, index) => (
            <div
              key={index}
              className={`w-full px-5 ${
                active === nav.label ? "bg-[#DDE7F8] text-[#004CCC]" : ""
              }  cursor-pointer flex justify-start gap-4 py-3 items-center`}
              onClick={() => {
                handleHideMobileNav()
                handleActiveSelect(nav.label);
              }}
            >
              <div>
                <Image src={nav.img} alt="" />
              </div>

              <p>{nav.label}</p>
            </div>
          ))}
        </div>

        <div
          className="w-full h-[5.25rem] bg-[#0D0630] flex justify-between items-center px-4 mt-52"
          onClick={handleHideMobileNav}
        >
          <p className="text-white text-sm leading-4 w-[70%] font-medium">
            Find more Degrees and Short Courses
          </p>
          <div className="w-6 h-6 bg-white flex justify-center items-center">
            <BsArrowRight />
          </div>
        </div>

        {/* logout */}
        <div
          className="flex justify-between items-center mt-8"
          onClick={handleHideMobileNav}
        >
          <p className="text-md leading-[32px] text-black-200">Logout</p>
          <FiLogOut />
        </div>
      </div>
    </div>
  );
}
