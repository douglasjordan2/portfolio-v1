import React, { Component } from 'react';
import Calculator from './Calculator';
import CalcApp from './Calculator/App';
import Todo from './Todo';
import TodoApp from './Todo/App';

export default 
class ReactProjects extends Component {
  state = {
    active: false,
    calc: false,
    todo: false
  }

  open = () => {
    this.setState({ active: true })
  }

  close = () => {
    this.setState({ active: false })
  }

  buttonStyles = active => {
    return ({
      border: '2px solid #e9e9e9',
      height: active ? '60px' : '30px',
      textAlign: 'center',
      width: active ? '180px' : '125px',
      marginTop: active ? '2%' : '8%',
      transition: 'all 0.5s ease-out',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'default'
    });
  }

  containerStyles = active => {
    return ({
      display: 'flex',
      justifyContent: 'space-around',
      width: '75%',
      fontSize: '2rem',
    });
  }

  showCalc = () => {
    this.setState({ calc: !this.state.calc })
  }

  showTodo = () => {
    this.setState({ todo: !this.state.todo })
  }

  showAppStyles = active => {
    return ({
      height: '500px',
      width: '420px',
      position: 'absolute',
      top: 'calc(50vh - 250px)',
      left: 'calc(50vw - 210px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#e9e9e9',
      zIndex: active ? '2' : '-1',
      opacity: active ? '1' : '0',
      transition: 'opacity 1s ease-in'
    });
  }

  render() {
    return (
      <>
        <div style = { this.buttonStyles(this.state.active) }
          onMouseEnter = { () => this.open() }
          onMouseLeave = { () => this.close() }
        >
          { this.state.active ? <div style = { this.containerStyles(this.state.active) }> <Calculator active = { this.state.calc } show = { this.showCalc } /> <br /> <Todo active = { this.state.active } show = { this.showTodo } /> </div> : `React Projects` }
        </div>
        <div
          style = { this.showAppStyles(this.state.calc) }
        >
          <div
            style = { close }
            onClick = { () => this.showCalc() }
          >
            <span style = {{ padding: '2px 8px 8px 8px'}}>-</span>
          </div>
          <CalcApp />
        </div>
        <div 
          style = { this.showAppStyles(this.state.todo) }
        >
          <div
            style = { close }
            onClick = { () => this.showTodo() }
          >
            <span style = {{ padding: '2px 8px 8px 8px'}}>-</span>
          </div>
          <TodoApp />
        </div>
      </>
    )
  }
}

const close = {
  color: 'black',
  fontSize: '2rem',
  position: 'absolute',
  top: '2%',
  right: '3%',
  cursor: 'pointer',
  background: 'red',
  zIndex: '2',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '15px'
}