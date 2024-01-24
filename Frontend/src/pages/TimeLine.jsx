import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";
import "./TimeLine.css";

const TimeLine = ({ events, text }) => {
  return (
    <div className="time__line">
      <h1 className="about__timeline">{text}</h1>
      <div className="timeline__container"></div>
      <VerticalTimeline>
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${event.type || "work"}`}
            contentStyle={{
              background: event.background || "rgb(33, 150, 243)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${
                event.background || "rgb(33, 150, 243)"
              }`,
            }}
            time={event.time}
          >
            <h3 className="vertical-timeline-element-title">{event.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {event.subtitle}
            </h4>
            <strong>
              <p>{event.time}</p>
            </strong>
            <p>{event.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <Link to="/about">
        <button className="back-button">Back to About</button>
      </Link>
    </div>
  );
};

export default TimeLine;
