import React from 'react';
import TimeLine from './TimeLine';

const AboutTimeLineThirdDay = () => {
  const thirdday = [
    {
      type: 'work',
      time: '12:00 pm - 02:00 pm',
      title: "Takeshi’s Castle",
      subtitle: 'Venue:- Stage',
      description: "Takeshi's Castle combines humor and challenges in a whimsical obstacle course.",
      background: 'transparent',
    },
    {
      type: 'work',
      time: '01:00 pm - 02:30 am',
      title: 'Auto Expo ',
      subtitle: 'Venue:- Stage',
      description: 'Auto Expo showcases cutting-edge automotive innovation, design, and future mobility.',
      background: 'transparent',
    },
    {
        type: 'work',
        time: '04:30 pm - 06:00 pm',
        title: 'Concert',
        subtitle: 'Venue:- Stage',
        description: 'Concert electrifies with live music, passionate performances, and an unforgettable atmosphere.',
        background: 'transparent',
      },
      {
        type: 'work',
        time: '06:00 pm - 06:30 pm',
        title: 'Reel and After movie & Prize Distribution.',
        subtitle: 'Venue:- Stage',
        description: 'Reel and After Movie capture memorable moments and Prize Distribution celebrates excellence.',
        background: 'transparent',
      },
      {
        type: 'work',
        time: '06:30 pm onwards',
        title: 'DJ Jam',
        subtitle: 'Venue:- Stage',
        description: 'DJ Jam fuels the night with pulsating beats, energy, and euphoria.',
        background: 'transparent',
      },
  ];

  return (
    <div className="about__timeline">
      <TimeLine events={thirdday} text="28 January 2024 ( Sunday )" />
    </div>
  );
};

export default AboutTimeLineThirdDay;
