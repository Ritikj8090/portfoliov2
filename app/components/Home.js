"use client";

import { motion } from "framer-motion";
import AnimatedTextCharacter from "./AnimatedTextCharacter";
import Msg from "./Msg";
import bg_home from "../../public/images/bg-home.webp";

const Home = () => {

  return (
    <section id="home" className="h-screen w-full py-52 px-5 flex bg-home">
      <div className="flex xl:mx-auto w-[1200px] ml-10">
        <div className="w-[11px] h-[11px] border-[#5918df] absolute border-[2px] solid rounded-full -m-[5px] -my-[9px]"></div>
        <div className="bg-[#5918df] h-[637%] lg:h-[475%] 2xl:h-[321%] w-[1px] absolute z-9 ">
          <a href="#work" className="-rotate-90 scroll -mx-3  font-bold text-xl sm:my-72 my-52">
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
  );
};
export default Home;

/*
      <div className="h-full w-full flex">
        <div className="mx-auto h-full flex sm:w-[500px] xl:w-[1000px] w-[100px]">
          <div className="w-[11px] h-[11px] border-[#5918df] absolute border-[2px] solid rounded-full -m-[5px] -my-[9px]"></div>
          <div className="bg-[#5918df] h-[495%] w-[1px] absolute z-9">
            <span className="-rotate-90 scroll -mx-3 my-72 font-bold text-xl">
              SCROLL
            </span>
          </div>
          <div className="ml-7 -my-3">
            <motion.div
              className="deactivate text-xl font-mono mb-5"
              initial={{ y: -1000 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", delay: 3 }}
            >
              Start/&gt;
            </motion.div>
            <div className="text-6xl">
              <div>
                <AnimatedTextCharacter text={"Hi my name is "} />
                <motion.p
                  initial={{ x: -1000, y: -40 }}
                  animate={{ x: 400, y: -60 }}
                  transition={{ delay: 2 }}
                  className="pri-col"
                >
                  RiTik Jaiswal
                </motion.p>
              </div>

              <motion.div initial={{x:-2000}} animate={{x:0}} transition={{delay:1, type:"spring"}}>
                I <i className="font-serif">design</i> and develop <Msg />
              </motion.div>
              <div className="mt-8 deactivate font-mono text-xl">
                <AnimatedTextCharacter text={"Let me show You..."} delay={4} />
              </div>
            </div>
          </div>
        </div>
      </div>
 */
