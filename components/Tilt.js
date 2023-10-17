import Image from "next/image";
import { Tilt } from "react-tilt";
 
export const TiltComponent_f = (props) => {
  return (
    <>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000}>
        <div className={`relative h-[220px] w-[500px]`}>
          <Image
            src={props.image}
            alt="img"
            className="absolute h-full w-full "
          />
          <div className="absolute h-full w-full gradient">
            <div className="h-full w-full pt-32 -ml-10 absolute">
              <div className="font-mono font-bold text-2xl">{props.name}</div>
              <div className="border-2 w-32 my-3"></div>
              <div>&nbsp;&nbsp;0{props.number}</div>
            </div>
          </div>
        </div>
      </Tilt>
    </>
  );
};

export const TiltComponent_m = (props) => {
  return (
    <>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000}>
        <div className={` h-[270px] w-[460px]`}>
          <Image
            src={props.image}
            alt="img"
            className="absolute h-full w-full flex"
          />
          <div className="absolute h-full w-auto gradient">
            <div className="h-full w-full pt-32 -ml-10 absolute">
              <div className="font-mono font-bold text-2xl">{props.name}</div>
              <div className="border-2 w-32 my-3"></div>
              <div>&nbsp;&nbsp;0{props.number}</div>
            </div>
          </div>
        </div>
      </Tilt>
    </>
  );
};

export const TiltComponent_s = (props) => {
  return (
    <>
      <Tilt tiltMaxAngleX={25} tiltMaxAngleY={25} perspective={1000}>
        <div className={`relative h-[420px] w-[290px]`}>
          <Image
            src={props.image}
            alt="img"
            className="absolute h-full w-full "
          />
          <div className="absolute h-full w-full gradient">
            <div className="h-full w-full pt-72 -ml-10 absolute ">
              <div className="font-mono font-bold text-2xl">{props.name}</div>
              <div className="border-2 w-32 my-3"></div>
              <div>&nbsp;&nbsp;0{props.number}</div>
            </div>
          </div>
        </div>
      </Tilt>
    </>
  );
};
