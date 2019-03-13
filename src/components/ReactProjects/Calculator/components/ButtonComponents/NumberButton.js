import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumberButton extends Component {
  state = {
    clicked: false
  }

  click = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  btnStyle = clicked => {
    return ({
      cursor: 'pointer',
      background: clicked ? 'black' : 'white',
      border: '1px solid gray',
      height: '20%',
      width: this.props.btn.num === 'clear' || this.props.btn.num == '0' ? '100%' : '32.25%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: this.props.btn.num === 'clear' ? 'none' : 'bold',
      color: clicked ? 'white' : 'black'
    })
  }

  render() {
    const { id } = this.props
    return (
      <div 
        style = { this.btnStyle(this.state.clicked) }
        onClick = { id == 'clear' ? () => this.props.clear() : () => this.props.update(id) }
        onMouseDown = { () => this.click() }
        onMouseUp = { () => this.click() }
      >
        { this.props.btn.num }
      </div>
    );
  }
}

NumberButton.propTypes = {
  btn: PropTypes.object.isRequired
  
}

export default NumberButton;