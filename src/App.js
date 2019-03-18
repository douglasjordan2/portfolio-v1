import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Content from './Layout/Desktop/Content';
import Logo from './Layout/Desktop/Logo';

export default class App extends Component {
  render() {
    return (
      <>
      <MediaQuery minWidth = {601}>
        <div style = { desktopContainer }>
          <Content />
          <Logo />
        </div>
      </MediaQuery>
      <MediaQuery maxWidth = {600}>
        <div style = { mobileContainer }>
          <Content />
          <Logo />
        </div>
      </MediaQuery>
      </>
    );
  }
}

const desktopContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  height: '100vh',
  width: '100vw',
  background: 'linear-gradient(90deg, #090a0a 25%, #151617 75%)',
}

const mobileContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(90deg, #090a0a 25%, #151617 75%)',
  height: 'auto',
  width: '100vw'
}