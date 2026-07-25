import styled from 'styled-components';

export const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3.2rem 4.8rem;
  margin: 2.4rem 0 4.8rem;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 2.8rem 3.2rem;
    margin: 2rem 0 4rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 2.4rem;
    margin: 1.6rem 0 3.2rem;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const GroupTitle = styled.h4`
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.accent1};
`;

export const SkillList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 0;
`;

export const Skill = styled.li`
  color: rgba(255, 255, 255, 0.72);
  font-size: 1.7rem;
  line-height: 1.5;

  &:not(:last-child)::after {
    content: '·';
    margin: 0 1rem;
    color: rgba(255, 255, 255, 0.28);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;
