import React from 'react';

export default
function Signature() {
  return (
    <img 
      src = { require('../views/signature.png') } 
      alt="signature"
      style  = {{ 
        filter: 'invert(100%)',
        width: '100%',
        height: 'auto'
      }}
    />
  );
}