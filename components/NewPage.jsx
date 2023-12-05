"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const NewPage = () => {
  const [first, setfirst] = useState(false);
  const route = useRouter();

  setTimeout(() => {
    setfirst(true)
  }, 5000);
  setTimeout(() => {
    route.push("https://portfolio-v2-mi4h.vercel.app/");
  }, 8000);
  return (
    <>
      {first && (
        <div className="h-screen w-full absolute bg-gray-800 opacity-80 z-[100] flex items-center justify-center ease-linear duration-1000 font-mono text-2xl">
          This Web Page is Old.. <br />
          Your will redirected to New Page. Soon...
        </div>
      )}
    </>
  );
};

export default NewPage;
