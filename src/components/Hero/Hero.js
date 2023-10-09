import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
<SectionTitle main center>
       Hii, {`I'm`}<br/>
       Aditya Shinde
</SectionTitle>
<SectionText>As a third-year Computer Science student, I bring a passion for technology and a proven track record, with a 3-month full-stack internship and collaborative project experiences, showcasing my dedication to innovation and teamwork.</SectionText>
<Button onClick={()=>window.location='https://github.com/adityasshinde'} target='_blank'>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;