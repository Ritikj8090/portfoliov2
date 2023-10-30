"use client"
import { useEffect, useState } from "react";

export const Digits = ({digit}) => {
  const date = new Date()
  const [second, setSecond] = useState(0)
  const [time, settime] = useState({
    minute: date.getSeconds(),
    hour: date.getHours(),
  })
  useEffect(() => {
    const sec = setInterval(() => {
      setSecond(date.getSeconds())
      settime({
        minute: date.getHours().toString(),
      })
    },[1000])
    return () => clearInterval(sec)
  },[second])
  time.minute[1] === undefined ? time.minute = "0" + time.minute : ""
  return (
    <>
      <div className="">
        <div className="flex gap-x-2 ">
          <span className={`${second === 1 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "2" || time.minute[0] === "3" || time.minute[0] === "4" || time.minute[0] === "5" || time.minute[0] === "6" || time.minute[0] === "7" || time.minute[0] === "8" || time.minute[0] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[0]}</span>
          <span className={`${second === 6 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "1" || time.minute[0] === "2" || time.minute[0] === "3" || time.minute[0] === "5" || time.minute[0] === "6" || time.minute[0] === "7" || time.minute[0] === "8" || time.minute[0] === "9"? "text-blue-500" : "deactivate1"} `}>{digit[5]}</span>
          <span className={`${second === 11 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "2" || time.minute[0] === "3" || time.minute[0] === "4" || time.minute[0] === "5" || time.minute[0] === "6" || time.minute[0] === "7" || time.minute[0] === "8" || time.minute[0] === "9"? "text-blue-500" : "deactivate1"} `}>{digit[10]}</span>
        </div>
        <div className="flex gap-x-2">
          <span className={`${second === 2 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "1" || time.minute[1] === "4" || time.minute[0] === "5" || time.minute[0] === "6" || time.minute[0] === "8" || time.minute[0] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[1]}</span>
          <span className={`${second === 7 ? "text-red-500" : time.minute[0] === "1" ? "text-blue-500" : "deactivate1"}`}>{digit[6]}</span>
          <span className={`${second === 12 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "2" || time.minute[0] === "3" || time.minute[0] === "4"  || time.minute[0] === "7" || time.minute[0] === "8" || time.minute[0] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[11]}</span>
        </div>
        <div className="flex gap-x-2">
          <span className={`${second === 3 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "2" || time.minute[0] === "3" || time.minute[0] === "4" || time.minute[0] === "5" || time.minute[0] === "6" || time.minute[0] === "8" || time.minute[0] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[2]}</span>
          <span className={`${second === 8 ? "text-red-500" : time.minute[0] === "1" || time.minute[0] === "2" || time.minute[0] === "3" || time.minute[0] === "4"  || time.minute[0] === "5" || time.minute[0] === "6" || time.minute[0] === "7" || time.minute[0] === "8" || time.minute[0] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[7]}</span>
          <span className={`${second === 13 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "2" || time.minute[0] === "3" || time.minute[0] === "4" || time.minute[0] === "5" || time.minute[0] === "6" || time.minute[0] === "8" || time.minute[0] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[12]}</span>
        </div>
        <div className="flex gap-x-2">
          <span className={`${second === 4 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "2" || time.minute[0] === "6" || time.minute[0] === "8" ? "text-blue-500" : "deactivate1"}`}>{digit[3]}</span>
          <span className={`${second === 9 ? "text-red-500" : time.minute[0] === "1" || time.minute[0] === "7" ? "text-blue-500" : "deactivate1"}`}>{digit[8]}</span>
          <span className={`${second === 14 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "8" || time.minute[0] === "3" || time.minute[0] === "4"  || time.minute[0] === "5" || time.minute[0] === "6" || time.minute[0] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[13]}</span>
        </div>
        <div className="flex gap-x-2">
          <span className={`${second === 5 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "2" || time.minute[0] === "3"  || time.minute[0] === "5" || time.minute[0] === "6" || time.minute[0] === "8" || time.minute[0] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[4]}</span>
          <span className={`${second === 10 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "1" || time.minute[0] === "2" || time.minute[0] === "3"  || time.minute[0] === "5" || time.minute[0] === "6"  || time.minute[0] === "7" || time.minute[0] === "8" || time.minute[0] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[9]}</span>
          <span className={`${second === 15 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "2" || time.minute[0] === "3" || time.minute[0] === "4"  || time.minute[0] === "5" || time.minute[0] === "6" || time.minute[0] === "8" || time.minute[0] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[14]}</span>
        </div>
      </div>
    </>
  );
};

export const Digits1 = ({digit}) => {
  const date = new Date()
  const [second, setSecond] = useState(0)
  const [time, settime] = useState({
    minute: date.getSeconds(),
    hour: date.getHours(),
  })
  useEffect(() => {
    const sec = setInterval(() => {
      setSecond(date.getSeconds())
      settime({
        minute: date.getHours().toString(),
      })
    },[1000])
    return () => clearInterval(sec)
  },[second])
  time.minute[1] === undefined ? time.minute = "0" + time.minute : ""
  return (
    <>
      <div className="">
        <div className="flex gap-x-2 ">
          <span className={`${second === 16 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "2" || time.minute[1] === "3" || time.minute[1] === "4" || time.minute[1] === "5" || time.minute[1] === "6" || time.minute[1] === "7" || time.minute[1] === "8" || time.minute[1] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[0]}</span>
          <span className={`${second === 21 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "1" || time.minute[1] === "2" || time.minute[1] === "3" || time.minute[1] === "5" || time.minute[1] === "6" || time.minute[1] === "7" || time.minute[1] === "8" || time.minute[1] === "9"? "text-blue-500" : "deactivate1"} `}>{digit[5]}</span>
          <span className={`${second === 26 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "2" || time.minute[1] === "3" || time.minute[1] === "4" || time.minute[1] === "5" || time.minute[1] === "6" || time.minute[1] === "7" || time.minute[1] === "8" || time.minute[1] === "9"? "text-blue-500" : "deactivate1"} `}>{digit[10]}</span>
        </div>
        <div className="flex gap-x-2">
          <span className={`${second === 17 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "1" || time.minute[1] === "4" || time.minute[1] === "5" || time.minute[1] === "6" || time.minute[1] === "8" || time.minute[1] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[1]}</span>
          <span className={`${second === 22 ? "text-red-500" : time.minute[1] === "1" ? "text-blue-500" : "deactivate1"}`}>{digit[6]}</span>
          <span className={`${second === 27 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "2" || time.minute[1] === "3" || time.minute[1] === "4"  || time.minute[1] === "7" || time.minute[1] === "8" || time.minute[1] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[11]}</span>
          <div className={`mx-5 h-3 w-3 ${second%2 === 0 ? "border-blue-600 bg-blue-600" : ""} `}></div>
        </div>
        <div className="flex gap-x-2">
          <span className={`${second === 18 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "2" || time.minute[1] === "3" || time.minute[1] === "4" || time.minute[1] === "5" || time.minute[1] === "6" || time.minute[1] === "8" || time.minute[1] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[2]}</span>
          <span className={`${second === 23 ? "text-red-500" : time.minute[1] === "1" || time.minute[1] === "2" || time.minute[1] === "3" || time.minute[1] === "4"  || time.minute[1] === "5" || time.minute[1] === "6" || time.minute[1] === "7" || time.minute[1] === "8" || time.minute[1] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[7]}</span>
          <span className={`${second === 28 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "2" || time.minute[1] === "3" || time.minute[1] === "4" || time.minute[1] === "5" || time.minute[1] === "6" || time.minute[1] === "8" || time.minute[1] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[12]}</span>
        </div>
        <div className="flex gap-x-2">
          <span className={`${second === 19 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "2" || time.minute[1] === "6" || time.minute[1] === "8" ? "text-blue-500" : "deactivate1"}`}>{digit[3]}</span>
          <span className={`${second === 24 ? "text-red-500" : time.minute[1] === "1" || time.minute[1] === "7" ? "text-blue-500" : "deactivate1"}`}>{digit[8]}</span>
          <span className={`${second === 29 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "8" || time.minute[1] === "3" || time.minute[1] === "4"  || time.minute[1] === "5" || time.minute[1] === "6" || time.minute[1] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[13]}</span>
          <div className={`mx-5 h-3 w-3 ${second%2 === 0 ? "border-blue-600 bg-blue-600" : ""} `}></div>
        </div>
        <div className="flex gap-x-2">
          <span className={`${second === 20 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "2" || time.minute[1] === "3"  || time.minute[1] === "5" || time.minute[1] === "6" || time.minute[1] === "8" || time.minute[1] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[4]}</span>
          <span className={`${second === 25 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "1" || time.minute[1] === "2" || time.minute[1] === "3"  || time.minute[1] === "5" || time.minute[1] === "6"  || time.minute[1] === "7" || time.minute[1] === "8" || time.minute[1] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[9]}</span>
          <span className={`${second === 30 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "2" || time.minute[1] === "3" || time.minute[1] === "4"  || time.minute[1] === "5" || time.minute[1] === "6" || time.minute[1] === "8" || time.minute[1] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[14]}</span>
          
        </div>
        
      </div>
    </>
  );
};

export const Digits3 = ({digit}) => {
  const date = new Date()
  const [second, setSecond] = useState(0)
  const [time, settime] = useState({
    minute: date.getSeconds(),
    hour: date.getHours(),
  })
  useEffect(() => {
    const sec = setInterval(() => {
      setSecond(date.getSeconds())
      settime({
        minute: date.getMinutes().toString(),
        
      })
    },[1000])
    return () => clearInterval(sec)
  },[second])
  time.minute[1] === undefined ? time.minute = "0" + time.minute : ""
  return (
    <>
      <div className="mx-5">
        <div className="flex gap-x-2 ">
          <span className={`${second === 31 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "2" || time.minute[0] === "3" || time.minute[0] === "4" || time.minute[0] === "5" || time.minute[0] === "6" || time.minute[0] === "7" || time.minute[0] === "8" || time.minute[0] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[0]}</span>
          <span className={`${second === 36 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "1" || time.minute[0] === "2" || time.minute[0] === "3" || time.minute[0] === "5" || time.minute[0] === "6" || time.minute[0] === "7" || time.minute[0] === "8" || time.minute[0] === "9"? "text-blue-500" : "deactivate1"} `}>{digit[5]}</span>
          <span className={`${second === 41 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "2" || time.minute[0] === "3" || time.minute[0] === "4" || time.minute[0] === "5" || time.minute[0] === "6" || time.minute[0] === "7" || time.minute[0] === "8" || time.minute[0] === "9"? "text-blue-500" : "deactivate1"} `}>{digit[10]}</span>
        </div>
        <div className="flex gap-x-2">
          <span className={`${second === 32 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "1" || time.minute[0] === "4" || time.minute[0] === "5" || time.minute[0] === "6" || time.minute[0] === "8" || time.minute[0] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[1]}</span>
          <span className={`${second === 37 ? "text-red-500" : time.minute[0] === "1" ? "text-blue-500" : "deactivate1"}`}>{digit[6]}</span>
          <span className={`${second === 42 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "2" || time.minute[0] === "3" || time.minute[0] === "4"  || time.minute[0] === "7" || time.minute[0] === "8" || time.minute[0] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[11]}</span>
        </div>
        <div className="flex gap-x-2">
          <span className={`${second === 33 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "2" || time.minute[0] === "3" || time.minute[0] === "4" || time.minute[0] === "5" || time.minute[0] === "6" || time.minute[0] === "8" || time.minute[0] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[2]}</span>
          <span className={`${second === 38 ? "text-red-500" : time.minute[0] === "1" || time.minute[0] === "2" || time.minute[0] === "3" || time.minute[0] === "4"  || time.minute[0] === "5" || time.minute[0] === "6" || time.minute[0] === "7" || time.minute[0] === "8" || time.minute[0] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[7]}</span>
          <span className={`${second === 43 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "2" || time.minute[0] === "3" || time.minute[0] === "4" || time.minute[0] === "5" || time.minute[0] === "6" || time.minute[0] === "8" || time.minute[0] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[12]}</span>
        </div>
        <div className="flex gap-x-2">
          <span className={`${second === 34 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "2" || time.minute[0] === "6" || time.minute[0] === "8" ? "text-blue-500" : "deactivate1"}`}>{digit[3]}</span>
          <span className={`${second === 39 ? "text-red-500" : time.minute[0] === "1" || time.minute[0] === "7" ? "text-blue-500" : "deactivate1"}`}>{digit[8]}</span>
          <span className={`${second === 44 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "8" || time.minute[0] === "3" || time.minute[0] === "4"  || time.minute[0] === "5" || time.minute[0] === "6" || time.minute[0] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[13]}</span>
        </div>
        <div className="flex gap-x-2">
          <span className={`${second === 35 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "2" || time.minute[0] === "3"  || time.minute[0] === "5" || time.minute[0] === "6" || time.minute[0] === "8" || time.minute[0] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[4]}</span>
          <span className={`${second === 40 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "1" || time.minute[0] === "2" || time.minute[0] === "3"  || time.minute[0] === "5" || time.minute[0] === "6"  || time.minute[0] === "7" || time.minute[0] === "8" || time.minute[0] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[9]}</span>
          <span className={`${second === 45 ? "text-red-500" : time.minute[0] === "0" || time.minute[0] === "2" || time.minute[0] === "3" || time.minute[0] === "4"  || time.minute[0] === "5" || time.minute[0] === "6" || time.minute[0] === "8" || time.minute[0] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[14]}</span>
        </div>
      </div>
    </>
  );
};

export const Digits4 = ({digit}) => {
  const date = new Date()
  const [second, setSecond] = useState(0)
  const [time, settime] = useState({
    minute: date.getSeconds(),
    hour: date.getHours(),
  })
  useEffect(() => {
    const sec = setInterval(() => {
      setSecond(date.getSeconds())
      settime({
        minute: date.getMinutes().toString(),
      })
    },[1000])
    return () => clearInterval(sec)
  },[second])
  time.minute[1] === undefined ? time.minute = "0" + time.minute : ""
  return (
    <>
      <div className="">
        <div className="flex gap-x-2 ">
          <span className={`${second === 46 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "2" || time.minute[1] === "3" || time.minute[1] === "4" || time.minute[1] === "5" || time.minute[1] === "6" || time.minute[1] === "7" || time.minute[1] === "8" || time.minute[1] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[0]}</span>
          <span className={`${second === 51 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "1" || time.minute[1] === "2" || time.minute[1] === "3" || time.minute[1] === "5" || time.minute[1] === "6" || time.minute[1] === "7" || time.minute[1] === "8" || time.minute[1] === "9"? "text-blue-500" : "deactivate1"} `}>{digit[5]}</span>
          <span className={`${second === 56 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "2" || time.minute[1] === "3" || time.minute[1] === "4" || time.minute[1] === "5" || time.minute[1] === "6" || time.minute[1] === "7" || time.minute[1] === "8" || time.minute[1] === "9"? "text-blue-500" : "deactivate1"} `}>{digit[10]}</span>
        </div>
        <div className="flex gap-x-2">
          <span className={`${second === 47 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "1" || time.minute[1] === "4" || time.minute[1] === "5" || time.minute[1] === "6" || time.minute[1] === "8" || time.minute[1] === "9" ? "text-blue-500" : "deactivate11"} `}>{digit[1]}</span>
          <span className={`${second === 52 ? "text-red-500" : time.minute[1] === "1" ? "text-blue-500" : "deactivate11"}`}>{digit[6]}</span>
          <span className={`${second === 57 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "2" || time.minute[1] === "3" || time.minute[1] === "4"  || time.minute[1] === "7" || time.minute[1] === "8" || time.minute[1] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[11]}</span>
        </div>
        <div className="flex gap-x-2">
          <span className={`${second === 48 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "2" || time.minute[1] === "3" || time.minute[1] === "4" || time.minute[1] === "5" || time.minute[1] === "6" || time.minute[1] === "8" || time.minute[1] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[2]}</span>
          <span className={`${second === 53 ? "text-red-500" : time.minute[1] === "1" || time.minute[1] === "2" || time.minute[1] === "3" || time.minute[1] === "4"  || time.minute[1] === "5" || time.minute[1] === "6" || time.minute[1] === "7" || time.minute[1] === "8" || time.minute[1] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[7]}</span>
          <span className={`${second === 58 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "2" || time.minute[1] === "3" || time.minute[1] === "4" || time.minute[1] === "5" || time.minute[1] === "6" || time.minute[1] === "8" || time.minute[1] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[12]}</span>
        </div>
        <div className="flex gap-x-2">
          <span className={`${second === 49 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "2" || time.minute[1] === "6" || time.minute[1] === "8" ? "text-blue-500" : "deactivate1"}`}>{digit[3]}</span>
          <span className={`${second === 54 ? "text-red-500" : time.minute[1] === "1" || time.minute[1] === "7" ? "text-blue-500" : "deactivate1"}`}>{digit[8]}</span>
          <span className={`${second === 59 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "8" || time.minute[1] === "3" || time.minute[1] === "4"  || time.minute[1] === "5" || time.minute[1] === "6" || time.minute[1] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[13]}</span>
        </div>
        <div className="flex gap-x-2">
          <span className={`${second === 50 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "2" || time.minute[1] === "3"  || time.minute[1] === "5" || time.minute[1] === "6" || time.minute[1] === "8" || time.minute[1] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[4]}</span>
          <span className={`${second === 55 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "1" || time.minute[1] === "2" || time.minute[1] === "3"  || time.minute[1] === "5" || time.minute[1] === "6"  || time.minute[1] === "7" || time.minute[1] === "8" || time.minute[1] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[9]}</span>
          <span className={`${second === 60 ? "text-red-500" : time.minute[1] === "0" || time.minute[1] === "2" || time.minute[1] === "3" || time.minute[1] === "4"  || time.minute[1] === "5" || time.minute[1] === "6" || time.minute[1] === "8" || time.minute[1] === "9" ? "text-blue-500" : "deactivate1"} `}>{digit[14]}</span>
        </div>
      </div>
    </>
  );
};

