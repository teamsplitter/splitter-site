import React from "react";

function SolutionRow({ title, imageSrc, imageAlt, children }) {
  return (
    <div className="solution-row">
      <div className="text-col">
        <h2 className="solution-title">{title}</h2>
        {children}
      </div>
      <div className="img-col">
        <img src={imageSrc} alt={imageAlt || title} className="solution-img" />
      </div>
    </div>
  );
}

export default SolutionRow;
