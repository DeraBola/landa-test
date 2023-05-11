"use client"; // this is a client component 👈🏽
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { logo } from '../../public/assets'
import { nav } from '@/utils/data'
import {BsArrowRight} from "react-icons/bs"
import {FiLogOut} from 'react-icons/fi'

interface sideNavProps{
  navi:nav[]
  setDisplay:Dispatch<SetStateAction<string>>
}

export default function SideNav({navi,setDisplay}:sideNavProps) {
  const [active,setACtive] = useState<string>("Learning")

  const handleActiveSelect = (text:string) =>{
    setACtive(text)
    setDisplay(text)
  }
  return (
    <div className='hidden lg:block w-[20%] px-5 py-7 h-full fixed left-0 top-0 border bg-[#F6F9FD] border-[#E6E6E6]'>
      <div className='px-5'>
        <Image src={logo} alt=''/>
      </div>

      <div className='mt-20'>
        {
          navi.map((nav,index)=>(
            <div key={index} className={`w-full px-5 ${active === nav.label ? "bg-[#DDE7F8] text-[#004CCC]" : ""}  cursor-pointer flex justify-start gap-4 py-3 items-center`} onClick={()=>handleActiveSelect(nav.label)}>
              <div>
                <Image src={nav.img} alt=""/>
              </div>

              <p>{nav.label}</p>

            </div>
          ))
        }
      </div>


      <div className='w-full h-[5.25rem] bg-[#0D0630] flex justify-between items-center px-4 mt-52'>
        <p className='text-white text-sm leading-6 w-[80%] l font-medium'>Find more Degrees and Short Courses</p>
        <div className='w-6 h-6 bg-white flex justify-center items-center'>
          <BsArrowRight/>
        </div>
      </div>

      {/* logout */}
      <div className='flex justify-between items-center mt-8'>
        <p className='text-md leading-[32px] text-black-200'>Logout</p>
        <FiLogOut/>
      </div>
    </div>
  )
}
