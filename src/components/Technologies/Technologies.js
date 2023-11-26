import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaServer } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FcMultipleDevices } from "react-icons/fc";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id='tech'>
  <SectionDivider/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>I am working with React and Go (Programming Language) based projects as Full-Stack Intern at Tortoise Creative.</SectionText>
  <List>
    <ListItem>
      <FcMultipleDevices size='3rem'/>
      <ListContainer>
        <ListTitle>Programming Language</ListTitle>
        <ListParagraph>
          Experienced in <br/>
          JavaScript, C++, Python, SQL, Java
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiReact size='3rem'/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experienced with <br/>
          React.js, TypeScript
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <FaServer size='2rem'/>
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
          tools like TailWind CSS & Figma
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <FaTools size='2rem'/>
      <ListContainer>
        <ListTitle>Tools</ListTitle>
        <ListParagraph>
          Experienced in <br/>
          Github, Postman, AWS
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
 </Section>
);

export default Technologies;
