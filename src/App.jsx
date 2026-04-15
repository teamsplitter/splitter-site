import React from "react";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TextAndImageSection from "./components/TextAndImageSection";
import CardGridSection from "./components/CardGridSection";
import Footer from "./components/Footer";

function App() {
  const homeHeroSlides = [
    "/images/hero-1.jpg",
    "/images/hero-2.jpg",
    "/images/hero-3.jpg",
  ];

  const homeFeatureParagraphs = [
    "We're designing robust stack management technology that provides a real-time virtual representation of physical electrolysis stacks. By integrating data from sensors with custom ML models, we provide effective predictive maintenance and operational optimization at scale.",
    "We bridge the gap between theoretical design and real-world performance, ensuring that industrial partners can maximize the value of their assets.",
  ];

  const homeBenefits = [
    {
      title: "Innovation",
      description:
        "Leveraging the latest in computational management and machine learning.",
      borderClass: "border-warning",
    },
    {
      title: "Reliability",
      description:
        "Robust models tested against rigorous industrial standards.",
      borderClass: "border-primary",
    },
    {
      title: "Efficiency",
      description:
        "Optimizing energy consumption for greener hydrogen production.",
      borderClass: "border-warning",
    },
  ];

  return (
    <>
      <Header />
      <Hero
        slides={homeHeroSlides}
        title="Digital Twins for Electrolysis Stacks"
        text="Team Splitter creates advanced simulation and modeling solutions to optimize hydrogen production efficiency and longevity."
        primaryAction={{ text: "View Our Solutions", link: "/solutions/" }}
        secondaryAction={{ text: "About The Team", link: "/about/" }}
      />
      <TextAndImageSection
        heading="Precision Engineering"
        paragraphs={homeFeatureParagraphs}
        linkUrl="/solutions/"
        linkText="Learn more about our technology &rarr;"
        imgSrc="/images/software.png"
        imgAlt="System Management Visualization"
      />
      <CardGridSection heading="Why Partner With Us?" cards={homeBenefits} />
      <Footer />
    </>
  );
}

export default App;
