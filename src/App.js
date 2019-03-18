import React, { Component } from 'react';
import Content from './Layout/Desktop/Content';
import Logo from './Layout/Desktop/Logo';

export default class App extends Component {
  render() {
    return (
      <div style = { desktopContainer }>
        <Content />
        <Logo />
      </div>
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