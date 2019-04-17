import React, { Component } from 'react';
// import MediaQuery from 'react-responsive';

export default class Pomodoro extends Component {
  state = {
    restMin: 5,
    workMin: 20,
    seconds: 0,
    break: false,
    open: false,
    start: false
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
 
  startPomedoro = () => {
    this.setState({ interval: setInterval(this.timer, 1000), start: !this.state.start })
  }

  render() {
    return (
      <>
      <div>
      <div style = {{
        width: '225px'
      }}>
        <div style = {{
          fontSize: '2rem',
          textAlign: 'center'
        }}>
          <span style = {{ textAlign: 'center', cursor: 'pointer' }} onClick = { () => this.startPomedoro() }>{ this.state.start ? this.state.rest ? 'Rest: ' : 'Work: ' : 'Start: ' }</span>
          { this.state.break ? this.state.restMin : this.state.workMin } : { this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds }
        </div>
        <div style = {{
          fontSize: '0.8rem',
          fontStyle: 'italic',
          marginTop: '10px'
        }}>
          a collaborative effort with &nbsp;
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
      <div>
      <div style = {{
        width: '100px',
      }}>
        <div style = {{
          fontSize: '1.5rem',
          textAlign: 'center'
        }}>
          <span style = {{ textAlign: 'center', cursor: 'pointer', fontSize: '1.2rem' }} onClick = { () => this.startPomedoro() }>{ this.state.start ? this.state.rest ? 'Rest: ' : 'Work: ' : 'Start: ' }</span><br />
          { this.state.break ? this.state.restMin : this.state.workMin } : { this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds }
        </div>
      </div>
      </div>
      </>
    )
  }
}
