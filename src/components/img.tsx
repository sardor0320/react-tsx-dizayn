import React from "react";
import "../App.css";
import "../assets/img/1.png"

const Imgs: React.FC = () => {
  return (
    <section>
      <div className="logos">
        <img src="1.png" alt="Airtel" />
        <img src="/img/uba.png" alt="UBA" />
        <img src="/img/paga.png" alt="Paga" />
        <img src="/img/mtn.png" alt="MTN" />
        <img src="/img/dangote.png" alt="Dangote" />
        <img src="/img/firstbank.png" alt="First Bank" />
      </div>
    </section>
  );
};

export default Imgs;
