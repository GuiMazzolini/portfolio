import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:guilhermemazzolini@hotmail.com">
            guilhermemazzolini@hotmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Social</LinkTitle>
          <SocialContainer>
            <SocialIcons
              href="https://github.com/GuiMazzolini"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons
              href="https://www.linkedin.com/in/guilhermemazzolini/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Building useful web products, one project at a time.</Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
