import React from 'react';
import { Link } from 'react-router-dom';
import "./HomeDetails.css";

export default function HomeDetails() {
  return (
    <>
      <div id="home-details" className="container">
        <div className="upper-section">
          <div className="text-container">
            <h2 className="homedetails__heading">EVENTS</h2>
            <div className="vertical-line">
              <p className="Homedetails-event__description">
                Experience the magic of our annual fest, a celebration of talent
                and diversity! Engage in a dynamic fusion of cultural,
                technical, and non-technical events, providing a stage for all
                to shine. Unleash your skills and passion at this gathering of
                creativity and innovation.
              </p>
            </div>
              <Link to="/events" className="explore-button">Explore More</Link>
          </div>
          <div className="image-container__1">
            <img src="/HomePage/event image.png" alt="Event Image" />
          </div>
        </div>

        <div className="lower-section">
          {/* For mobile view, reorder elements */}
          <div className="text-container">
            <h2 id='homedetails__heading-v' className="homedetails__heading">VARCHASVA</h2>
            <div className="vertical-line">
              <p className="Homedetails-varchasva__description">
                Get ready for pulse-pounding action in our fest's Sports
                Section! From fierce showdowns to team camaraderie, immerse
                yourself in the excitement of athleticism. Whether you're a
                player or a cheering fan, join us for unforgettable moments and
                celebrate the true spirit of sportsmanship!
              </p>
            </div>
              <Link to="/events" className="explore-button">Explore More</Link>
          </div>
          <div className="image-container__1">
            <img src="/EventsPage/image8.jpg" alt="Varchasva Image" />
          </div>
        </div>
      </div>
    </>
  );
}
