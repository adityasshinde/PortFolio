import React from 'react';
import { Card,Inf,P,H4 } from './ExperienceStyles';
import { AiFillSafetyCertificate} from 'react-icons/ai';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import logo from '../../../public/images/logo.svg';


const Experience = () => {
  return <Section nopadding id='experince'>
    <SectionDivider/>
    <SectionTitle main>Experience</SectionTitle>
    <Card>
   <div>
   <img src='https://avatars.githubusercontent.com/u/43116515?v=4' alt='Loading' 
   style={{background:'white',width:'150px'}} />
   </div>
      <Inf>
        <h2>Cyber Security Lead</h2>
        <H4><a href='https://www.iiitkottayam.ac.in/#!/codingClub'>IIIT Kottayam </a><AiFillSafetyCertificate size='1.5rem'/> BetaLabs</H4>
        <P>October 2023 - Present</P>
        <P>Leadership, Event Management, Collaborations,</P>
        <P>Public Speaking & Communication,</P>
        <P>Creative Execution, Organizing Hackthons, Fests & Contests</P>
      </Inf>
    </Card>
    <Card>
   <div>
   <img src='https://www.happilyever.co/static/media/newLogo.aa017d5297ade31296050058d61d207d.svg' alt='Loading' 
   style={{background:'white',width:'150px'}} />
   </div>
      <Inf>
        <h2>Full Stack Developer</h2>
        <H4><a href='https://www.happilyever.co/'>HappilyEver.co </a><AiFillSafetyCertificate size='1.5rem'/>Internship</H4>
        <P>Remote</P>
        <P>March 2023 - May 2023</P>
        <P>3 Months</P>
        <P>Go (Programming Language), React</P>
        <P>AWS, Git, Postman, MongoDB</P>
      </Inf>
    </Card>
  </Section>
}

export default Experience
