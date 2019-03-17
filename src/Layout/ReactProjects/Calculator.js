import React, { Component } from 'react';
import CalcApp from '../../components/ReactProjects/Calculator/App';

export default
class Calculator extends Component {
  render() {
    return (
      <>
        <i 
          class="fas fa-calculator" 
          style = {{ cursor: 'pointer' }}
          onClick = { this.props.open }
        ></i>
      </>
    );
  }
}