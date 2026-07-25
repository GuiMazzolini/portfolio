import styled from 'styled-components';

export const TimelineList = styled.ol`
  list-style: none;
  margin: 1.6rem 0 4.8rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
`;

export const TimelineItem = styled.li`
  display: grid;
  grid-template-columns: 9.6rem 2.4rem 1fr;
  gap: 1.6rem;
  align-items: start;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 7.2rem 2rem 1fr;
    gap: 1.2rem;
  }
`;

export const TimelineYear = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.colors.accent1};
  padding-top: 0.2rem;
  text-align: right;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
  }
`;

export const TimelineTrack = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 100%;
  padding-top: 0.6rem;

  &::before {
    content: '';
    position: absolute;
    top: 0.6rem;
    bottom: ${(props) => (props.$last ? 'auto' : '-0.2rem')};
    height: ${(props) => (props.$last ? '0' : 'calc(100% + 0.2rem)')};
    width: 1px;
    background: rgba(255, 255, 255, 0.12);
  }
`;

export const TimelineDot = styled.span`
  position: relative;
  z-index: 1;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.background1};
  border: 2px solid ${(props) => props.theme.colors.accent1};
  box-shadow: 0 0 0 4px rgba(232, 165, 75, 0.12);
`;

export const TimelineContent = styled.div`
  padding: 0 0 2.8rem;

  ${TimelineItem}:last-child & {
    padding-bottom: 0.8rem;
  }
`;

export const TimelineText = styled.p`
  margin: 0;
  font-size: 1.7rem;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.7);
  max-width: 56rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;
