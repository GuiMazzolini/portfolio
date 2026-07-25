import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { CtaGroup, Eyebrow, LeftSection, SecondaryLink } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <Eyebrow>Full-stack developer · Berlin</Eyebrow>
      <SectionTitle main center>
        Guilherme Mazzolini
      </SectionTitle>
      <SectionText>
        I build clean, responsive web apps — from polished landing pages
        to full-stack products. Background in Environmental Engineering,
        now focused on shipping practical solutions for real users.
      </SectionText>
      <CtaGroup>
        <a href="/cv.pdf" download="GuilhermeMazzolini.pdf">
          <Button form>Download CV</Button>
        </a>
        <SecondaryLink href="#contact">
          Get in touch
        </SecondaryLink>
      </CtaGroup>
    </LeftSection>
  </Section>
);

export default Hero;
