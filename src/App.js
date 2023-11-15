import React from "react";
import "./index.css";
import Home from "./routes/Home"
import Project from "./routes/Project"
import Contact from "./routes/Contact"
import Formation from "./routes/Formation"
import about from "./routes/About"
import { Routes } from "react-router-dom";

import { Route, routes } from "react-router-dom";
import About from "./routes/About";

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/formation" element={<Formation/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      



     </Routes>
     
    </>
  );
}

export default App;
