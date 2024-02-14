import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skill from "./components/SkillSection";
import VideoComponent from "./components/Videocomponent";
import Contact_from from "./components/Contact_from";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <VideoComponent />
      <Contact_from/>
    </div>
  );
}
export default App;





