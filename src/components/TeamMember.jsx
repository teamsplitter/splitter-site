import React from "react";

function TeamMember({ name, role, linkedinUrl, imageSrc }) {
  return (
    <div className="team-member">
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="team-member-link"
      >
        <div className="team-member-img">
          <img
            src={imageSrc}
            alt={name}
            className="member-img-tag"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      </a>
      <h3 className="member-name">{name}</h3>
      <p className="member-role">{role}</p>
    </div>
  );
}

export default TeamMember;
