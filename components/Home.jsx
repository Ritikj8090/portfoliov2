"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"
import AnimatedTextCharacter from './AnimatedTextCharacter';
import Msg from './Msg';

const Home = ({ dot, border }) => {
    const [heights, setheights] = useState(10);
  const borderRef = useRef(null);
  useEffect(() => {
    const sec = setInterval(() => {
      const bor = borderRef.current;
      const body = document.body;
      const html = document.documentElement;
      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      setheights(height - 200)
      
      bor.style = `height: ${heights - 8}px; transition: ease-in-out 20s;`
    }, [1000]);
    return () => {
      clearInterval(sec);
    };
  }, [heights]);
  return (
    <section id="home" className="h-screen w-full py-52 px-5 flex bg-home">
      <div className="flex xl:mx-auto w-[1200px] ml-10">
        <div className={`w-[11px] h-[11px] border-[#5918df] absolute border-[2px] solid rounded-full -m-[5px] -my-[9px]`}></div>
        <div ref={borderRef} className={`bg-[#5918df]  w-[1px] absolute z-9 `}>
          <a
            href="#work"
            onMouseEnter={() => {
              border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
            onMouseLeave={() => {
              border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
            className="-rotate-90 scroll -mx-3 cursor-none  font-bold text-xl sm:my-72 my-52"
          >
            SCROLL
          </a>
        </div>
        <div className="ml-7">
          <motion.div
            className="deactivate text-xl font-mono mb-5"
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", delay: 3 }}
          >
            Start/&gt;
          </motion.div>
          <div className="text-3xl lg:text-6xl md:text-[50px]">
            <div className="sm:flex ">
              <AnimatedTextCharacter text={"Hi my name is "} />
              <div>
                <motion.p
                  initial={{ x: -3000 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 2 }}
                  className="pri-col flex-col"
                  onMouseEnter={() => {
                    border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference`;
                  }}
                  onMouseLeave={() => {
                    border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference`;
                  }}
                >
                  RiTik Jaiswal
                </motion.p>
              </div>
            </div>
            <div className="flex my-5">
              <motion.div
                initial={{ x: -2000 }}
                animate={{ x: 0 }}
                transition={{ delay: 1, type: "spring" }}
              >
                I <i className="font-serif">design</i> and develop <Msg />
              </motion.div>
            </div>
            <div className="mt-8 deactivate font-mono text-xl">
              <AnimatedTextCharacter text={"Let me show You..."} delay={4} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home