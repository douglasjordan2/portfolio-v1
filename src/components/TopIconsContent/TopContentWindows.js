import React, { Component } from 'react';

export default class TopContentWindows extends Component {
  state = {
    top: '-10%',
    height: '0%',
    opacity: '0'
  }

  contentStyles = close => {
    return({
      position: 'absolute',
      width: '100%',
      background: '#e7e7e7',
      border: '2px solid white',
      padding: '5%',
      overflow: 'scroll',
      height: close ? '0%' : this.state.height,
      top: close ? '-10%' : this.state.top,
      opacity: close ? '0' : this.state.opacity,
      transition: 'top 0.5s ease-out, height 0.4s ease-out 0.1s, opacity 0.5s ease'
    })
  }

  showContent = () => {
    return ({
      opacity: this.state.opacity,
      transition: 'opacity 0.5s linear 0.3s'
    })
  }

  componentDidMount() {
    setTimeout(() => this.setState({ top: '0', height: '100%', opacity: '1' }), 1)
  }

  render() {
    const { content, close } = this.props.item
    return (
      <div style = { this.contentStyles(close) }
        onMouseEnter = { this.props.mouseIn }
        onMouseLeave = { this.props.mouseOut }
      >
        <div style = { this.showContent() }>{ content }</div>
      </div>
    )
  }
}
