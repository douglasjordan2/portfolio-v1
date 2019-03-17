import React from 'react';

export default function Pomodoro(props) {
  return (
    <i 
      class="fas fa-user-clock"
      onClick = { (event) => {
        event.stopPropagation()
        return props.open()
      } }
    ></i>
  )
}
