import styled from "styled-components"

export const FooterWrapper = styled.section`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`

export const LinkItem = styled.a`
  font-size: 1.7rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 0;
  transition: color 0.3s ease;
  overflow-wrap: anywhere;
  word-break: break-word;

  &:hover {
    color: #fff;
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.5rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
    line-height: 1.45;
  }
`

export const SocialIconsContainer = styled.div`
  max-width: 1040px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const CompanyContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-right: auto;

  @media ${props => props.theme.breakpoints.sm} {
    margin: 0 0 1.6rem;
  }
`

export const Slogan = styled.p`
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.02em;
  font-size: 1.6rem;
  line-height: 1.5;
  padding: 0;
  margin: 0;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.5rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
  }
`

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-left: -0.8rem;
`

export const LinkList = styled.ul`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
  gap: 3.2rem 4.8rem;
  padding: 4rem 0 2.8rem;
  list-style: none;
  margin: 0;

  @media ${props => props.theme.breakpoints.md} {
    gap: 2.4rem 3.2rem;
    padding: 3.2rem 0 2rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3.2rem 0 2rem;
  }
`

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  min-width: 0;
  max-width: 100%;
`

export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.4);
  margin: 0;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.1rem;
  }
`
