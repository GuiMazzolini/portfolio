import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const Eyebrow = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.accent1};
  margin-bottom: 1.2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }
`;

export const CtaGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  flex-wrap: wrap;
  margin-bottom: 8rem;

  @media ${(props) => props.theme.breakpoints.md} {
    margin-bottom: 6.4rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: stretch;
    gap: 1.6rem;
    margin-bottom: 4rem;
  }

  a {
    display: inline-flex;
  }
`;

export const SecondaryLink = styled.a`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.8rem;
  font-weight: 500;
  padding-bottom: 2px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);
  transition: color 0.3s ease, border-color 0.3s ease;

  &:hover {
    color: #fff;
    border-color: ${(props) => props.theme.colors.accent1};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    text-align: center;
    font-size: 1.6rem;
  }
`;
