import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href='tel:1111-1111-1111'>1111-1111-1111</LinkItem>
      </LinkColumn>
      <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href='mailto:s.adityashinde11@gmail.com'>s.adityashinde11@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>This is me who is announcing....</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/adityasshinde'>
      <AiFillGithub size='3rem'/>
    </SocialIcons>
    <SocialIcons href='https://www.linkedin.com/in/aditya-shinde11/'>
      <AiFillLinkedin size='3rem'/>
    </SocialIcons>
    <SocialIcons href='https://www.instagram.com/im.aditya.s/?igshid=ZDdkNTZiNTM%3D'>
      <AiFillInstagram size='3rem'/>
    </SocialIcons>
        </SocialContainer>
        </SocialIconsContainer>
      
    </FooterWrapper>
  );
};

export default Footer;
