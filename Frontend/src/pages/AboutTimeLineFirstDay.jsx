import React from 'react';
import TimeLine from './TimeLine';

const AboutTimeLineFirstDay = () => {
  const firstday = [
    {
      type: 'work',
      time: '10:30 am - 3:30 pm',
      title: 'Sports (Semi - Finals)',
      subtitle: 'Venue:- College Campus',
      description: 'Chess, Cricket, Football, Futsal, Vollyball',
      background: 'transparent',
    },
    {
      type: 'work',
      time: '11:00 am - 11:45 am',
      title: 'Inaugration',
      subtitle: 'Venue:- Stage',
      description: 'Inaugration of Technotsav 2024.',
      background: 'transparent',
    },
    {
        type: 'work',
        time: '12:30 pm - 01:30 pm',
        title: 'Youth Parliament',
        subtitle: 'Venue:- Stage',
        description: 'The Youth Parliament competition provides a platform for young individuals to engage in civic discourse.',
        background: 'transparent',
      },
      {
        type: 'work',
        time: '02:30 pm - 04:30 pm',
        title: 'Band Performance & Talent Show',
        subtitle: 'Venue:- Stage',
        description: 'Energetic band performance lights up talent show stage.',
        background: 'transparent',
      },
      {
        type: 'work',
        time: '04:30 pm - 07:30 pm',
        title: 'Dance Performances',
        subtitle: 'Venue:- Stage',
        description: 'Captivating dance performances showcase artistry, rhythm, and expressive movements beautifully.',
        background: 'transparent',
      },
  ];

  return (
    <div className="about__timeline">
      <TimeLine events={firstday} text="26 January 2024 (Friday)" />
    </div>
  );
};

export default AboutTimeLineFirstDay;
