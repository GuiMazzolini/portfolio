import React from 'react';

import {
  Content,
  Description,
  Img,
  Label,
  Links,
  Media,
  MediaStatic,
  MotionHeader,
  MotionIntro,
  MotionItem,
  MotionLink,
  MotionList,
  MotionName,
  MotionNote,
  MotionStrip,
  MotionTitle,
  PrimaryLink,
  ProjectRow,
  ProjectsList,
  SecondaryLink,
  Status,
  Tag,
  TagList,
  Title,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { motionExperiments, projects } from '../../constants/constants';

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <ProjectsList>
      {projects.map((project, index) => {
        const MediaWrap = project.live ? Media : MediaStatic;
        const mediaProps = project.live
          ? {
              href: project.live,
              target: '_blank',
              rel: 'noopener noreferrer',
            }
          : {};

        return (
          <ProjectRow key={project.id} $reverse={index % 2 === 1}>
            <MediaWrap {...mediaProps}>
              <Img src={project.image} alt={project.title} />
            </MediaWrap>
            <Content>
              <Label>{project.label}</Label>
              <Title>{project.title}</Title>
              <Description>{project.description}</Description>
              <TagList>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagList>
              <Links>
                {project.live && (
                  <PrimaryLink
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live site
                  </PrimaryLink>
                )}
                {project.code && (
                  <SecondaryLink
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </SecondaryLink>
                )}
                {!project.live && <Status>In progress</Status>}
              </Links>
            </Content>
          </ProjectRow>
        );
      })}
    </ProjectsList>

    <MotionStrip>
      <MotionHeader>
        <MotionTitle>Motion experiments</MotionTitle>
        <MotionIntro>
          Landing-page studies focused on GSAP, scroll storytelling, and UI motion.
        </MotionIntro>
      </MotionHeader>
      <MotionList>
        {motionExperiments.map((item) => (
          <MotionItem key={item.title}>
            <MotionLink
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MotionName>{item.title}</MotionName>
              <MotionNote>{item.note}</MotionNote>
            </MotionLink>
          </MotionItem>
        ))}
      </MotionList>
    </MotionStrip>
  </Section>
);

export default Projects;
