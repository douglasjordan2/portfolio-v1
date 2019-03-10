import React, { Component } from 'react';
import NumberButton from './NumberButton';
import PropTypes from 'prop-types';
import './Button.css';

class Numbers extends Component {
  render() {
    return (
      this.props.numButtons.map(btn => (
        <NumberButton 
          key = { btn.num }
          btn = { btn }
          id = { btn.num }
          update = { this.props.update }
          clear = { this.props.clear }
        />
      ))
    );
  }
}

Numbers.propTypes = {
  numButtons: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired
}

export default Numbers;