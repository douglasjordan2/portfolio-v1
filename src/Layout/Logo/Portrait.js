import React from 'react';
import MediaQuery from 'react-responsive';

export default function Portrait() {
  return (
    <>
    <MediaQuery minWidth = {600}>
    <img 
      src = { require('../../assets/selfportrait.png') } 
      alt = "self portrait"
      style = {{
        height: '100%',
        width: 'auto'
      }}
    />
    </MediaQuery>
    <MediaQuery maxWidth={601}>
    <img 
      src = { require('../../assets/selfportrait.png') } 
      alt = "self portrait"
      style = {{
        height: 'auto',
        maxWidth: '380px'
      }}
    />
    </MediaQuery>
    </>
  )
}
