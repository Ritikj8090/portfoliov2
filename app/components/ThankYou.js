import Image from "next/image";
import smile from "../../public/svg/smile.svg";
import { motion } from "framer-motion";
import Feedback from "./Feedback";
import { useState } from "react";

const ThankYou = ({ className, setClassName, border, formData }) => {
  const [FeedBack, setFeedBack] = useState("invisible")
  return (
    <div
      className={`cursor-none justify-center items-center flex  ${className} h-screen w-full top-0 right-0 left-0 bottom-0 fixed bg-[#0f0d15]`}
    >
      <div>

        <div>
          <div className="justify-center items-center flex text-3xl font-bold font-serif">
            Hey, {formData.name}{" "}
            <Image className="h-10 w-10" src={smile} alt="smile" />
          </div>{" "}
          <br />
          <div className="text-xl font-mono">
            I wanted to take a moment to express my appreciation for your
            message. <br />
            It{"'"}s great to hear from you! Your thoughtful outreach means a lot to
            me, <br />
            and I{"'"}m glad we connected. Looking forward to more conversations and{" "}
            <br />
            catching up soon. Thanks again for reaching out! <br />
          </div>
          <div className="mt-10 text-xl font-mono font-bold">
            Best regards,
            <br />
            Ritik Jaiswal
          </div>
        </div>
        <div className="flex items-center justify-center">
        <motion.button
            onMouseEnter={() => {
              border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
            onMouseLeave={() => {
              border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
            whileHover={{ scale: 1.2 }}
            className="btn shadow rounded-3xl w-[150px] h-[50px] font-mono font-semibold px-2 py-2  text-xl cursor-none "
            onClick={() => setClassName("invisible")}
            
          >
            CLOSE&#8594;
          </motion.button>
        </div>
      </div>
    </div>
  );
};
export default ThankYou;
