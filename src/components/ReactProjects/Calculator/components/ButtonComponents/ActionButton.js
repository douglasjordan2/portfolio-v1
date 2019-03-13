import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ActionButton extends Component {
  state = {
    clicked: false
  }

  clicked = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  btnStyle = clicked => {
    return ({
      background: clicked ? 'white' : '#464646',
      color: clicked ? '#464646' : 'white',
      height: '20%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid gray',
      cursor: 'pointer'
    });
  }

  render() {
    const { id } = this.props
    return (
      <div
        onClick = { id == '=' ? () => this.props.calculate() : () => this.props.setOperator(id) }
        style = { this.btnStyle(this.state.clicked) }
        onMouseDown = { () => this.clicked() }
        onMouseUp = { () => this.clicked() }

      >
        { this.props.btn.act }
      </div>
    );
  }
}

ActionButton.propTypes = {
  btn: PropTypes.object.isRequired
}

export default ActionButton;