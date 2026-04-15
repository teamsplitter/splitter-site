import React from "react";

function CardGridSection({ heading, cards }) {
  return (
    <div className="section bg-light">
      <div className="container text-center">
        <h2 className="benefits-heading">{heading}</h2>
        <div className="benefits-grid">
          {cards &&
            cards.map((card, idx) => (
              <div
                key={idx}
                className={`benefit-card ${card.borderClass || "border-primary"}`}
              >
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CardGridSection;
