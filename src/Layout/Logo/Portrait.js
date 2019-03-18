import React from 'react'

export default function Portrait() {
  return (
    <img 
      src = { require('../../assets/selfportrait.png') } 
      alt = "self portrait"
      style = {{
        height: '100%',
        width: 'auto'
      }}
    />
  )
}
