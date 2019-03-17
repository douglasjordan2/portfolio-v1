import React from 'react'

export default function Logo() {
  return (
    <img 
      src = { require('../views/selfportrait.png') } 
      alt="signature"
      style = {{
        height: '100%',
        width: 'auto'
      }}
    />
  )
}
