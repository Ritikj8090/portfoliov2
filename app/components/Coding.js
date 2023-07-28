"use client";

import { motion } from "framer-motion";
import portfolio from "../../public/images/portfolio.png";
import movix from "../../public/images/mo.png";
import search from "../../public/images/search.png";
import { Tilt } from "react-tilt";
import Image from "next/image";
import github from "../../public/svg/github.svg";
import loading from "../../public/svg/loading.svg";
import white from "../../public/images/white.png";
import black from "../../public/images/black.jpg";
import codeforces from "../../public/svg/codeforces.svg";
import Codechef from "../../public/svg/Codechef.svg";
import LeetCode from "../../public/svg/LeetCode.svg";
import bkack1 from "../../public/images/bkack1.jpg";
import gfg from "../../public/svg/gfg.svg";
import { useEffect, useState } from "react";

/*
622fe01313bc8c6226fc553111a8d9e30af4f5c6
8070a61356b55b18b3179282bcaba72f5d0ec340
 */
const Coding = ({dot, border}) => {

  const [codeForcesData, setCodeForcesData] = useState()
  const [hover, setHover] = useState("white")
  useEffect(() => {
    async function getData() {
      const res = await fetch('https://codeforces.com/api/user.info?handles=ritikj713')
      if (!res.ok) {
        console.log('Failed to fetch data')
      }
      return res.json()
      
    }
      async function Page() {
      const data = await getData()
      setCodeForcesData(data?.result[0])
    }
    Page()
  },[])
  
  const handleEnter = () => {
    setHover(true),
    border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`

  }
  const handleLeave = () => {
    setHover(false),
    border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`

  }
  return (
    <section
      id="work" 
      className="lg:h-full h-[1700px]  bg-[#181527]  overflow-hidden"
      
    >
      <div className=" p-5"></div>
      <div className=" p-5">
        <div className="flex xl:mx-auto ml-10 w-[1200px]">
          <div className="circle w-[11px] h-[11px] border-[#5918df] border-[2px] solid rounded-full -m-[5px] -my-[9px]"></div>

          <div className="ml-7">
            <motion.div
              className="deactivate text-xl font-mono mb-5"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              Coding/&gt;
            </motion.div>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="flex flex-wrap h-full">
            
            <div className="mx-auto" >
              <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000}>
                <motion.div
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="flex m-5 relative cursor-none"
                  onClick={() => {window.open("https://codeforces.com/profile/ritikj713")}}
                  
                  
                >
                  {hover === true ? <Image
                    src={black}
                    alt="a"
                    className="h-[220px] w-[500px] relative gradient"
                  /> : <Image
                    src={white}
                    alt="a"
                    className="h-[220px] w-[500px] relative gradient"
                  />}
                  <Image
                    src={codeforces}
                    alt="a"
                    className="h-[220px] w-[500px] absolute gradient"
                  />
                  <div className=" absolute bottom-5 -ml-5">
                    <div className="font-mono font-bold text-2xl ">
                      
                      MaxRating = {codeForcesData?.maxRating} <br />
                      MaxRank = {codeForcesData?.maxRank} <br />
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            </div>
            <div className="mx-auto flex justify-between items-end" >
              <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000}>
                <motion.div
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="flex m-5 relative cursor-none"
                  onClick={() => {window.open("https://www.codechef.com/users/ritikj713")}}
                  
                  
                >
                  {hover === true ? <Image
                    src={black}
                    alt="a"
                    className="h-[220px] w-[500px] relative gradient"
                  /> : <Image
                    src={white}
                    alt="a"
                    className="h-[220px] w-[500px] relative gradient"
                  />}
                  <Image
                    src={Codechef}
                    alt="a"
                    className="h-[220px] w-[500px] absolute gradient"
                  />
                  <div className=" absolute bottom-5 -ml-5">
                    <div className="font-mono font-bold text-2xl ">
                      
                      MaxRating = 1401 <br />
                      Star = &#11088;&#11088; <br />
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            </div>
            <div className="mx-auto flex justify-between items-end" >
              <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000}>
                <motion.div
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="flex m-5 relative cursor-none"
                  onClick={() => {window.open("https://leetcode.com/Ritikj713/")}}
                  
                  
                >
                  {hover === true ? <Image
                    src={bkack1}
                    alt="a"
                    className="h-[220px] w-[500px] relative gradient"
                  /> : <Image
                    src={white}
                    alt="a"
                    className="h-[220px] w-[500px] relative gradient"
                  />}
                  <Image
                    src={LeetCode}
                    alt="a"
                    className="h-[220px] w-[500px] absolute gradient"
                  />
                  <div className=" absolute bottom-5 -ml-5">
                    <div className="font-mono font-bold text-2xl ">
                      
                      Easy = 66 <br />
                      Medium = 59 <br />
                      Hard = 4 <br />
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            </div>
            <div className="mx-auto flex justify-between items-end" >
              <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000}>
                <motion.div
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="flex m-5 relative cursor-none"
                  onClick={() => {window.open("https://portfolio-iota-amber-56.vercel.app/")}}
                  
                  
                >
                  {hover === true ? <Image
                    src={black}
                    alt="a"
                    className="h-[220px] w-[500px] relative gradient"
                  /> : <Image
                    src={white}
                    alt="a"
                    className="h-[220px] w-[500px] relative gradient"
                  />}
                  <Image
                    src={gfg}
                    alt="a"
                    className="h-[220px] w-[500px] absolute gradient"
                  />
                  <div className=" absolute bottom-5 -ml-5">
                    <div className="font-mono font-bold text-2xl ">
                      
                      Score = 495 <br />
                      Problem Solved = 193 <br />
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Coding;
