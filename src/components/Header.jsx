import React from "react";

function Header() {
  return (
    <header>
      <div className="container header-content">
        <a href="/" className="logo">
          <img src="/images/logo.png" alt="Team Splitter" />
        </a>
        <nav>
          <div className="nav-links">
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="/solutions/" className="nav-link">
              Solutions
            </a>
            <a href="/about/" className="nav-link">
              About Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
