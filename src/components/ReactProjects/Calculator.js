import React, { Component } from 'react';
import CalcApp from './Calculator/App';

export default
class Calculator extends Component {
  showCalc = active => {
    return ({
      display: active ? 'block' : 'none',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      background: 'green'
    });
  }

  render() {
    return (
      <>
        <i 
          class="fas fa-calculator" 
          onClick = { () => this.props.show() }
          style = {{ cursor: 'pointer' }}
        ></i>
      </>
    );
  }
}