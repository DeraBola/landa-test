"use client"; // this is a client component 👈🏽
import Main from "@/components/Main";
import Nav from "@/components/Nav";
import SideNav from "@/components/SideNav";
import { dash, learn } from "../../public/assets";
import { nav } from "@/utils/data";
import { useState } from "react";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const sideNavArr: nav[] = [
    {
      img: dash,
      title: "Dashboard",
      label: "Dashboard",
    },
    {
      img: learn,
      title: "Learning",
      label: "Learning",
    },
  ];

  const [display, setDisplay] = useState("Learning");

  return (
    <main className="w-full border-2 border-red">
      <Nav navi={sideNavArr} setDisplay={setDisplay}/>
      <SideNav navi={sideNavArr} setDisplay={setDisplay} />
      
      {/* checking with section to display (when the component Mounts, the Main component is going to be rendered) */}
      {display === "Learning" ? <Main /> : <Dashboard />}
    </main>
  );
}
