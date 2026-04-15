import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions/?*" element={<Solutions />} />
          <Route path="/about/?*" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
