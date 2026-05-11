import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Formation from "./routes/Formation";
import { Route, Routes } from "react-router-dom";
import Competences from "./routes/Competences";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formation" element={<Formation/>} />
        <Route path="/competences" element={<Competences/>} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
