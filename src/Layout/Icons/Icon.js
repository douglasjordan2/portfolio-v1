import React, { Component } from 'react'

export default 
class Icon extends Component {
  contentStyles = visible => {
    return ({
      position: 'absolute',
      top: visible ? '10vh' : '-10px',
      left: '2%',
      border: '1px solid white',
      height: visible ? '65vh' : '0',
      width: '100%',
      overflow: 'scroll',
      opacity: visible ? '1' : '0',
      background: '#e9e9e9',
      display: 'flex',
      flexDirection: 'column',
      padding: visible ? '3%' : '0 3%',
      zIndex: '1',
      marginTop: '4%',
      color: visible ? 'black' : '#e9e9e9',
      zIndex: visible ? '1' : '-1',
      cursor: 'default',
      fontSize: '1rem',
      transition: visible ? 'top 1s ease, height 1s ease 0.5s, padding 1s ease 0.5s' : 'all 1s ease'
    });
  }

  render() {
    const { img, content, id, visible } = this.props.icon
    return (
      <div 
        style = { icon }
      >
        <div
          onClick = { () => this.props.openContent(id) }
          style = {{ cursor: 'pointer' }}
          onMouseEnter = { () => this.props.removeDocClick() }
          onMouseLeave = { () => this.props.addDocClick() }
        >
          { img }
        </div>
        <div 
          style = { this.contentStyles(visible) }
          onMouseEnter = { visible ? () => this.props.removeDocClick() : null }
          onMouseLeave = { visible ? () => this.props.addDocClick() : null }
        >
          { content }
        </div>
      </div>
    )
  }
}

const icon = {
  fontSize: '2rem',
  zIndex: '1',
  color: '#e9e9e9',
}