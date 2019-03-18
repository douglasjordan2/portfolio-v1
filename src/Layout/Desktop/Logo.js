import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Portrait from '../Logo/Portrait';
import Signature from '../Logo/Signature';

export default class Right extends Component {
  render() {
    return (
      <>
      <MediaQuery minWidth = {601}>
      <div style = { desktopLogo }>
        <div style = { portrait }>
          <Portrait />
        </div>
        <div style = { signature }>
          <Signature />
        </div>
      </div>
      </MediaQuery>
      <MediaQuery maxWidth = {600}>
      <div style = { mobileLogo }>
        <div style = { portraitMobile }>
          <Portrait />
        </div>
        <div style = { signatureMobile }>
          <Signature />
        </div>
      </div>
      </MediaQuery>
      </>
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

const mobileLogo = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '10%'
}

const portraitMobile = {
  height: 'auto',
  maxWidth: '400px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const signatureMobile = {
  width: '50%',
  filter: 'invert(100%)'
}