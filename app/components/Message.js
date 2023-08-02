import Image from "next/image";
import smile from "../../public/svg/smile.svg";
import { motion } from "framer-motion";
import Feedback from "./Feedback";
import { useState } from "react";
import close from "../../public/svg/close.svg";

const Message = ({ className, setClassName, border, formData }) => {
  const [FeedBack, setFeedBack] = useState("invisible")
  const [color, setcolor] = useState("white")
  const [message, setMessage] = useState("")
  
  return (
    <div
      className={`cursor-none justify-center items-center flex  ${className} h-screen w-full top-0 right-0 left-0 bottom-0 fixed bg-[#0f0d15]`}
    >
      <div>
        <div
          className="top-5 right-5 absolute "
          onClick={() => setClassName("invisible")}
          onMouseEnter={() => {
            border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
          }}
          onMouseLeave={() => {
            border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
          }}
        >
          <Image src={close} alt="close" />
        </div>
        <div className="flex justify-center items-center text-3xl font-bold">
          Your Message!
        </div>
        <div className="flex justify-center items-center cursor-none">
          <div className=" border-[1px] border-[#4b4646] w-40 h-0"></div>
        </div>
        <div className="w-full flex my-28 text-xl font-mono">
        
          <div
            className="input-container"
            onMouseEnter={() => {
              border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
            onMouseLeave={() => {
              border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
          >
            <input type="text" name="name"  required className="border-white border-b-2 " />
            <label className="mx-4">Message</label>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 gap-5">
          <div className="deactivate ">STEP 2/2</div>
          <motion.button
            onMouseEnter={() => {
              border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
            onMouseLeave={() => {
              border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
            whileHover={{ scale: 1.2 }}
            className="btn shadow rounded-3xl w-[150px] h-[50px] font-mono font-semibold px-2 py-2  text-xl cursor-none "
            
          >
            SUBMIT&#8594;
          </motion.button>
          
        </div>
      </div>
    </div>
  );
};
export default Message;
