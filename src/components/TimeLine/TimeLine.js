import React from 'react';

import {
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineList,
  TimelineText,
  TimelineTrack,
  TimelineYear,
} from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const Timeline = () => (
  <Section id="about">
    <SectionTitle>About Me</SectionTitle>
    <SectionText>
      Based in Berlin, I moved into web development from Environmental Engineering —
      bringing an analytical mindset and a habit of solving messy, real-world problems.
      I freelance on custom web projects and am looking for a team where I can keep
      learning, contribute, and ship work that matters.
    </SectionText>
    <TimelineList>
      {TimeLineData.map((item, index) => (
        <TimelineItem key={`${item.year}-${index}`}>
          <TimelineYear>{item.year}</TimelineYear>
          <TimelineTrack $last={index === TimeLineData.length - 1}>
            <TimelineDot />
          </TimelineTrack>
          <TimelineContent>
            <TimelineText>{item.text}</TimelineText>
          </TimelineContent>
        </TimelineItem>
      ))}
    </TimelineList>
    <SectionDivider />
  </Section>
);

export default Timeline;
