import React, { Component } from 'react';
import './index.css';

import Icons from './Layout/Icons/IconContainer';
import ReactProjects from './Layout/ReactProjects/ReactProjects';
import Signature from './Layout/Signature';
import Logo from './Layout/Logo';

export default 
class App extends Component {
  render() {
    return (
      <div style = { desktopContainer }>
        <div style = { pageLeftContent }>
          <div style = { desktopIconStyles }>
            <Icons />
          </div> 
          <ReactProjects />
        </div>
        <div style = { logoContainer }>
          <div style = { logoImg }>
            <Logo 
              topOpen = { this.openContent }
            />
          </div>
          <div style = { logoText }>
            <Signature />
          </div>
        </div>
      </div>
    );
  }
}

const desktopContainer = {
  height: '100vh',
  width: '100vw',
  background: 'linear-gradient(145deg, #090a0a 45%, #151617 75%)',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between'
}

const pageLeftContent = {
  display: 'flex',
  flexDirection: 'column',
  width: '55%',
  padding: '0 2%',
  justifyContent: 'space-between',
  alignItems: 'center'
}

const desktopIconStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  padding: '2.5% 5%',
  position: 'relative',
  marginTop: '2.5%'
}

const logoContainer = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '45%'
}

const logoImg = {
  height: '75vh',
}

const logoText = {
  width: '50%'
}