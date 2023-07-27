import { motion } from "framer-motion";
import Image from "next/image";


const Feedback = ({FeedBack, setFeedBack, border}) => {
  return (
    
    <div
      className={`cursor-none justify-center items-center flex  ${FeedBack} h-screen w-full top-0 right-0 left-0 bottom-0 fixed bg-[#0f0d15]`}
    >
      <div>

        <div>
          
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
            onClick={() => setFeedBack("invisible")}
            
          >
            SUBMIT&#8594;
          </motion.button>
        </div>
      </div>
    </div>
  )
}
export default Feedback