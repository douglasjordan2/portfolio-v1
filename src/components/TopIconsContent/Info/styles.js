import React from 'react';

export const InfoContainer = props => {
  const style = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%'
  }
  
  return (
    <div style = { style }>
      { props.children }
    </div>
  );
}

export const Info = props => {
  const style = {
    fontSize: '1.2rem', 
    color: '#151617',
    width: '40%'
  }

  return (
    <p style = { style }>
      { props.children }
    </p>
  )
}

export const Portrait = props => {
  const style = {
    maxWidth: '50%',
    maxHeight: '90%'
  }

  return (
    <img 
      src = { require('../../../assets/selfportrait.png') }
      alt=""
      style = { style }
    />
  );
}