"use client"
import React from 'react'
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import TiltComponent from "./TiltComponent";
 
const Resume = ({ dot, border }) => {
  return (
    <section id="resume" className={`h-full overflow-hidden bg-[#181527]`}>
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
              className="btn shadow my-10 rounded-3xl w-[200px] h-[50px] font-mono font-semibold px-2 py-2  text-xl cursor-none "
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
  )
}

export default Resume