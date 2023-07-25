'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react";


const About = () => {

  const date = new Date();
  const [time, settime] = useState({
    day: Math.abs(date.getDate() - 18 ),
    month: Math.abs(date.getMonth() - 8 + 13),
    year: Math.abs(date.getFullYear() - 2000 - 1),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),

  })

  useEffect(() => {
    settime({
      second: date.getSeconds(),
      minute: date.getMinutes(),
      hour: date.getHours(),
      day: date.getDate(),
      month: date.getMonth(),
      year: time.year,
    })
  },[date])
  
  return (
    
    <section
      id="about"
      className="h-full bg-[#181527] overflow-hidden"
    >
      <div id="wor" className=" p-5">
        <div className="xl:mx-auto ml-10 w-[1200px]">
          <div className="circle w-[11px] h-[11px] border-[#5918df] border-[2px] solid rounded-full -m-[5px] -my-[9px]"></div>

          <div className="ml-7">
            <motion.div
              className="deactivate text-xl font-mono mb-5"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              About/&gt;
            </motion.div>
          </div>
          <div className="-ml-10 deactivate">
          <div><span>01</span><span className="ml-11 text-blue-600">class</span> <span className="text-yellow-400">RiTik Jaiswal</span></div>
          <div><span>02</span><span className="ml-11">&nbsp;&nbsp;&nbsp;&nbsp;// I can, because I did.</span></div>
              <div className="inline-flex"><span>03</span><span className="ml-11">&nbsp;&nbsp;&nbsp;&nbsp;// My vast variety of skills is continuously expanding.</span></div>
              <div><span>04</span><span className="ml-11 text-blue-600">&nbsp;&nbsp;&nbsp;&nbsp;constructor <span className="text-white">() {"\u007B"}</span> </span></div>
              <div><span>05</span><span className="ml-11 text-red-600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this<span className="text-white">.</span></span><span className="text-[#24e33a]">name <span className="text-red-500">= <span className="text-[#24e33a]">&apos;RiTik Jaiswal&apos;</span></span></span></div>
              <div><span>06</span><span className="ml-11 text-red-600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this<span className="text-white">.</span></span><span className="text-[#24e33a]">Day_Of_Birth_TimeStamp <span className="text-red-500">= <span className="text-yellow-600">{time.year}Y&nbsp;:&nbsp;{time.month}M&nbsp;:&nbsp;{time.day}D&nbsp;:&nbsp;{time.hour}H&nbsp;:&nbsp;{time.minute}M&nbsp;:&nbsp;{time.second}S</span></span></span></div>
              <div><span>07</span><span className="ml-11 text-red-600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this<span className="text-white">.</span></span><span className="text-[#24e33a]">email <span className="text-red-500">= <span className="text-[#24e33a]">&apos;Ritikj713@gmail.com&apos;</span></span></span></div>
              <div><span>08</span><span className="ml-11 text-white">&nbsp;&nbsp;&nbsp;&nbsp;{"\u007D"}</span></div>
              <div><span>09</span><span className="ml-11 text-yellow-400">&nbsp;&nbsp;&nbsp;&nbsp;Educaion</span> <span className="text-white">() {"\u007B"}</span></div>
              <div><span>10</span><span className="ml-11 text-blue-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &nbsp;</span> <span className="text-white">[</span></div>
              <div><span>11</span><span className="ml-11 text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\u007B"} &nbsp; <span className="text-[#24e33a]">&apos; 2020 - 2024 &apos;</span> &nbsp; : <span className="text-[#24e33a]"> &nbsp; &apos; Inderprastha Engineering College - Bachelor Degree in Computer Science  &apos;</span> &nbsp; {"\u007D"}, </span></div>
              <div><span>12</span><span className="ml-11 text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\u007B"} &nbsp; <span className="text-[#24e33a]">&apos; 2018 - 2019 &apos;</span> &nbsp; : <span className="text-[#24e33a]"> &nbsp; &apos; St Xaiver&apos;s School Salempur Uttar Pardesh &apos;</span> &nbsp; {"\u007D"}, </span></div>
              <div><span>13</span><span className="ml-11 text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"\u007B"} &nbsp; <span className="text-[#24e33a]">&apos; 2016 - 2017 &apos;</span> &nbsp; : <span className="text-[#24e33a]"> &nbsp; &apos; St Xaiver&apos;s School Salempur Uttar Pardesh &apos;</span> &nbsp; {"\u007D"}, </span></div>
              <div><span>14</span><span className="ml-11 text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] </span> </div>
              <div><span>15</span><span className="ml-11 text-white">&nbsp;&nbsp;&nbsp;&nbsp;{"\u007D"} </span> </div>
              <div><span>16</span><span className="ml-11 text-yellow-400">&nbsp;&nbsp;&nbsp;&nbsp;Skills</span> <span className="text-white">() {"\u007B"}</span></div>
              <div><span>17</span><span className="ml-11 text-blue-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &nbsp;</span> <span className="text-white">[</span></div>
              <div><span>18</span><span className="ml-11 text-white flex-wrap">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-[#24e33a]">&apos;&nbsp; HTML &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-[#24e33a]">&apos;&nbsp; CSS &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-[#24e33a]">&apos;&nbsp; Node.js &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-[#24e33a]">&apos;&nbsp; React &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-[#24e33a]">&apos;&nbsp; Next.js &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-[#24e33a]">&apos;&nbsp; Tailwind &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-[#24e33a]">&apos;&nbsp; GIT &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-[#24e33a]">&apos;&nbsp; MongoDB &nbsp;&apos;,&nbsp;&nbsp;</span>

 
              </span></div>
              <div><span></span><span className="ml-11 text-white flex-wrap">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="text-[#24e33a]">&apos;&nbsp; Django &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-[#24e33a]">&apos;&nbsp; JavaScript &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-[#24e33a]">&apos;&nbsp; C++ &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-[#24e33a]">&apos;&nbsp;Python &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-[#24e33a]">&apos;&nbsp; Framer Motion &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-[#24e33a]">&apos;&nbsp; JWT &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-[#24e33a]">&apos;&nbsp; Java &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-[#24e33a]">&apos;&nbsp; TypeScript &nbsp;&apos;,&nbsp;&nbsp;</span>

                
              </span></div>
              <div><span></span><span className="ml-11 text-white flex-wrap">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
                <span className="text-[#24e33a]">&apos;&nbsp; GTA V &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-[#24e33a]">&apos;&nbsp; Pubg &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-[#24e33a]">&apos;&nbsp; animation &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-[#24e33a]">&apos;&nbsp; animation &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-[#24e33a]">&apos;&nbsp; animation &nbsp;&apos;,&nbsp;&nbsp;</span>
                <span className="text-[#24e33a]">&apos;&nbsp; animation &nbsp;&apos;,&nbsp;&nbsp;</span>
                <motion.div 
                  className="text-white inline-block"
                  initial={{opacity:0 }}
                  animate={{opacity:1}}
                  transition={{repeat:Infinity, duration:1, type:"just"}}
                  
                >
                    &nbsp; | </motion.div>
                <span className="text-white">&nbsp; ]</span>
              </span></div>

              <div><span>19</span><span className="ml-11 text-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] </span> </div>
              <div><span>20</span><span className="ml-11 text-white">&nbsp;&nbsp;&nbsp;&nbsp;{"\u007D"} </span> </div>
              <div><span>21</span><span className="ml-11 text-white">{"\u007D"} </span> </div>
              
          </div>
        </div>
        
      </div>
    </section>
  )
}
export default About


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