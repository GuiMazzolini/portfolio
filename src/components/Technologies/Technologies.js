import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import {
  Group,
  GroupTitle,
  Skill,
  SkillList,
  TechGrid,
} from './TechnologiesStyles';

const techGroups = [
  {
    title: 'Front-end',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    title: 'Back-end & data',
    skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'Stripe', 'AWS / Serverless'],
  },
  {
    title: 'Motion & product',
    skills: ['GSAP', 'OAuth', 'Vercel', 'Netlify'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Cursor / AI-assisted development'],
  },
];

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Stack I use to ship client sites and full-stack products — including AI
      coding tools to move faster, with full ownership of the final result.
    </SectionText>
    <TechGrid>
      {techGroups.map((group) => (
        <Group key={group.title}>
          <GroupTitle>{group.title}</GroupTitle>
          <SkillList>
            {group.skills.map((skill) => (
              <Skill key={skill}>{skill}</Skill>
            ))}
          </SkillList>
        </Group>
      ))}
    </TechGrid>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
