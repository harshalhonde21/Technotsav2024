import { Fragment, useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useSpring, animated } from "react-spring";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import "./Events.css";
import AllEvents from "../components/AllEvents";

const Events = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setShowScrollToTop(scrollY > 200);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className="outer-event-container">
        <div className="event-text-container">
          <h4 className="heading-event">WELCOME TO TECHNOTSAV 2024</h4>
          <h1 className="heading2-event">EVENTS</h1>
          <p className="heading3-event">
            Experience the thrill and elation of mind-blowing events from tech
            to gaming. Participate, witness, and be a part of the phenomenon
          </p>
        </div>
        <Link
          className="scroll"
          to="all-events-section"
          smooth={true}
          duration={1000}
        >
          <FaAngleDown />
        </Link>
        {showScrollToTop && (
          <Link
            className="scroll-to-top"
            to="outer-event-container"
            smooth={true}
            duration={1000}
          >
            <FaAngleUp />
          </Link>
        )}
      </div>

      <animated.div
        id="all-events-section"
        className="outer-event-container"
        style={fadeIn}
      >
        <AllEvents />
      </animated.div>
    </Fragment>
  );
};

export default Events;
