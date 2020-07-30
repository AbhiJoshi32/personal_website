import React from "react"

import Header from "./Components/Header"
import AboutMe from "./Components/AboutMe"
import Skill from "./Components/Skill"
import Project from "./Components/Project"

import ContactUs from "./Components/ContactUs"
import "./App.css"

function App() {
  return (
    <div>
      <Header />
      <div id="aboutmeSection">
        <AboutMe />
      </div>
      <div id="skillSection">
        <Skill />
      </div>
      <div id="projSection">
        <Project />
      </div>
      <div id="contactSection">
        <ContactUs />
      </div>
    </div>
  )
}

export default App
