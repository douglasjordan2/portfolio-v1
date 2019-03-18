import React from 'react'

export default function Content() {
  return (
    <div style = {{
      height: '55vh',
      color: '#151617',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      lineHeight: '30px'
    }}>
      <h1 style = {{
        color: '#151617',
        fontSize: '1.2rem',
        lineHeight: '30px'
      }}>Contact Me:</h1>
      <span style = {{
        color: '#151617',
        fontSize: '1.3rem'
      }}>douglasjordan2@gmail.com</span>
      <span style = {{
        color: '#151617',
        fontSize: '1.3rem'
      }}>(563) 200-4772</span>
    </div>
  )
}
