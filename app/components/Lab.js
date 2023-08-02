"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import digitalclock from "../../public/images/digitalclock.png";
import analogclock from "../../public/images/analogclock.png";
import { useState } from "react";
const Lab = ({ dot, border }) => {
  const [analog, setAnalog] = useState("opacity-0");
  const [digital, setDigital] = useState("opacity-0")

  const handleEnter = (text) => {
    text === "analog" ? setAnalog("opacity-80 w-[100%]") : ""
    text === "digital" ? setDigital("opacity-80 w-[100%]") : ""
    border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`
  }
  const handleLeave = (text) => {
    text === "analog" ? setAnalog("opacity-0 ") : ""
    text === "digital" ? setDigital("opacity-0") : ""
    border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`
  }
  return (
    <section id="lab" className=" w-full h-screen overflow-hidden">
      <div id="lab1" className="relative p-5 z-[-1]"></div>
      <div className=" p-5">
        <div className=" xl:mx-auto ml-10 w-[1200px]">
          <div className="circle w-[11px] h-[11px] border-[#5918df] border-[2px] solid rounded-full -m-[5px] -my-[9px]"></div>

          <div className="ml-7">
            <motion.div
              className="deactivate text-xl font-mono mb-5"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              Lab/&gt;
            </motion.div>
          </div>
          <div className="ml-7 font-mono relative">
            <div>
              <p className="deactivate mb-5 text-2xl">Random</p>
              <div>
                <motion.div 
                
                  onMouseEnter={() => handleEnter("digital")}
                  onMouseLeave={() => handleLeave("digital")}
                  className="cursor-none w-fit h-fit hover:text-[#5918df]"
                  whileHover={{scale:1.2}}
                  onClick={() => window.open("https://digital-clock-three-theta.vercel.app/")}
                >
                  Digital Clock
                </motion.div>
                <div className={`absolute left-40 ${digital} pictureContainer w-0`}>
                  <Image
                    src={digitalclock}
                    alt="digital"
                    className="h-[150px] w-[300px]"
                  />
                </div>
              </div>
              <div>
                <motion.div 
                  whileHover={{scale:1.2}}
                  onMouseEnter={() => handleEnter("analog")}
                  onMouseLeave={() => handleLeave("analog")}
                  className="cursor-none w-fit h-fit hover:text-[#5918df]"
                  onClick={() => window.open("https://analog-clock-djvyj08c3-ritikj8090.vercel.app/")}
                >
                 Analog Clock
                </motion.div>
                <div className={`absolute left-40 ${analog} pictureContainer w-0`}>
                  <Image
                    src={analogclock}
                    alt="digital"
                    className="h-[150px] w-[300px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Lab;

/*
<section id="lab" className="w-full h-[1100px] bg-[#181527] p-5 flex">
      <div className="h-full w-full flex">
        <div className="circle w-[11px] h-[11px]  border-[2px] rounded-full -m-[5px] -my-[9px]"></div>
        <div className="mx-7">
        <motion.div
              className="deactivate text-xl font-mono mb-5"
              initial={{ y: -100, opacity:0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              Lab/&gt;
            </motion.div>
        </div>
        </div>
    </section>
*/
