import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
<SectionTitle main center>
       Hii, I'm<br/>
       Aditya Shinde
</SectionTitle>
<SectionText>
  Over the last one and half years as a programmer, I have learnt problem solving skills, worked in teams to build projects.
</SectionText>
<Button onClick={()=>window.location='https://github.com/adityasshinde'} target='_blank'>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;