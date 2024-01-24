import React from 'react';
import TimeLine from './TimeLine';

const AboutTimeLineSecondDay = () => {
  const secondday = [
    {
      type: 'work',
      time: '10:30 am - 12:30 pm',
      title: 'Sports (Finals)',
      subtitle: 'Venue:- College Campus',
      description: 'Chess, Cricket, Football, Futsal, Vollyball',
      background: 'transparent',
    },
    {
      type: 'work',
      time: '11:00 am - 02:30 am',
      title: 'Muscle Clash',
      subtitle: 'Venue:- Stage',
      description: 'Muscle Clash delivers intense strength battles with powerful athleticism and determination.',
      background: 'transparent',
    },
    {
        type: 'work',
        time: '04:30 pm - 05:30 pm',
        title: 'Qawwali',
        subtitle: 'Venue:- Stage',
        description: 'Quawaali echoes with soulful melodies, poetic lyrics, and cultural resonance.',
        background: 'transparent',
      },
      {
        type: 'work',
        time: '05:30 pm onwards',
        title: 'Alumni Meet',
        subtitle: 'Venue:- Stage',
        description: 'Alumni Meet fosters nostalgia, connections, and shared memories among graduates.',
        background: 'transparent',
      },
      {
        type: 'work',
        time: '05:30 pm - 07:20 pm',
        title: 'Fashion Show',
        subtitle: 'Venue:- Stage',
        description: 'Fashion show dazzles with runway elegance, style, and trend-setting designs.',
        background: 'transparent',
      },
  ];

  return (
    <div className="about__timeline">
      <TimeLine events={secondday} text="27 January 2024 ( Saturday )" />
    </div>
  );
};

export default AboutTimeLineSecondDay;
