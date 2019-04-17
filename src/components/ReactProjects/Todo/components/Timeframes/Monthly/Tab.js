import React, { Component } from 'react';
// import MediaQuery from 'react-responsive';
import TodoList from '../../TodoComponents/TodoList';

export default 
class Tab extends Component {
  

  listContainer = () => {
    return ({
      position: 'absolute',
      top: '12%',
      opacity: this.props.activeTab ? '0' : '1',
      transition: 'opacity 1s ease-out',
      height: '100%',
      width: '100%',
      marginLeft: '1%',
      zIndex: this.props.activeTab ? '0' : '1'
    })
  }

  tabStyles = () => {
    return ({
      background: this.props.activeTab ? '#b0aba0' : '#757571',
      border: '1px solid black',
      padding: '1% 2%',
      position: 'absolute',
      top: '0',
      left: '18%',
      opacity: this.props.activeTab ? '0.5' : '1',
      cursor: 'pointer'
    });
  }

  tabStylesMobile = () => {
    return ({
      background: this.props.activeTab ? '#b0aba0' : '#757571',
      border: '1px solid black',
      padding: '1% 2%',
      position: 'absolute',
      top: '0',
      left: '21%',
      opacity: this.props.activeTab ? '0.5' : '1',
      cursor: 'pointer'
    });
  }

  render() {
    return (
      <div style = { container }>
        <div>
        <span 
          style = { this.tabStyles() }
          onClick = { this.props.activeTab ? () => this.props.changeActive() : null }
        >
          Monthly
        </span>
        </div>
        <div>
        <span 
          style = { this.tabStylesMobile() }
          onClick = { this.props.activeTab ? () => this.props.changeActive() : null }
        >
          Monthly
        </span>
        </div>
        <div style = { this.listContainer() }>
          <TodoList 
            todos = { this.props.todos }
            activeTab = { !this.props.activeTab }
            markComplete = { this.props.markComplete }
          />
        </div>
      </div>
    )
  }
}

const container = {
  maxHeight: '70%'
}