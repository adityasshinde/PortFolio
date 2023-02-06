import Link from 'next/link';
import Head from 'next/head';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
<Container>
  <Head>
    <title>Aditya Shinde Portfolio</title>
  </Head>
  <Div1>
    <Link href='/'>
      <span style={{display:'flex', alignItems:'center',color:'white',marginBottom:'20px'}}>
        <DiCssdeck size='3rem'/><Span>Portfolio</Span>
      </span>
    </Link>
  </Div1>
  <Div2>
    <li>
      <Link href='#projects'>
        <NavLink>Projects</NavLink>
      </Link>
    </li>
    <li>
      <Link href='#tech'>
        <NavLink>Technologies</NavLink>
      </Link>
    </li>
    <li>
      <Link href='#about'>
        <NavLink>About</NavLink>
      </Link>
    </li>
  </Div2>
  <Div3>
    <SocialIcons href='https://github.com/adityasshinde' target='_blank'>
      <AiFillGithub size='3rem'/>
    </SocialIcons>
    <SocialIcons href='https://www.linkedin.com/in/aditya-shinde11/' target='_blank'>
      <AiFillLinkedin size='3rem'/>
    </SocialIcons>
    <SocialIcons href='https://www.instagram.com/im.aditya.s/?igshid=ZDdkNTZiNTM%3D' target='_blank'>
      <AiFillInstagram size='3rem'/>
    </SocialIcons>
  </Div3>
</Container>
);

export default Header;
