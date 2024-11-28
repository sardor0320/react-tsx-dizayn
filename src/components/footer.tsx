import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <section className="section--footer">
        <div className="logos2">
          <img src="/img/Google cloud.png" alt="Google Cloud" />
          <img src="/img/Ebay.png" alt="Ebay" />
          <img src="/img/Tux.png" alt="Tux" />
          <img src="/img/Spotify.png" alt="Spotify" />
        </div>
        <div className="footer--hit">
          <h1>Trusted by the world’s most ambitious teams.</h1>
        </div>
      </section>
      <div className="footer">
        <p>Copyright © 2022 DOML. All rights reserved.</p>
        <p>Terms of Use & Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
