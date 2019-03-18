import React, { Component } from 'react'

export default class ReactContent extends Component {
  state = {
    top: '100%',
    opacity: '0'
  }

  contentStyles = close => {
    return ({
      position: 'absolute',
      top: close ? '0' : this.state.top,
      opacity: close ? '0' : this.state.opacity,
      left: '0',
      width: '100%',
      height: '100%',
      border: '2px solid white',
      padding: '5% 20%',
      background: '#e7e7e7',
      transition: 'all 0.3s ease-out'
    })
  }

  componentDidMount() {
    setTimeout(() => this.setState({ top: '0', opacity: '1' }), 1)
  }

  render() {
    const { content } = this.props.item
    return (
      <div 
        style = { this.contentStyles(this.props.item.close) }
        onMouseEnter = { this.props.mouseIn }
        onMouseLeave = { this.props.mouseOut }
      >
        <div style = {{
          height: '100%'
        }}>
          { content }
        </div>
      </div>
    )
  }
}
