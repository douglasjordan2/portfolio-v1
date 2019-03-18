import React, { Component } from 'react';


export default class ReactButton extends Component {
  render() {
    const { icon, id } = this.props.item
    return (
      <div
        onMouseEnter = { this.props.mouseIn }
        onMouseLeave = { this.props.mouseOut }
        onClick = { () => this.props.toggleReactApp(id) } 
      >{ icon }</div>
    )
  }
}