import React from 'react';

export default
function Logo() {
  return (
    <div style = { container }>
      <img 
        src = { require('../views/logo.png') } 
        alt=""
        style = {{
          width: '500px',
          height: 'auto',
          filter: 'invert(100%)',
          marginLeft: '8%'
        }}
      />
    </div>
  );
}

const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: '0',
  marginBottom: '5%'
}