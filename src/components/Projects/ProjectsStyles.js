import styled from 'styled-components';

export const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;
  padding: 3.2rem 0 2.4rem;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 4.8rem;
    padding: 2.4rem 0 1.6rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 4rem;
    padding: 1.6rem 0 1.2rem;
  }
`;

export const ProjectRow = styled.article`
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 4rem;
  align-items: center;
  direction: ${(props) => (props.$reverse ? 'rtl' : 'ltr')};

  & > * {
    direction: ltr;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
    gap: 2rem;
    direction: ltr;
  }
`;

export const Media = styled.a`
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.background2};
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: border-color 0.3s ease, transform 0.35s ease;

  &:hover {
    border-color: rgba(42, 157, 143, 0.45);
    transform: translateY(-2px);
  }

  &:hover img {
    transform: scale(1.03);
  }
`;

export const MediaStatic = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.background2};
  border: 1px solid rgba(255, 255, 255, 0.06);
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.5s ease;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Label = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.accent1};
`;

export const Title = styled.h3`
  font-size: 3.2rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #fff;
  line-height: 1.15;
  margin: 0;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2.8rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.4rem;
  }
`;

export const Description = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
  max-width: 42rem;
  margin: 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem 1.6rem;
  list-style: none;
  padding: 0.4rem 0 0;
  margin: 0;
`;

export const Tag = styled.li`
  color: rgba(255, 255, 255, 0.45);
  font-size: 1.4rem;
  letter-spacing: 0.02em;
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.6rem 2.4rem;
  margin-top: 0.8rem;
`;

export const PrimaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem 1.8rem;
  background: linear-gradient(270deg, #2a9d8f 0%, #1b6ca8 100%);
  border-radius: 8px;
  transition: opacity 0.25s ease, transform 0.25s ease;

  &:hover {
    opacity: 0.95;
    transform: translateY(-1px);
  }
`;

export const SecondaryLink = styled.a`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  font-weight: 500;
  padding-bottom: 2px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  transition: color 0.25s ease, border-color 0.25s ease;

  &:hover {
    color: #fff;
    border-color: ${(props) => props.theme.colors.accent1};
  }
`;

export const Status = styled.span`
  color: rgba(255, 255, 255, 0.4);
  font-size: 1.4rem;
  font-style: italic;
`;

export const MotionStrip = styled.aside`
  margin-top: 1.6rem;
  padding-top: 3.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 4.8rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-top: 2.4rem;
    margin-bottom: 3.2rem;
  }
`;

export const MotionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 2rem;
`;

export const MotionTitle = styled.h4`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: #fff;
`;

export const MotionIntro = styled.p`
  margin: 0;
  font-size: 1.5rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.45);
  max-width: 48rem;
`;

export const MotionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem 2.4rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 1.2rem;
  }
`;

export const MotionItem = styled.li``;

export const MotionLink = styled.a`
  display: inline-flex;
  align-items: baseline;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.6rem;
  font-weight: 500;
  transition: color 0.25s ease;

  &:hover {
    color: #fff;
  }

  &:hover span:first-child {
    border-color: ${(props) => props.theme.colors.accent1};
  }
`;

export const MotionName = styled.span`
  padding-bottom: 2px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.28);
  transition: border-color 0.25s ease;
`;

export const MotionNote = styled.span`
  font-size: 1.3rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.35);
`;
