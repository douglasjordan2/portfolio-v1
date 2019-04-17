import React, { Component } from 'react';
import { InfoContainer, Info, Portrait } from './styles';

export default function Content() {
  return (
    <InfoContainer>
      <Info>
        You're probably visiting this page because of the article written by my good friend <Link href="https://github.com/csinozich/">Claire</Link>.<br/><br />
        Thank you for being here, and welcome to my 'about' section. I'd like to give a full bio, but there's not much to me.<br /><br />
        I'm a freelance web designer, a student, and a Javascript fanatic. If you'd like to collaborate on a project, feel free to send me an email.<br /><br />
        Otherwise, forgive me for having my website under construction at a time like this; I got little sidetracked working on this <Link href="/dragdrop">Drag and Drop Library</Link>. As you can see, there's still a lot to do.<br /><br />
        We've got bugs, enjoy your stay :^)
      </Info>
      <Portrait />
    </InfoContainer>
  )
}

const Link = props => {
  const style = {
    fontStyle: 'italic',
    color: 'black'
  }

  return (
    <a 
      href = { props.href }
      style = { style }
    >
      { props.children }
    </a>
  )
}