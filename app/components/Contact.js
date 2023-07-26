"use client";

import { motion } from "framer-motion";
import linkedin from "../../public/svg/linkedin.svg";
import twitter from "../../public/svg/twitter.svg";
import github from "../../public/svg/github.svg";
import facebook from "../../public/svg/facebook.svg";
import instagram from "../../public/svg/instagram.svg";
import Image from "next/image";

const Contact = ({dot, border}) => {
  return (
    <section id="contact" className="h-full bg-[#0f0d15] overflow-hidden">
      <div id="wor" className="relative p-5">
        <div className="xl:mx-auto ml-10 w-[1200px]">
          <div className="circle w-[11px] h-[11px] border-[#5918df] border-[2px] solid rounded-full -m-[5px] -my-[9px]"></div>

          <div className="ml-7">
            <motion.div
              className="deactivate text-xl font-mono mb-5"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              Contact/&gt;
            </motion.div>
          </div>
          <div className="ml-7">
            <div className="text-2xl font-mono flex ">Find me on:</div>
            <div className="my-7 flex gap-7">
              <motion.div
              onMouseEnter={() => {border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                  onMouseLeave={() => {border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                whileHover={{ scale: 2 }}
                className=" text-[#5918df] my-2 "
                onClick={() => {window.open("https://www.linkedin.com/in/ritik-jaiswal-997214210")}}
              >
                <Image src={linkedin} alt="l" className="h-7 w-7 flex" />
              </motion.div>
              <motion.div
              onMouseEnter={() => {border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                  onMouseLeave={() => {border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                whileHover={{ scale: 2 }}
                className="  text-[#5918df] my-2 "
                onClick={() => {window.open("https://github.com/Ritikj8090")}}
              >
                <Image src={github} alt="g" className="h-7 w-7 flex" />
              </motion.div>
              <motion.div
              onMouseEnter={() => {border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                  onMouseLeave={() => {border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                whileHover={{ scale: 2 }}
                className="  text-[#5918df] my-2 "
                onClick={() => {window.open("https://twitter.com/Ritikj713")}}
              >
                <Image src={twitter} alt="g" className="h-7 w-7 flex" />
              </motion.div>

              <motion.div
              onMouseEnter={() => {border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                  onMouseLeave={() => {border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                whileHover={{ scale: 2 }}
                className="  text-[#5918df] my-2 "
                onClick={() => {window.open("https://instagram.com/ritik_jaisz_rj?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D")}}
              >
                <Image src={instagram} alt="l" className="h-7 w-7 flex" />
              </motion.div>
              <motion.div
              onMouseEnter={() => {border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                  onMouseLeave={() => {border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                whileHover={{ scale: 2 }}
                className="  text-[#5918df] my-2 "
                onClick={() => {window.open("https://www.facebook.com/ritik.jaiswal.1217?mibextid=ZbWKwL")}}
              >
                <Image src={facebook} alt="g" className="h-7 w-7 flex" />
              </motion.div>
              
            </div>
            <motion.button
            onMouseEnter={() => {border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                  onMouseLeave={() => {border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
              whileHover={{ scale: 1.2 }}
              className="btn shadow rounded-3xl w-[200px] h-[50px] font-mono font-semibold px-2 py-2  text-xl cursor-none "
            >
              GET IN TOUCH
            </motion.button>
          </div>
          <div className="ml-7 deactivate font-mono mt-10">
              Made with &lt;/&gt; by RiTik. 2023
            </div>
        </div>
        
      </div>
    </section>
  );
};
export default Contact;

/*
<section id="contact" className="w-full h-[550px] bg-[#0f0d15] p-5 flex">
      <div className="h-full w-full flex">
        <div className=" mx-auto h-full flex sm:w-[500px] xl:w-[1000px] w-[100px]">
          <div className="circle w-[11px] h-[11px]  border-[2px] rounded-full -m-[5px] -my-[9px]"></div>
          <div className="mx-7">
            <motion.div
              className="deactivate text-xl font-mono mb-5"
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              Contact/&gt;
            </motion.div>

            <div className=" translate-y-20  w-full">
              <div className="text-2xl font-mono flex ">Find me on:</div>
              <div className="my-7 flex gap-7">
      
                <motion.div whileHover={{scale:2}} className="flex h-full w-full text-[#5918df] my-2 "><Image src={linkedin} alt="l" className="h-7 w-7 flex" /></motion.div>
                <motion.div whileHover={{scale:2}} className="flex h-full w-full text-[#5918df] my-2 "><Image src={github} alt="g" className="h-7 w-7 flex" /></motion.div>
                <motion.div whileHover={{scale:2}} className="flex h-full w-full text-[#5918df] my-2 "><Image src={twitter} alt="g" className="h-7 w-7 flex" /></motion.div>
              
    
                <motion.div whileHover={{scale:2}} className="flex h-full w-full text-[#5918df] my-2 "><Image src={instagram} alt="l" className="h-7 w-7 flex" /></motion.div>
                <motion.div whileHover={{scale:2}} className="flex h-full w-full text-[#5918df] my-2 "><Image src={facebook} alt="g" className="h-7 w-7 flex" /></motion.div>
                <motion.div whileHover={{scale:2}} className="flex h-full w-full text-[#5918df] my-2 "><Image src={twitter} alt="g" className="h-7 w-7 flex" /></motion.div>
               
            </div>
              <motion.button
                whileHover={{scale:1.2}}
                className="btn shadow rounded-3xl w-[200px] h-[50px] font-mono font-semibold px-2 py-2  text-xl translate-y-10"
              >
                GET IN TOUCH
              </motion.button>
            </div>
            <div className="translate-y-[250px] deactivate font-mono">
              Made with &lt;/&gt; by RiTik. 2023
            </div>
          </div>
        </div>
      </div>
    </section>
 */
