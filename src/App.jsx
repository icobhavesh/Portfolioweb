import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import { HoverEffect } from "./components/Projects";
import TextAnimation from "./Textanimation";
import Skilllearn from "./components/Skilllearn";
// import HeroSection from "./components/HeroSection";


function App() {
  return (
    <div>
      {/* <TextAnimation /> */}
      <Navbar />
      <Home />
      <About />
      <Skilllearn/>
      {/* <Skills /> */}
      {/* <HoverEffect /> */}

      <Works />
      <Contact />
    </div>
  );
}
export default App;





