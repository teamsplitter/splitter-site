import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Solutions.css";
import SolutionRow from "../components/SolutionRow";

function Solutions() {
  useEffect(() => {
    document.title = "Solutions • Splitter";
  }, []);

  return (
    <>
      <div className="solutions-header">
        <div className="container">
          <h1>Our Solutions</h1>
          <p className="solutions-subtitle">
            Advanced ML models and predictive analytics built for the hydrogen
            industry.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <SolutionRow
            title="Electrolysis Stack Modeling"
            imageSrc="/images/hero-1.jpg"
            imageAlt="Stack Modeling Visualization"
          >
            <p>
              We're focused on developing high-precision machine learning models
              to analyze the electrochemical, thermal, and fluid dynamic
              behaviors of electrolysis stacks. This enables:
            </p>
            <ul className="solution-list">
              <li>
                <strong>Thermal Management:</strong> Predicting hotspots and
                optimizing cooling strategies.
              </li>
              <li>
                <strong>Performance Analysis:</strong> Understanding
                voltage-current characteristics under varying loads.
              </li>
              <li>
                <strong>Degradation Tracking:</strong> Monitoring the health of
                membranes and electrodes over time.
              </li>
            </ul>
          </SolutionRow>

          <SolutionRow
            title="Predictive Maintenance"
            imageSrc="/images/hero-2.jpg"
            imageAlt="Maintenance Dashboard"
          >
            <p>
              By processing real-time sensor data through our anomaly-detection
              models, we can identify patterns that indicate early-stage faults.
              This approach to predictive maintenance helps in reducing downtime
              and extending the lifespan of expensive stack components.
            </p>
          </SolutionRow>

          <SolutionRow
            title="Operational Optimization"
            imageSrc="/images/hero-3.jpg"
            imageAlt="Optimization Graph"
          >
            <p>
              Our machine learning models are designed to identify optimal
              operating parameters to balance hydrogen production efficiency
              with energy consumption, providing insights that could minimize
              standard OPEX while meeting output expectations.
            </p>
          </SolutionRow>

          <div className="cta-block">
            <h2>Interested in Splitter?</h2>
            <p>
              Connect with our team to learn more about our modeling approach
              and explore collaboration opportunities.
            </p>
            <Link to="/about" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Solutions;
