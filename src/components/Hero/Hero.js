import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        My portfolio showcases my journey as a full-stack dev, highlighting the skills and projects that demonstrate my ability to create innovative and efficient solutions across the entire tech stack.
        </SectionText>
        <a href="/cv.pdf" download="GuilhermeMuniz.pdf">
          <Button>Download CV</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;