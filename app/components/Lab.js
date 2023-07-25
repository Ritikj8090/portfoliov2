"use client";
import { motion } from "framer-motion";

const Lab = () => {
  return (
    <section id="lab" className=" w-full h-full overflow-hidden">
      <div className="relative p-5">
        <div className=" xl:mx-auto ml-10 w-[1200px]">
          <div className="circle w-[11px] h-[11px] border-[#5918df] border-[2px] solid rounded-full -m-[5px] -my-[9px]"></div>

          <div className="ml-7">
            <motion.div
              className="deactivate text-xl font-mono mb-5"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              Lab/&gt;
            </motion.div>
          </div>
          <div className="ml-7">
            coming soon...
          </div>
        </div>
        
      </div>
    </section>
  );
};
export default Lab;

/*
<section id="lab" className="w-full h-[1100px] bg-[#181527] p-5 flex">
      <div className="h-full w-full flex">
        <div className="circle w-[11px] h-[11px]  border-[2px] rounded-full -m-[5px] -my-[9px]"></div>
        <div className="mx-7">
        <motion.div
              className="deactivate text-xl font-mono mb-5"
              initial={{ y: -100, opacity:0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              Lab/&gt;
            </motion.div>
        </div>
        </div>
    </section>
*/
