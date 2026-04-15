import React from "react";

function TextAndImageSection({
  heading,
  paragraphs,
  linkUrl,
  linkText,
  imgSrc,
  imgAlt,
}) {
  return (
    <div className="section">
      <div className="container">
        <div className="feature-grid">
          <div>
            <h2 className="feature-heading">{heading}</h2>
            {paragraphs &&
              paragraphs.map((text, idx) => <p key={idx}>{text}</p>)}
            {linkUrl && linkText && (
              <a href={linkUrl} className="feature-link">
                {linkText}
              </a>
            )}
          </div>
          <div className="feature-image-wrapper">
            <img src={imgSrc} alt={imgAlt} className="feature-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextAndImageSection;
