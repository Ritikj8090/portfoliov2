import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
 
const TiltComponent = ({text ,className}) => {
  return (
    <motion.div className={`${className} h-fit w-fit`} whileHover={{ scale: 1.2 }}>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000}>
        {text}
      </Tilt>
    </motion.div>
  );
};
export default TiltComponent;
