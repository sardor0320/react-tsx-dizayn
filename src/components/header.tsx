import React, { useState } from "react";
import "./header.css";
import image3 from '../assets/img/image3.png';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <nav className="navbar">
        <div className="logo">DOML</div>
        <ul className="nav-links">
          <li>Product</li>
          <li>Team</li>
          <li>Enterprise</li>
          <li>Explore</li>
          <li>Marketplace</li>
          <li>Pricing</li>
        </ul>
        <div className="nav-actions">
          <input
            type="text"
            className="search-bar"
            placeholder="Search DOML"
          />
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>

      <div className="main-content">
        <div className="text-content">
          <h1 className="title">
            AI Marketing.
            <br />
            Optimized Reach.
          </h1>
          <p className="subtitle">
            Our vision is to revolutionize the way brands and advertisers
            target, reach.
          </p>
        </div>
        <div className="globe">
          <img
            src={image3}
            alt="shar"
          />
          <div className="connection-lines"></div>
          <div className="dots"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
