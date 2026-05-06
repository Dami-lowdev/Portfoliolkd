import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCradData from "./WorkCradData";

import React, { useState } from "react";

const categories = ["Tous", "Academique", "Forensics", "DevSecOps", "Pentest"];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered =
    activeFilter === "Tous"
      ? WorkCradData
      : WorkCradData.filter((p) => p.category === activeFilter);

  return (
    <div className="work-container">
      <h1 className="project-heading">Projets</h1>

      <div className="filter-btns">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? "filter-btn-active" : ""}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-container">
        {filtered.map((val, ind) => (
          <WorkCard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            source={val.source}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
