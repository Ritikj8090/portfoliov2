import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Lab from "./components/Lab";
import NavBar from "./components/NavBar";
import Work from "./components/Work";

export default function home() {
  return (
    <>
      <NavBar />
      <Home />
      <Work />
      <Lab />
      <About />
      <Contact />
    </>
  );
}
