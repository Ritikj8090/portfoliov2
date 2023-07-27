import Image from "next/image";
import close from "../../public/svg/close.svg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ThankYou from "./ThankYou";

const Touch = ({ className, setClassName, border }) => {
  const [classNameThank, setClassNameThank] = useState("invisible");
  const [color, setcolor] = useState("white")
  const [formData, setFormData] = useState({
    name: "Ghost",
    email: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const thank = () => {
    formData.email === ""
      ? (setcolor("#ff0000"))
      :  (
          setClassNameThank("visible"),
          setClassName("invisible"),
          setcolor("white")
      )
        
  };

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
          Get in touch!
        </div>
        <div className="flex justify-center items-center cursor-none">
          <div className=" border-[1px] border-[#4b4646] w-40 h-0"></div>
        </div>

        <div className="w-full flex my-28 text-xl font-mono">
          Hi, my name is
          <div
            className="input-container"
            onMouseEnter={() => {
              border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
            onMouseLeave={() => {
              border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
          >
            <input type="text" name="name" onChange={handleChange} required className="border-white border-b-2 " />
            <label className="mx-4">Your Name</label>
          </div>
          and my email is
          <div
            className="input-container"
            onMouseEnter={() => {
              border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
            onMouseLeave={() => {
              border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
          >
            <input type="text" name="email" onChange={handleChange} required className={`border-[${color}] border-b-2`} />
            <label className="mx-4">Your Email</label>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 gap-5">
          <div className="deactivate ">STEP 1/1</div>
          <motion.button
            onMouseEnter={() => {
              border.style = `width:50px; height:50px; border: 3px solid; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
            onMouseLeave={() => {
              border.style = `width:25px; height:25px; transition: ease-in-out .2s; mix-blend-mode: difference;`;
            }}
            whileHover={{ scale: 1.2 }}
            className="btn shadow rounded-3xl w-[150px] h-[50px] font-mono font-semibold px-2 py-2  text-xl cursor-none "
            onClick={thank}
          >
            SUBMIT&#8594;
          </motion.button>
          <div className="">
            <ThankYou
              className={classNameThank}
              setClassName={setClassNameThank}
              border={border}
              formData={formData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Touch;
