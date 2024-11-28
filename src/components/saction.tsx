import React from "react";
import "./saction.css";
import rasm from '../assets/img/1.png'

const Saction: React.FC = () => {
  return (
    <header className="header--start">
      <section>
        <div className="hero-content">
          <h1>
            <span className="highlight">AI Marketing.</span> <br />
            Optimized Reach.
          </h1>
          <h3>
            Our vision is to revolutionize the way brands and advertisers
            target, reach
            <span> <br /> by AI technology providing <br /> real time, data-driven <br /> insights on your business and audience. The mission <br /> of DOML is to create the best experiences for companies <br /> through intelligent insights,<br /> powerful analytics and strategic execution.</span>
          </h3>
          <button className="cta-button">Get Started →</button>
        </div>
      </section>
      <section>
        <div className="hero-image">
          <img src={rasm} alt="age" />
        </div>
      </section>
    </header>
  );
};

export default Saction;
