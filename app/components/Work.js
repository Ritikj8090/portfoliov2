"use client";

import { motion } from "framer-motion";
import portfolio from "../../public/images/portfolio.png";
import movix from "../../public/images/mo.png";
import search from "../../public/images/search.png";
import { Tilt } from "react-tilt";
import Image from "next/image";
import github from "../../public/svg/github.svg";
import loading from "../../public/svg/loading.svg";

const Work = ({dot, border}) => {
  return (
    <section
      id="work" 
      className="lg:h-full h-[1700px]  bg-[#181527]  overflow-hidden"
      
    >
      <div id="work1" className="relative p-5"></div>
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
              Work/&gt;
            </motion.div>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="flex flex-wrap h-[400px]">
            <div className="mx-auto" >
              <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000}>
                <motion.div
                  onMouseEnter={() => {border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                  onMouseLeave={() => {border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="flex m-5 relative cursor-none"
                  onClick={() => {window.open("https://portfolio-iota-amber-56.vercel.app/")}}
                >
                  <Image
                    src={portfolio}
                    alt="a"
                    className="h-[220px] w-[500px]"
                  />
                  <div className=" absolute bottom-5 -ml-5 ">
                    <div className="font-mono font-bold text-2xl">
                      Portfolio
                    </div>
                    <div className="border-2 w-32 my-3"></div>
                    <div>&nbsp;&nbsp;01</div>
                  </div>
                  <div className="absolute right-5 top-5 cursor-pointer" onClick={() => {window.open("https://github.com/Ritikj8090/portfolio")}}>
                    <Image className="h-10 w-10" src={github} alt="github"/>
                  </div>
                </motion.div>
              </Tilt>
            </div>
            <div className="mx-auto flex justify-between items-end">
              <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000}>
                <motion.div
                  onMouseEnter={() => {border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                  onMouseLeave={() => {border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="flex m-5 relative cursor-none"
                  onClick={() => {window.open("https://movie-search-six-omega.vercel.app/")}}
                >
                  <Image src={search} alt="a" className="h-[270px] w-[460px]" />
                  <div className=" absolute bottom-5 -ml-5 ">
                    <div className="font-mono font-bold text-2xl">Search</div>
                    <div className="border-2 w-32 my-3"></div>
                    <div>&nbsp;&nbsp;02</div>
                  </div>
                  <div className="absolute right-5 top-5 cursor-pointer" onClick={() => {window.open("https://github.com/Ritikj8090/movie-search")}}>
                    <Image className="h-10 w-10" src={github} alt="github"/>
                  </div>
                </motion.div>
              </Tilt>
            </div>
            <div className="mx-auto flex justify-center items-center">
              <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000}>
                <motion.div
                  onMouseEnter={() => {border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                  onMouseLeave={() => {border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="flex m-5 relative cursor-none"
                  onClick={() => {window.open("https://movix-omega-sandy.vercel.app/")}}
                >
                  <Image src={movix} alt="a" className="h-[420px] w-[290px]" />
                  <div className=" absolute bottom-5 -ml-5 ">
                    <div className="font-mono font-bold text-2xl">Movix</div>
                    <div className="border-2 w-32 my-3"></div>
                    <div>&nbsp;&nbsp;03</div>
                  </div>
                  <div className="absolute right-5 top-5 cursor-none" onClick={() => {window.open("https://github.com/Ritikj8090/Movix")}}>
                    <Image className="h-10 w-10" src={github} alt="github"/>
                  </div>
                </motion.div>
              </Tilt>
            </div>
          </div>
        </div>
        <div className="w-full h-full md:mt-0 mt-[670px]">
          <div className="flex flex-wrap h-[400px]">
            <div className="mx-auto">
              <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000}>
                <motion.div
                  onMouseEnter={() => {border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                  onMouseLeave={() => {border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="flex m-5 relative cursor-none"
                  onClick={() => {window.open("https://portfolio-iota-amber-56.vercel.app/")}}
                >
                  <Image
                    src={loading}
                    alt="a"
                    className="h-[220px] w-[500px]"
                  />
                  <div className=" absolute bottom-5 -ml-5 ">
                    <div className="font-mono font-bold text-2xl">
                      Coming Soon...
                    </div>
                    <div className="border-2 w-32 my-3"></div>
                    <div>&nbsp;&nbsp;04</div>
                  </div>
                  <div className="absolute right-5 top-5 cursor-none" onClick={() => {window.open("https://github.com/Ritikj8090/portfolio")}}>
                    <Image className="h-10 w-10" src={github} alt="github"/>
                  </div>
                </motion.div>
              </Tilt>
            </div>
            <div className="mx-auto flex justify-between items-end">
              <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000}>
                <motion.div
                  onMouseEnter={() => {border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                  onMouseLeave={() => {border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="flex m-5 relative cursor-none"
                  onClick={() => {window.open("https://portfolio-iota-amber-56.vercel.app/")}}
                >
                  <Image src={loading} alt="a" className="h-[270px] w-[460px]" />
                  <div className=" absolute bottom-5 -ml-5 ">
                    <div className="font-mono font-bold text-2xl">Coming Soon...</div>
                    <div className="border-2 w-32 my-3"></div>
                    <div>&nbsp;&nbsp;05</div>
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
export default Work;

/*
<Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000}>
            <div className="flex m-5">
              <Image src={portfolio} alt="a" className="h-[200px] w-[400px]" />
              <div className="absolute">r</div>
            </div>
          </Tilt>
<Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000}>
        <div className={`relative h-[220px] w-[500px]`}>
          <Image
            src={props.image}
            alt="img"
            className="absolute h-full w-full "
          />
          <div className="absolute h-full w-full gradient">
            <mdiv className="h-full w-full pt-32 -ml-10 absolute">
              <div className="font-mono font-bold text-2xl">{props.name}</div>
              <div className="border-2 w-32 my-3"></div>
              <div>&nbsp;&nbsp;0{props.number}</div>
            </mdiv>
          </div>
        </div>
      </Tilt>
<div className="h-full w-full flex">
        <div className=" mx-auto h-full flex sm:w-[500px] xl:w-[1000px] w-[100px]">
          <div className="circle w-[11px] h-[11px]  border-[2px] rounded-full -m-[5px] -my-[9px]"></div>
          <div className="mx-7">
            <div className="flex gap-28">
              <motion.div
                initial={{ x: -550, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="-ml-96"
              >
                <TiltComponent_f
                  image={portfolio}
                  name={"Portfolio V1"}
                  number={1}
                />
              </motion.div>
              <div className="translate-y-[220px] mx-16">
                <motion.div
                  initial={{ x: -550, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <TiltComponent_m image={search} name={"Search"} number={2} />
                </motion.div>
              </div>
              <div className="translate-y-[20px] mx-9">
                <motion.div
                  initial={{ x: -550, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <TiltComponent_s image={movix} name={"Movix"} number={3} />
                </motion.div>
              </div>
            </div>
            <div className="flex gap-28">
              <div className="translate-y-[200px] ml-[-250px]">
                <motion.div
                  initial={{ x: -550, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <TiltComponent_f image={movix} name={"Blog using Django"} number={4} />
                </motion.div>
              </div>
              <div className="translate-y-[250px] ml-[400px]">
                <motion.div
                  initial={{ x: -550, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <TiltComponent_m image={movix} name={"Portfolio V2"} number={5} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div> 
 */

/*
<div className="h-full w-full flex">
        <div className=" mx-auto h-full flex sm:w-[500px] xl:w-[1000px] w-[100px]">
          <div className="circle w-[11px] h-[11px]  border-[2px] rounded-full -m-[5px] -my-[9px]"></div>
          <div className="mx-7">
            <motion.div
              className="deactivate text-xl font-mono mb-5"
              initial={{ y: -100, opacity:0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              Work/&gt;
            </motion.div>

            <div className="flex gap-28">
              <motion.div
                initial={{ x: -550, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="-ml-96"
              >
                <TiltComponent_f
                  image={portfolio}
                  name={"Portfolio V1"}
                  number={1}
                />
              </motion.div>
              <div className="translate-y-[220px] mx-16">
                <motion.div
                  initial={{ x: -550, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <TiltComponent_m image={search} name={"Search"} number={2} />
                </motion.div>
              </div>
              <div className="translate-y-[20px] mx-9">
                <motion.div
                  initial={{ x: -550, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <TiltComponent_s image={movix} name={"Movix"} number={3} />
                </motion.div>
              </div>
            </div>
            <div className="flex gap-28">
              <div className="translate-y-[200px] ml-[-250px]">
                <motion.div
                  initial={{ x: -550, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <TiltComponent_f image={movix} name={"Blog using Django"} number={4} />
                </motion.div>
              </div>
              <div className="translate-y-[250px] ml-[400px]">
                <motion.div
                  initial={{ x: -550, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <TiltComponent_m image={movix} name={"Portfolio V2"} number={5} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div> 
 */
