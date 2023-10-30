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
    route.push("http://portfolio-v2-production-3920.up.railway.app");
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
