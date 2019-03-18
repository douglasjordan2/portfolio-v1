import React, { Component } from 'react';

export default class TopIcons extends Component {
  render() {
    const { icon, id } = this.props.item
    return (
      <span
        onClick = { () => this.props.toggleOpen(id) }
        onMouseEnter = { this.props.mouseIn }
        onMouseLeave = { this.props.mouseOut }
        style = {{
          cursor: 'pointer'
        }}
      >
        { icon }
      </span>
    )
  }
}