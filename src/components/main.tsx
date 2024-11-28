import React from "react";
import "./main.css";

const Main: React.FC = () => {
  return (
    <main>
      <section className="section--main">
        <div className="width">
          <div className="section--img">
            <img src="/img/7.png" alt="Marketing" />
          </div>
          <div>
            <p className="section--paragrph">
              Get exponential reach <br />
              via
            </p>
            <h1 className="section--all--marketing">AI Marketing</h1>
            <input className="input__cha" type="text" placeholder="Enter your work email" />
            <button className="small-hover-button">Click Me</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
