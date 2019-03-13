import React, { Component } from 'react'

export default class Pomodoro extends Component {
  state = {
    restMin: 5,
    workMin: 20,
    seconds: 0,
    break: false,
    start: false,
    open: false
  }

  timer = () => {
    this.setState({ seconds: this.state.seconds == 0 ? 59 : this.state.seconds - 1 });

    if(this.state.break) {
      this.setState({ restMin: this.state.seconds == 0 ? this.state.restMin - 1 : this.state.restMin == 5 ? 4 : this.state.restMin })
      
      if(this.state.restMin == -1) {
        this.setState({ restMin: 5, break: false })
      }

    } else {
      this.setState({ workMin: this.state.seconds == 0 ? this.state.workMin - 1 : this.state.workMin == 20 ? 19 : this.state.workMin })

      if(this.state.workMin == -1) {
        this.setState({ workMin: 20, break: true })
      }
    }
  }
 
  startPomodora = () => {
    this.setState({ interval: setInterval(this.timer, 1000), start: true })
  }

  openPomodoro = () => {
    this.setState({ open: !this.state.open })
  }

  btnStyles = open => {
    return ({
      position: 'absolute',
      top: '5vh',
      right: '5vh',
      border: '2px solid white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0',
      fontSize: '1.3rem',
      cursor: 'pointer',
      minHeight: '30px',
      minWidth: '125px',
    });
  }

  pomodoroStyles = open => {
    return ({
      textAlign: 'center',
      fontSize: '2rem',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      right: open ? '0' : '-350px',
      opacity: open ? '1' : '0',
      top: 'calc(5vh + 50px)',
      right: '5vh',
      transition: 'all 0.8s ease-in 0.2s',
    });
  }

  render() {
    return (
      <div style = {{
        fontSize: '2rem',
        fontStyle: 'italic',
      }}>
        <div
          onClick = { () => this.openPomodoro() }
          style = { this.btnStyles(this.state.open) }
        >Pomodoro</div>
        <div style = { this.pomodoroStyles(this.state.open) }>
          <div 
            style = {{ display: 'flex' }}
          >
            { this.state.start ? this.state.break ? 'Rest:' : 'Work:' : <div style = {{ cursor: 'pointer' }} onClick = { () => this.startPomodora() }>Start: </div> }
            &nbsp;
            <div 
              style = {{ 
                fontStyle: 'normal', 
                background: 'white', 
                color: 'black', 
                width: '124px', 
                border: '2px solid white' 
              }}
            >
              { this.state.break ? this.state.restMin : this.state.workMin } : { this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds }
            </div>
          </div>
          <div
            style = {{
              fontSize: '1rem',
              marginTop: '15px'
            }}
          >
            a collaborative effort with<br />
            <a 
              href="https://github.com/csinozich"
              style = {{
                color: 'white'
              }}
            >
              Claire Sinozich
            </a>
          </div>
        </div>
      </div>
    )
  }
}
