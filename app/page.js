'use client'
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Lab from "./components/Lab";
import NavBar from "./components/NavBar";
import Work from "./components/Work";

export default function home() {

  const dot = document.querySelector(".cursor-point")
  const border = document.querySelector(".cursor-border")

  window.addEventListener("mousemove", function (e) {

    const posX = e.clientX;
    const posY = e.clientY;

    dot.style.left = `${posX}px`
    dot.style.top = `${posY}px`

    border.style.left = `${posX}px`
    border.style.top = `${posY}px`

    border.animate({
      left: `${posX}px`,
      top: `${posY}px`
    }, { duration: 500, fill: "forwards"})
  })
  return (
    <>
      
      <NavBar />
      <div className="cursor-border"></div>
      <div className="cursor-point"></div>
      <Home />
      <Work />
      <Lab />
      <About />
      <Contact />
    </>
  );
}
