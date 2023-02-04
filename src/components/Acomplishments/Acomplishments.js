import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { std: 'B.Tech (CSE)', text: 'Indian Institute of Information Technology Kottayam',year:'Jan 2022-Present',result:'CGPA: 8.91'},
  { std: '12th (CBSE)', text: 'Jawahar Navodaya Vidyalaya Latur',year:'July 2020 - May 2021',result:'Percentage: 95.20%'},
  { std: '10th (CBSE)', text: 'Jawahar Navodaya Vidyalaya Latur',year:'July 2018 - May 2019',result:'Percentage: 92.80%'},
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Education</SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index}>
            <BoxNum>{card.std}</BoxNum>
            <BoxText>{card.text}</BoxText>
            <br/>
            <span>{card.year}</span><br/><br/>
            <h5>{card.result}</h5>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
