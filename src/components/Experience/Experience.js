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
   <img src='https://media.licdn.com/dms/image/C4D0BAQF7k9EsNnMGvw/company-logo_100_100/0/1655481176638?e=1685577600&v=beta&t=KSEE38h3glStluv_hSgsg-nLgrqoXKsVif5XOfk9hzU' alt='loading'></img>
   </div>
      <Inf>
        <h2>Full Stack Developer</h2>
        <H4><a href='https://www.happilyever.co/'>HappilyEver.co </a><AiFillSafetyCertificate size='1.5rem'/>Internship</H4>
        <P>Remote</P>
        <P>March 2023 - Present</P>
      </Inf>
    </Card>
  </Section>
}

export default Experience
