import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Display.css';

class CalculatorDisplay extends Component {
  render() {
    return (
      <div style = {{
        height: '75px',
        width: '100%',
        backgroundColor: '#000',
        color: 'white',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: '10px',
        fontSize: '3rem'
      }}>
        { this.props.displayVal }
      </div>
    );
  }
}

CalculatorDisplay.propTypes = {
  displayVal: PropTypes.string.isRequired
}

export default CalculatorDisplay;