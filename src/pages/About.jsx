import React, { useEffect } from "react";
import TeamMember from "../components/TeamMember";
import "./About.css";

function About() {
  useEffect(() => {
    document.title = "About Us • Splitter";
  }, []);

  const teamMembers = [
    {
      name: "Alexandru Udrea",
      role: "Mechanical Engineer",
      linkedinUrl: "https://www.linkedin.com/in/alexandru-udrea-933756272/",
      imageSrc: "/images/team/member-1.jpg",
    },
    {
      name: "Charlie Johnston",
      role: "Software Developer",
      linkedinUrl: "https://www.linkedin.com/in/charliej2005/",
      imageSrc: "/images/team/member-2.jpg",
    },
    {
      name: "Dimitar Vasilev",
      role: "Software Developer",
      linkedinUrl: "https://www.linkedin.com/in/dimitar-vasilev-846846275/",
      imageSrc: "/images/team/member-3.jpg",
    },
    {
      name: "Thomas Christmas",
      role: "Software Developer",
      linkedinUrl: "https://www.linkedin.com/in/thomas-christmas-553a90285/",
      imageSrc: "/images/team/member-4.jpg",
    },
    {
      name: "Trisztan Horvath",
      role: "Chemical Engineer",
      linkedinUrl: "https://www.linkedin.com/in/trisztan-horvath-a66216247/",
      imageSrc: "/images/team/member-5.jpg",
    },
  ];

  return (
    <>
      <div className="about-header">
        <div className="container">
          <h1>About Team Splitter</h1>
          <p className="about-subtitle">
            We are a dedicated team of engineering students focused on the
            future of sustainable energy through advanced modeling of
            electrolysis stacks.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <h2 className="team-section-title">Meet the Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                linkedinUrl={member.linkedinUrl}
                imageSrc={member.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="section bg-light">
        <div className="container">
          <div className="mission-grid">
            <div>
              <h2 className="mission-title">Our Mission</h2>
              <p>
                The world runs on hydrogen, and several major industries
                spanning from agriculture to metallurgy depend almost entirely
                on a steady supply of it. The issue is, the majority of global
                hydrogen production stems from fossil fuels, creating carbon
                emissions and harming the environment. Electrolysis serves as a
                promising alternative, generating hydrogen from water, but it
                relies on complex systems that degrade unpredictably and are
                difficult to monitor in real time.
              </p>
              <p>
                Splitter tackles this issue by developing an advanced monitoring
                system that provides real-time insights into electrolyser
                performance, accelerating the adoption and increasing the
                efficiency of electrolysis for green hydrogen production. By
                constructing a system that facilitates transparency and ease of
                operation, we hope to refine the electrolysis process and shape
                the future of sustainable hydrogen production.
              </p>
              <p>
                We believe that digital transformation is key to this goal. By
                creating high-fidelity machine learning models, we empower
                operators to see inside their systems, predict failures before
                they happen, and run their plants at peak performance.
              </p>
            </div>

            <div id="contact" className="contact-card">
              <h3>Contact Us</h3>
              <p>
                <strong>Email:</strong>
                <br />
                <a href="mailto:contact@splitter.cc">contact@splitter.cc</a>
              </p>
              <p>
                <strong>Location:</strong>
                <br />
                Eindhoven University of Technology
              </p>

              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d79586.37996507576!2d5.47417!3d51.43842800000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d8e08bdd34c1%3A0xc4a671b15dfb8dff!2sEindhoven%20University%20of%20Technology!5e0!3m2!1sen!2sus!4v1765295855416!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
