import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id='tech'>
  <SectionDivider/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>I am working with React and Go (Programming Language) based projects as Full-Stack Intern at Tortoise Creative.</SectionText>
  <List>
    <ListItem>
      <DiReact size='3rem'/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experienced with <br/>
          React.js
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size='3rem'/>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Experienced with <br/>
          Go (Programming Language) and NodeJS
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size='3rem'/>
      <ListContainer>
        <ListTitle>Database Management</ListTitle>
        <ListParagraph>
          Experienced with <br/>
          MongoDB, Firebase and Sanity
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiZend size='3rem'/>
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experienced with <br/>
          tools like figma
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
 </Section>
);

export default Technologies;
