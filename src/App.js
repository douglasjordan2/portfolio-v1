import React, { Component } from 'react';
import './index.css';

import Logo from './components/Logo';
import Icons from './components/Icons/IconContainer';
import ReactProjects from './components/ReactProjects/ReactProjects';


export default 
class App extends Component {

  render() {
    return (
      <div 
        style = { body }
      >
        <div style = {{ 
          marginTop: '13%', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Logo />
          <Icons />
          <ReactProjects />
        </div>
        <span style = { under }>personal portfolio; a work in progress</span>
      </div>
    );
  }
}

const body = {
  height: '100vh',
  width: '100vw',
  background: 'radial-gradient(at 0% 0%, #090a0a, #151616 40%, #151617 45%)',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  overflow: 'none',
}

const under = {
  position: 'absolute',
  bottom: '0',
  fontStyle: 'italic',
  borderRadius: '5px',
  padding: '1% 50px',
  textAlign: 'center',
  color: '#e9e9e9',
  fontSize: '1.2rem'
}