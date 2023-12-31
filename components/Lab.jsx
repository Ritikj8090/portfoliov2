"use client";
import { motion } from "framer-motion";
import linkedin from "../public/svg/linkedin.svg";
import twitter from "../public/svg/twitter.svg";
import github from "../public/svg/github.svg";
import facebook from "../public/svg/facebook.svg";
import instagram from "../public/svg/instagram.svg";
import codechef1 from "../public/svg/codechef1.svg";
import codeforces1 from "../public/svg/Codeforces1.svg";
import leetcode1 from "../public/svg/leetcode1.svg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SnakeGame from "./SnakeGame";
import Clock from "./DigitalClock/Clock";
import { Tilt } from "react-tilt";
import TicTacToc from "./TicTacToc/TicTacToc";

const Lab = ({dot, border}) => { 
    const route = useRouter()
  return (
    <section id="lab" className="h-full  overflow-hidden  relative">
      <div id="wor" className=" p-5 -z-10">
        <div className="xl:mx-auto ml-10 w-full xl:w-[1200px]">
          <div className="circle w-[11px] h-[11px] border-[#5918df] border-[2px] solid rounded-full -m-[5px] -my-[9px]"></div>
          
          <div className="ml-7 ">
            <motion.div
              className="deactivate text-xl font-mono mb-5"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              Lab/&gt;
            </motion.div>
          </div>
          <div className="ml-7">
            <div className=" lg:flex">
            
            <div className=" p-2 cursor-none h-[600px] w-[400px]">
              <TicTacToc border={border}/>
            </div>
            </div>
          </div>
          
        </div>
        
      </div>
      
    </section>
  );
};
export default Lab;
