import React, { Component } from 'react'

export default 
class extends Component {
  containerStyles = (isActive, position, isComplete) => {
    return ({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isComplete ? '2px' : '2%',
      border: '1px solid black',
      opacity: isActive ? '1' : '0',
      marginTop: isActive ? '1.5%' : '5%',
      marginBottom: '0',
      transition: isComplete ? `all 1s ease-out` : `margin-top 1s ease-out ${position / 5}s, opacity 1s ease-out ${position / 3}s`,
      background: '#6abed8',
      cursor: 'pointer',
      width: '97%',
      fontSize: '1rem'
    });
  }

  h1Styles = isComplete => {
    return ({
      paddingLeft: '1%',
      opacity: isComplete ? '0.3' : '1',
      textDecoration: isComplete ? 'line-through' : 'none',
      transition: isComplete ? 'all 1s ease-out' : 'none',
      fontSize: isComplete ? '0.8rem' : '1rem'
    });
  }

  render() {
    const { title, id, position, complete } = this.props.todo;
    return (
      <div 
        style = { this.containerStyles(this.props.activeTab, position, complete) }
        onClick = { () => this.props.markComplete(id) }
      >
        <h1 style = { this.h1Styles(complete) }>{ title }</h1>
      </div>
    )
  }
}