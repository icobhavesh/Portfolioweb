import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skill from "./components/SkillSection";
import VideoComponent from "./components/Videocomponent";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <VideoComponent />
      <Contact />
    </div>
  );
}
export default App;





