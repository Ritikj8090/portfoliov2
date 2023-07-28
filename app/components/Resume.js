"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import sun from "../../public/svg/sun.svg";
import dark from "../../public/svg/dark.svg";
import TiltComponent from "./TiltComponent";

const Resume = ({ dot, border }) => {
  return (
    <section id="about" className={`h-full overflow-hidden bg-[#181527]`}>
      <div className=" p-5">
        <div className="xl:mx-auto ml-10 xl:w-[1200px]">
          <div className="circle w-[11px] h-[11px] border-[#5918df] border-[2px] solid rounded-full -m-[5px] -my-[9px]"></div>

          <div className="ml-7">
            <motion.div
              className="deactivate text-xl font-mono mb-5"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              Resume/&gt;
            </motion.div>
          </div>
          <div className="w-full h-full ml-7 md:text-[16px] text-[10px]">
            <div className="flex justify-between">
              <div>
              <TiltComponent text={"Ritik Jaiswal"} className={"text-5xl font-bold"}/>
              <TiltComponent text={"LinkedIn: view"} />
              <TiltComponent text={"Github: view"} />
                
              </div>
              <div>
              <TiltComponent text={"Ritikj713@gmail.com"} />
              <TiltComponent text={"Mobile No: +91 8840180023"} />
              </div>
            </div>
            <div className="mt-5 text-3xl font-bold font-mono">
            <TiltComponent text={"EDUCATION"} />
              
            </div>
            <div className="">
              <hr />
            </div>
            <div className="justify-between flex mt-5">
              <div>
              <TiltComponent text={"• Indreprastha Engineering College"} />
                <TiltComponent text={"Bachelor of Technology - Computer Science and Engineering; GPA: 7.36"} />
                
              </div>
              <div>
              <TiltComponent text={"Ghaziabad, India"} />
              <TiltComponent text={"Sep 2020 - Aug 2024"} />
                
              </div>
            </div>
            <div className="justify-between flex mt-5">
              <div>
              <TiltComponent text={"• St Xavier's School"} />
              <TiltComponent text={"Senior Secondary School; Percentage: 72%"} />
              <TiltComponent text={"High School; Percentage: 76%"} />
                
              </div>
              <div>
              <TiltComponent text={"Salempur, India"} />
              <TiltComponent text={"Apr 2017 - May 2019"} />
              <TiltComponent text={"Apr 2016 - May 2017"} />
                
              </div>
            </div>
            <div className="mt-5 text-3xl font-bold font-mono">
            <TiltComponent text={"PROJECTS"} />
            </div>
            <div className="">
              <hr />
            </div>
            <div className="justify-between flex mt-5">
              <div>
              <TiltComponent text={"• Personal Portfolio Webpage"} />
               
                <motion.div className="h-fit w-fit" whileHover={{ scale: 1.2 }}>
                  <Tilt
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    perspective={1000}
                  >
                    &nbsp; &nbsp; Developed a React-based portfolio webpage with distinct sections. <br />
                    &nbsp; &nbsp; Implemented interactive components and smooth navigation for an engaging user experience <br />
                    &nbsp; &nbsp; Demonstrated creativity, attention to detail, and strong problem-solving abilities throughout the <br /> 
                    &nbsp; &nbsp; development process.
                    
                  </Tilt>
                </motion.div>
                <motion.div className="h-fit w-fit" whileHover={{ scale: 1.2 }}>
                  <Tilt
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    perspective={1000}
                  >
                    &nbsp; &nbsp; <span className="font-extrabold">Tech Used:</span> <span className="font-mono">React, JavaScript, HTML, Tailwind CSS, Additional React Libraries.</span>
                  </Tilt>
                </motion.div>
              </div>
              <div>
              <TiltComponent text={"Jan 2023 - Feb 2023"} />
              </div>
              
            </div>
            <div className="justify-between flex mt-5">
            <div>
            <TiltComponent text={"• Movie Web Application"} />
                
                <motion.div className="h-fit w-fit" whileHover={{ scale: 1.2 }}>
                  <Tilt
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    perspective={1000}
                  >
                    &nbsp; &nbsp; React-based web app for movies and TV shows with search, release date, actors, and genres. <br />
                    &nbsp; &nbsp; Integrated APIs to fetch comprehensive movie and TV show data. <br />
                    &nbsp; &nbsp; Responsive design optimized for various devices for seamless user experience. <br /> 
                    &nbsp; &nbsp; Smooth navigation and intuitive UI for effortless user interaction.
                    
                  </Tilt>
                </motion.div>
                <motion.div className="h-fit w-fit" whileHover={{ scale: 1.2 }}>
                  <Tilt
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    perspective={1000}
                  >
                    &nbsp; &nbsp; <span className="font-extrabold">Tech Used:</span> <span className="font-mono">: React, TMBD API, Redux, HTML/SCSS, JavaScript.</span>
                  </Tilt>
                </motion.div>
              </div>
              <div>
              
              <TiltComponent text={"Mar 2023 - Apr 2023"} />
              </div>
            </div>
            <div className="mt-5 text-3xl font-bold font-mono">
              <motion.div className="h-fit w-fit" whileHover={{ scale: 1.2 }}>
                <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000}>
                  ACHIEVEMENTS
                </Tilt>
              </motion.div>
            </div>
            <div className="">
              <hr />
            </div>
            <div className="justify-between flex mt-5">
              <div>
                <TiltComponent text={"• Rated Newbie at codeforces (max. rating 698) (view) "}/>
                <TiltComponent text={"• Rated 2 stars at codechef (max. rating 1468). (view) "}/>
                <TiltComponent text={"• Solved 1500+ DSA problems on various competitive programming platforms. "}/>
              </div>
            </div>
            <div className="mt-5 text-3xl font-bold font-mono">
            <TiltComponent text={"SKILLS"}/>
            </div>
            <div className="">
              <hr />
            </div>
            <div className="justify-between flex mt-5">
              <div>
              <motion.div className="h-fit w-fit" whileHover={{ scale: 1.2 }}>
                  <Tilt
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    perspective={1000}
                  >
                    &nbsp; &nbsp; <span className="font-extrabold">Languages:</span> <span className="font-mono">C, C++, JavaScript, Java, Python.</span>
                  </Tilt>
                </motion.div>
                <motion.div className="h-fit w-fit" whileHover={{ scale: 1.2 }}>
                  <Tilt
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    perspective={1000}
                  >
                    &nbsp; &nbsp; <span className="font-extrabold">Frameworks and Tools:</span> <span className="font-mono">NodeJS, Rest APIs, Git, Linux, VS-Code, Django</span>
                  </Tilt>
                </motion.div>
                <motion.div className="h-fit w-fit" whileHover={{ scale: 1.2 }}>
                  <Tilt
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    perspective={1000}
                  >
                    &nbsp; &nbsp; <span className="font-extrabold">Databases:</span> <span className="font-mono">MySQL, MongoDB</span>
                  </Tilt>
                </motion.div>
                <motion.div className="h-fit w-fit" whileHover={{ scale: 1.2 }}>
                  <Tilt
                    tiltMaxAngleX={25}
                    tiltMaxAngleY={25}
                    perspective={1000}
                  >
                    &nbsp; &nbsp; <span className="font-extrabold">Courses:</span> <span className="font-mono">Database Management Systems, Object-Oriented Programming, ComputerNetworks,Full Stack Development From Meta</span>
                  </Tilt>
                </motion.div>
                </div>
            </div>
            <div className="flex justify-center items-center">
            <motion.button
            onMouseEnter={() => {border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
                  onMouseLeave={() => {border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`}}
              whileHover={{ scale: 1.2 }}
              className="btn shadow rounded-3xl w-[200px] h-[50px] font-mono font-semibold px-2 py-2  text-xl cursor-none "
              onClick={() => window.open("/RITIK.pdf")}
              download={true}
            >
              Download Resume
            </motion.button>
            </div>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;

/*
    <section id="about" className="w-full h-[1100px] bg-[#181527] p-5 flex">
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
              About/&gt;
            </motion.div>
            <div className="-translate-x-16 deactivate font-semibold text-[17px]">
              <div><span>01</span><span className="ml-11 text-blue-600">class</span> <span className="text-yellow-400">RiTik Jaiswal</span></div>
              <div><span>02</span><span className="ml-11">&nbsp;&nbsp;&nbsp;&nbsp;// I can, because I did.</span></div>
              <div className="inline-flex"><span>03</span><span className="ml-11">&nbsp;&nbsp;&nbsp;&nbsp;// My vast variety of skills is continuously expanding.</span></div>
              <div><span>04</span><span className="ml-11 text-blue-600">&nbsp;&nbsp;&nbsp;&nbsp;constructor <span className="text-white">() {"\u007B"}</span> </span></div>
              <div><span>05</span><span className="ml-11 text-red-600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this<span className="text-white">.</span></span><span className="text-[#24e33a]">name <span className="text-red-500">= <span className="text-[#24e33a]">&apos;RiTik Jaiswal&apos;</span></span></span></div>
              <div><span>06</span><span className="ml-11 text-red-600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this<span className="text-white">.</span></span><span className="text-[#24e33a]">Day_Of_Birth_TimeStamp <span className="text-red-500">= <span className="text-yellow-600">{time.year}:{time.month}:{time.day}</span></span></span></div>
              <div><span>07</span><span className="ml-11 text-red-600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this<span className="text-white">.</span></span><span className="text-[#24e33a]">email <span className="text-red-500">= <span className="text-[#24e33a]">&apos;Ritikj713@gmail.com&apos;</span></span></span></div>
              <div><span>08</span><span className="ml-11 text-white">&nbsp;&nbsp;&nbsp;&nbsp;{"\u007D"}</span></div>
              <div><span>09</span><span className="ml-11 text-yellow-400">&nbsp;&nbsp;&nbsp;&nbsp;WorkExperience</span> <span className="text-white">() {"\u007B"}</span></div>
              <div><span>10</span><span className="ml-11 text-blue-600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return</span><span className="text-white">[</span></div>
              <div><span>11</span><span className="ml-11 text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\u007B"} &nbsp; <span className="text-[#24e33a]">&apos; 2020 - 2024 &apos;</span> &nbsp; : <span className="text-[#24e33a]"> &nbsp; &apos; Inderprastha Engineering College - Bachelor Degree in Computer Science  &apos;</span> &nbsp; {"\u007D"}, </span></div>
              <div><span>12</span><span className="ml-11 text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\u007B"} &nbsp; <span className="text-[#24e33a]">&apos; 2018 - 2019 &apos;</span> &nbsp; : <span className="text-[#24e33a]"> &nbsp; &apos; St Xaiver&apos;s School Salempur Uttar Pardesh &apos;</span> &nbsp; {"\u007D"}, </span></div>
              <div><span>13</span><span className="ml-11 text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\u007B"} &nbsp; <span className="text-[#24e33a]">&apos; 2016 - 2017 &apos;</span> &nbsp; : <span className="text-[#24e33a]"> &nbsp; &apos; St Xaiver&apos;s School Salempur Uttar Pardesh &apos;</span> &nbsp; {"\u007D"}, </span></div>
              <div><span>14</span><span className="ml-11 text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</span></div>
              <div><span>15</span><span className="ml-11 text-yellow-400">&nbsp;&nbsp;&nbsp;&nbsp;Educaion</span> <span className="text-white">() {"\u007B"}</span></div>
              <div><span>16</span><span className="ml-11 text-blue-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &nbsp;</span> <span className="text-white">[</span></div>
              <div><span>11</span><span className="ml-11 text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\u007B"} &nbsp; <span className="text-[#24e33a]">&apos; 2020 - 2024 &apos;</span> &nbsp; : <span className="text-[#24e33a]"> &nbsp; &apos; Inderprastha Engineering College - Bachelor Degree in Computer Science  &apos;</span> &nbsp; {"\u007D"}, </span></div>
              <div><span>12</span><span className="ml-11 text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\u007B"} &nbsp; <span className="text-[#24e33a]">&apos; 2018 - 2019 &apos;</span> &nbsp; : <span className="text-[#24e33a]"> &nbsp; &apos; St Xaiver&apos;s School Salempur Uttar Pardesh &apos;</span> &nbsp; {"\u007D"}, </span></div>
              <div><span>13</span><span className="ml-11 text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\u007B"} &nbsp; <span className="text-[#24e33a]">&apos; 2016 - 2017 &apos;</span> &nbsp; : <span className="text-[#24e33a]"> &nbsp; &apos; St Xaiver&apos;s School Salempur Uttar Pardesh &apos;</span> &nbsp; {"\u007D"}, </span></div>
              <div><span>21</span><span className="ml-11 text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] </span> </div>
              <div><span>22</span><span className="ml-11 text-white">&nbsp;&nbsp;&nbsp;&nbsp;{"\u007D"} </span> </div>
              <div><span>23</span><span className="ml-11 text-yellow-400">&nbsp;&nbsp;&nbsp;&nbsp;Skills</span> <span className="text-white">() {"\u007B"}</span></div>
              <div><span>24</span><span className="ml-11 text-blue-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &nbsp;</span> <span className="text-white">[</span></div>
              <div><span>25</span><span className="ml-11 text-white flex-wrap">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-green-500">&apos;&nbsp; HTML &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-green-500">&apos;&nbsp; CSS &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-green-500">&apos;&nbsp; Node.js &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-green-500">&apos;&nbsp; React &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-green-500">&apos;&nbsp; Next.js &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-green-500">&apos;&nbsp; Tailwind &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-green-500">&apos;&nbsp; GIT &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-green-500">&apos;&nbsp; MongoDB &nbsp;&apos;,&nbsp;&nbsp;</span>

 
              </span></div>
              <div><span></span><span className="ml-11 text-white flex-wrap">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-green-500">&apos;&nbsp; Django &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-green-500">&apos;&nbsp; JavaScript &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-green-500">&apos;&nbsp; C++ &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-green-500">&apos;&nbsp;Python &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-green-500">&apos;&nbsp; Framer Motion &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-green-500">&apos;&nbsp; JWT &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-green-500">&apos;&nbsp; Java &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-green-500">&apos;&nbsp; TypeScript &nbsp;&apos;,&nbsp;&nbsp;</span>

                
              </span></div>
              <div><span></span><span className="ml-11 text-white flex-wrap">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
                <span className="text-green-500">&apos;&nbsp; GTA V &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-green-500">&apos;&nbsp; Pubg &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-green-500">&apos;&nbsp; animation &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-green-500">&apos;&nbsp; animation &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-green-500">&apos;&nbsp; animation &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-green-500">&apos;&nbsp; animation &nbsp;&apos;,&nbsp;&nbsp;</span>
                <motion.div 
                  className="text-white inline-block"
                  initial={{opacity:0 }}
                  animate={{opacity:1}}
                  transition={{repeat:Infinity, duration:1, type:"just"}}
                  
                >
                    &nbsp; | </motion.div>
                <span className="text-white">&nbsp; ]</span>
              </span></div>

              <div><span>26</span><span className="ml-11 text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] </span> </div>
              <div><span>27</span><span className="ml-11 text-white">&nbsp;&nbsp;&nbsp;&nbsp;{"\u007D"} </span> </div>
              <div><span>27</span><span className="ml-11 text-white">{"\u007D"} </span> </div>
              
            </div>
        </div>
        
        </div>
      </div>
    </section>
  )
}
export default About
 */
