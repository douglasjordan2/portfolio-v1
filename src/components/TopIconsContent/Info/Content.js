import React, { Component } from 'react';
import { InfoContainer, Info, Portrait } from './styles';
import { Link } from 'react-router-dom'

export default function Content() {
  const LinkStyle = {
    fontStyle: 'italic',
    color: 'black'
  }

  return (
    <InfoContainer>
      <Info>
        You're probably visiting this page because of the article written by my good friend <a href="https://github.com/csinozich/" style = { LinkStyle }>Claire</a>.<br/><br />
        Thank you for being here, and welcome to my 'about' section. I'd like to give a full bio, but there's not much to me.<br /><br />
        I'm a freelance web designer, a student, and a Javascript fanatic. If you'd like to collaborate on a project, feel free to send me an email.<br /><br />
        Otherwise, forgive me for having my website under construction at a time like this; I got little sidetracked working on this <Link to="/dragdrop" style = { LinkStyle }>Drag and Drop Library</Link>. As you can see, there's still a lot to do.<br /><br />
        We've got bugs, enjoy your stay :^)
      </Info>
      <Portrait />
    </InfoContainer>
  )
}