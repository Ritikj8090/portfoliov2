'use client'

import { useEffect, useState } from "react";
import menu from "../../public/svg/menu.svg";
import close from "../../public/svg/close.svg";
import Image from "next/image";


const NavBar = () => {

  const [prevScroll, setprevScroll] = useState(0)
  const [isActive, setIsActive] = useState("start");
  const [menutoggle, setMenutoggle] = useState(true)

  const handleScroll = () => {
    setprevScroll(window.scrollY)
    scroll();
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  },[prevScroll]);

  function scroll () {
    if (
      document.documentElement.scrollTop >= prevScroll
   ) {
      document.getElementById("navlist").style.top = "-60px";
   } else {
      document.getElementById("navlist").style.top = "0";
   }
  }

  return (
    <nav id="navlist" className="flex p-4 items-center justify-between w-full top-0 fixed ease-in-out duration-500">
      <div 
      className="flex cursor-pointer items-center"
      onClick={() => window.scrollTo(0, 0)}
      >
        <span className="text-3xl pri-col tracking-wider mr-1">&lt;</span>
        <span className="text-5xl tracking-wider">RITIK</span>
        <span className="text-3xl pri-col tracking-wider ml-1">/&gt;</span>
      </div>
      <div className="text-2xl hidden md:flex">
        <ul className="list-none tracking-wide">
          <a
            className={`${
              isActive === "start" ? "active" : "deactivate"
            } cursor-pointer hover:${
              isActive !== "start" ? "text-gray-400" : "activate"
            } mr-3`}
            href="#home"
            onClick={() => {
              setIsActive("start");
            }}
          >
            Start/&gt;
          </a>
          <a
            className={`${
              isActive === "work" ? "active" : "deactivate"
            } cursor-pointer hover:${
              isActive !== "start" ? "text-gray-400" : "activate"} mr-3`}
            href="#work"
            onClick={() => {
              setIsActive("work");
            }}
          >
            Work/&gt;
          </a>
          <a
            className={`${
              isActive === "lab" ? "active" : "deactivate"
            } cursor-pointer hover:${
              isActive !== "lab" ? "text-gray-400" : "activate"
            } mr-3`}
            href="#lab"
            onClick={() => {
              setIsActive("lab");
            }}
          >
            Lab/&gt;
          </a>
          <a
            className={`${
              isActive === "about" ? "active" : "deactivate"
            } cursor-pointer hover:${
              isActive !== "about" ? "text-gray-400" : "activate"
            } mr-3`}
            href="#about"
            onClick={() => {
              setIsActive("about");
            }}
          >
            About/&gt;
          </a>
          <a
            className={`${
              isActive === "contact" ? "active" : "deactivate"
            } cursor-pointer hover:${
              isActive !== "contact" ? "text-gray-400" : "activate"
            }`}
            href="#contact"
            onClick={() => {
              setIsActive("contact");
            }}
          >
            Contact/&gt;
          </a>
        </ul>
      </div>
      <div className="md:hidden flex">
        <Image src={menutoggle ? menu : close} alt="menu" className="h-10 w-16" onClick={() => {setMenutoggle(!menutoggle)}}/>
        <div className={`${menutoggle ? "hidden" : "flex"} p-6 black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
        <ul className="list-none tracking-wide  flex justify-end items-start flex-col gap-2">
          <a
            className={`${
              isActive === "start" ? "active" : "deactivate"
            } cursor-pointer hover:${
              isActive !== "start" ? "text-gray-400" : "activate"
            } mr-3`}
            href="#home"
            onClick={() => {
              setIsActive("start");
            }}
          >
            Start/&gt;
          </a>
          <a
            className={`${
              isActive === "work" ? "active" : "deactivate"
            } cursor-pointer hover:${
              isActive !== "start" ? "text-gray-400" : "activate"} mr-3`}
            href="#work"
            onClick={() => {
              setIsActive("work");
            }}
          >
            Work/&gt;
          </a>
          <a
            className={`${
              isActive === "lab" ? "active" : "deactivate"
            } cursor-pointer hover:${
              isActive !== "lab" ? "text-gray-400" : "activate"
            } mr-3`}
            href="#lab"
            onClick={() => {
              setIsActive("lab");
            }}
          >
            Lab/&gt;
          </a>
          <a
            className={`${
              isActive === "about" ? "active" : "deactivate"
            } cursor-pointer hover:${
              isActive !== "about" ? "text-gray-400" : "activate"
            } mr-3`}
            href="#about"
            onClick={() => {
              setIsActive("about");
            }}
          >
            About/&gt;
          </a>
          <a
            className={`${
              isActive === "contact" ? "active" : "deactivate"
            } cursor-pointer hover:${
              isActive !== "contact" ? "text-gray-400" : "activate"
            }`}
            href="#contact"
            onClick={() => {
              setIsActive("contact");
            }}
          >
            Contact/&gt;
          </a>
        </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;