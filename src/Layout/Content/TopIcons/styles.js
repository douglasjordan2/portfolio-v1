import React from 'react';

export const Icon = props => {
  const styles = (flash) => {
    return {
      cursor: 'pointer',
      zIndex: '1',
      padding: '10px',
      border: flash ? '2px solid #e7e7e7' : '0px solid black',
      transition: 'border 0.5s ease'
    }
  }
  
  return (
    <div 
      onClick = { () => props.show(props.id) }
      style = { styles(props.flash) }
    >
      { props.children }
    </div>
  );
} 

export const ContentWindow = props => {
  const styles = open => {
    return {
      position: 'absolute',
      height: '75vh',
      width: '80vw',
      left: 'calc(50% - 40vw)',
      opacity: open ? '1' : '-1',
      bottom: open ? '10vh' : props.top,
      transition: 'all 1s ease',
      background: '#e7e7e7',
      zIndex: '1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }

  return (
    props.data.map(item => (
      <div style = { styles(item.open) }>
        { item.content }
      </div>
    ))
  )
}