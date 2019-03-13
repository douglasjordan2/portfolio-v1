import React, { Component } from 'react';
import './index.css';
import Breakpoint, { BreakpointProvider } from 'react-socks';

import Logo from './components/Logo';
import Icons from './components/Icons/IconContainer';
import ReactProjects from './components/ReactProjects/ReactProjects';
import Pomodoro from './components/ReactProjects/Pomodoro';


export default 
class App extends Component {
  state = {
    pomodoro: false
  }

  render() {
    return (
      <BreakpointProvider>
        <Breakpoint phone up>
          <div 
            style = { body }
          >
            <img 
              src = { require('./views/selfportrait.png') } 
              alt=""
              style = {{
                height: '350px',
                width: 'auto',
              }}
            />
            <div
              style = {{
                display: 'flex',
                justifyContent: 'space-between',
                width: '250px',
                position: 'absolute',
                top: '5vh',
                right: 'calc(50% - 125px)'
              }}
            >
              <Icons />
            </div>
            <div
              style = {{
                position: 'absolute',
                bottom: '0',
                left: 'calc(50% - 8vw)',
              }}
            >
              <Logo />
            </div>
            <div
              style = {{
                position: 'absolute',
                bottom: '0',
                right: '0'
              }}
            >
              <ReactProjects />
            </div>
            <div style = {{
              position: 'absolute',
              right: '0',
              top: '0',
            }}>
              <Pomodoro />
            </div>
          </div>
        </Breakpoint>
        <Breakpoint phone only>
        </Breakpoint>
      </BreakpointProvider>
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
  justifyContent: 'center',
  alignItems: 'center',
}

const under = {
  position: 'absolute',
  bottom: '0',
  right: '0',
  fontStyle: 'italic',
  borderRadius: '5px',
  padding: '1% 2vw',
  color: '#e9e9e9',
  fontSize: '0.8rem'
}