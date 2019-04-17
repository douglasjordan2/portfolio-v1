import React, { Component } from 'react';

export const AppContainer = props => {
  const style = mobile => {
    return {
      height: mobile ? 'auto' : '100vh',
      width: '100vw',
      background: 'linear-gradient(90deg, #090a0a, #151617 75%)',
      display: 'flex',
      flexDirection: mobile ? 'column' : 'row',
      justifyContent: mobile ? 'center' : 'space-between',
      alignItems: 'center',
    }
  }
  
  return (
    <div style = { style(props.mobile) }>
      { props.children }
    </div>  
  );
}