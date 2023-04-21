import React from 'react';
import { Card,Inf,P,H4 } from './ExperienceStyles';
import { AiFillSafetyCertificate} from 'react-icons/ai';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';


const Experience = () => {
  return <Section nopadding id='experince'>
    <SectionDivider/>
    <SectionTitle main>Experience</SectionTitle>
    <Card>
   <div>
   <img src="https://media.licdn.com/dms/image/D560BAQE3hzK70-NMtg/company-logo_200_200/0/1681543881257?e=1690416000&v=beta&t=DozDyjtCxucWgqSB0mGHZ4T38D3BxyEN5Xlp18yrk9g" alt='loading' style={{width:"150px"}}></img>
   </div>
      <Inf>
        <h2>Full Stack Developer</h2>
        <H4><a href='https://www.happilyever.co/'>HappilyEver.co </a><AiFillSafetyCertificate size='1.5rem'/>Internship</H4>
        <P>Remote</P>
        <P>March 2023 - Present</P>
        <P>Go (Programming Language), React</P>
        <P>AWS, Git, Postman, MongoDB</P>
      </Inf>
    </Card>
  </Section>
}

export default Experience
