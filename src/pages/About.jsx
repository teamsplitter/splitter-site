import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About Us • Splitter";
  }, []);

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Blank for now, ready for Astro templates */}
      <h1>About Us (Placeholder)</h1>
    </div>
  );
}

export default About;
