import React from 'react';

export const PageContainer = props => {
  const styles = mobile => {
    return {
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      height: '100vh',
      justifyContent: mobile ? 'flex-start' : 'space-between',
      padding: mobile ? '0' : '0'
    }
  }
  
  return (
    <div style = { styles(props.mobile) }>
      { props.children }
    </div>
  );
}

export const TopIconsContainer = props => {
  const styles = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    width: '100%',
    height: '10vh',
    fontSize: '1.8rem',
    zIndex: '1'
  };

  return (
    <div style = { styles }>
      { props.children }
    </div>
  );
}

export function Signature() {
  const styles = {
    width: '50vw',
    height: 'auto',
    filter: 'invert(100%)',
    zIndex: '0'
  }

  return (
    <img 
      src = { require('../../assets/signature.png') } 
      alt = "signature"
      style = { styles }
    />
  )
}