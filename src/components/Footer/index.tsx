import React from "react";
// styles
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <p className="copy">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="BLANK">
            Frontend Mentor
          </a>
          . Coded by
          <a
            className="matheusdoe-dev"
            target="BLANK"
            href="https://matheusdoe.dev"
          >
            Matheusdoe-dev
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
