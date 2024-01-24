import React from "react";
import "./Home.css";

const Home = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const homeDetailsElement = document.getElementById("home-details");
    if (homeDetailsElement) {
      homeDetailsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="home-container">
        <div className="background-image">
          <div className="centered-text">
            <h1>TECHNOTSAV</h1>
            <br />
            <h1 className="Year-2024">2024</h1>
            <br />
            <h2 className="technoutsav__date">25 - 28 JANUARY</h2>
            <p>
              <a href="#home-details" onClick={(e) => handleScroll(e)}>
                <img src="/HomePage/Down Button.png" alt="Small Image" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
