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

    return document.removeEventListener('click', this.showCalc)
  }

  showTodo = () => {
    this.setState({ todo: !this.state.todo })

    return document.removeEventListener('click', this.showTodo)
  }

  showAppStyles = active => {
    return ({
      height: '500px',
      width: '420px',
      position: 'absolute',
      top: active ? 'calc(50vh - 250px)' : '100vh',
      left: 'calc(50vw - 210px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#e9e9e9',
      zIndex: active ? '2' : '-1',
      opacity: active ? '1' : '0',
      transition: active ? 'opacity 0.5s ease-in' : 'opacity 0.5s ease-in, top 1s ease-out, z-index 0.1s linear 1s'
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
          onMouseLeave = { this.state.calc ? () => {
            document.addEventListener('click', this.showCalc)
          } : null }
          onMouseEnter = { this.state.calc ? () => {
            document.removeEventListener('click', this.showCalc)
          } : null }
        >
          <div
            style = { close }
            onClick = { () => this.showCalc() }
          >
            <span style = {{ padding: '2px 8px 8px 8px' }}>-</span>
          </div>
          <CalcApp />
        </div>
        <div 
          style = { this.showAppStyles(this.state.todo) }
          onMouseLeave = { this.state.todo ? () => {
            document.addEventListener('click', this.showTodo)
          } : null }
          onMouseEnter = { this.state.todo ? () => {
            document.removeEventListener('click', this.showTodo)
          } : null }
        >
          <div
            style = { close }
            onClick = { () => this.showTodo() }
          >
            <span style = {{ padding: '2px 8px 8px 8px', color: '#e9e9e9' }}>-</span>
          </div>
          <TodoApp />
        </div>
      </>
    )
  }
}

const close = {
  color: 'black',
  fontSize: '3rem',
  position: 'absolute',
  top: '2%',
  right: '3%',
  cursor: 'pointer',
  //background: 'red',
  zIndex: '2',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '15px'
}