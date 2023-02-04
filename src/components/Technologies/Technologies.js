import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id='tech'>
  <SectionDivider/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>I have worked with some students to develop a projects that was based on blockchain technologies and django integrated with react.</SectionText>
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
        <ListTitle>Backend-End</ListTitle>
        <ListParagraph>
          Experienced with <br/>
          Node and Databases
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
