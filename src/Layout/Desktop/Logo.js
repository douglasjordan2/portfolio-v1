import React, { Component } from 'react';
import Portrait from '../Logo/Portrait';
import Signature from '../Logo/Signature';

export default class Right extends Component {
  render() {
    return (
      <div style = { desktopLogo }>
        <div style = { portrait }>
          <Portrait />
        </div>
        <div style = { signature }>
          <Signature />
        </div>
      </div>
    )
  }
}

const desktopLogo = {
  width: '40%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
}

const portrait = {
  height: '70%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const signature = {
  width: '70%',
  filter: 'invert(100%)'
}