import React from 'react';

export const ReactButton = props => {
  const styles = (mobile, hover) => {
    return ({
      border: hover ? '0px solid #e7e7e7' : '2px solid #e7e7e7',
      padding: hover ? '12px 22px' : '10px 20px',
      fontSize: hover ? '1.7rem' : '1.3rem',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: mobile ? '250px' : '175px',
      height: '40px',
      transition: hover ? 'all 0.1s ease-out' : mobile ? 'all 0.3s ease-out' : 'all 0.1s ease-in',
      position: 'relative'
    });
  }

  return (
    <div 
      style = { styles(props.mobile, props.hover) }
      onMouseEnter = { props.hover ? null : props.animate }
      onMouseLeave = { props.hover ? props.animate : null }
    >
      { props.children }
    </div>
  )
}

export const ReactString = props => {
  const styles = hover => {
    return ({
      fontSize: '1.3rem',
      opacity: hover ? '0' : '1',
      zIndex: hover ? '-1' : '1',
      transition: hover ? 'none' : 'opacity 0.5s ease-out'
    });
  }

  return (
    <span style = { styles(props.hover) }>
      { props.children }
    </span>
  )
}

export const Icons = props => {
  const styles = hover => {
    return ({
      position: 'absolute',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '150px',
      height: '45px',
      fontSize: '1.5rem',
      zIndex: hover ? '1' : '-1',
      opacity: hover ? '1' : '0',
      transition: hover ? 'opacity 0.5s ease-out' : 'none'
    });
  }

  return (
    <div style = { styles(props.hover) }>
      { props.children }
    </div>
  )
}