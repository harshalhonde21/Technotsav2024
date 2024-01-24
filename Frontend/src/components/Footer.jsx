import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
      <h2 id="footer__heading">Technotsav 2024</h2>
        <div className="footer-section">
          <div className="footer-left">
            <p className="footer-description">
              Technotsav, SBJITMR's annual fest, all run by students ,seamlessly
              merges tech, culture, and sheer enjoyment. Dive into technical and
              non technical competitions, experiencing an innovative and dynamic
              atmosphere. Whether tech-savvy or culturally inclined, Technotsav
              caters to all, offering a perfect mix of learning and excitement.
            </p>
          </div>

          <div className="footer-right">
            <div><a href="/">Home</a></div>
            <div><a href="/events">Events</a></div>
            <div><a href="/leaderboard">Leaderboard</a></div>
            <div><a href="/about">About</a></div>
          </div>
        </div>

        <hr className="footer-line" />

        <div className="footer-social">
        <a href="https://www.facebook.com/sbjitmr/">
            <img src="/HomePage/facebook.png" alt="Facebook Logo" />
          </a>
          <a href="https://www.youtube.com/channel/UCh6YlSVHhMzX_uQuEj3yAGg">
            <img src="/HomePage/youtube.png" alt="YouTube Logo" />
          </a>
          <a href="https://in.linkedin.com/school/officialsbjain/">
            <img src="/HomePage/linkedin.png" alt="LinkedIn Logo" />
          </a>
          <a href="https://www.instagram.com/officialsbjain/?hl=en">
            <img src="/HomePage/instagram.png" alt="Instagram Logo" />
          </a>
        </div>

        <div className="footer-bottom">
        </div>
      </footer>
        <div>
          <p className="made-with-love">
            Made with ❤️ by GDSC SBJITMR
          </p>
        </div>
    </>
  );
};

export default Footer;
