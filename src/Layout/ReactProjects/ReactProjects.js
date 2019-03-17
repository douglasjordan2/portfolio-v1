import React, { Component } from 'react';
import Calc from './Calculator';
import CalcApp from '../../components/ReactProjects/Calculator/App';
import Todo from './Todo';
import TodoApp from '../../components/ReactProjects/Todo/App';
import Pomodoro from './Pomodoro';
import PomodoroApp from '../../components/ReactProjects/Pomodoro/Pomodoro';

export default class ReactProjects extends Component {
  state = {
    icons: false,
    app: false,
    calc: false,
    todo: false,
    pomodoro: false,
    pomInfo: false
  }

  showIcons = () => {
    this.setState({ icons: !this.state.icons })
  }

  reactProjects = open => {
    return({
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: '50%',
      fontSize: '2rem',
      position: 'relative',
      marginBottom: '2.5%',
      cursor: 'pointer',

    });
  }

  reactHeader = (open, app) => {
    return ({
      width: '100%',
      height: '100%',
      padding: '15px 0',
      textAlign: 'center',
      fontSize: '1.5rem',
      border: '2px solid white',
      zIndex: open ? '-1' : '1',
      opacity: open ? '0' : '1',
      transition: open ? 'opacity 1s ease-out, z-index 0.1s linear 1s' : 'opacity 1s ease-in',
    });
  }

  reactIcons = (open, app) => {
    return ({
      position: 'absolute',
      top: open ? '0' : '125%',
      border: app ? 'none' : '2px solid white',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      opacity: open ? '1' : `0`,
      zIndex: open ? '2' : '-1',
      transition: open ? 'top 1s ease-out' : 'opacity 1s ease-out, z-index 0.1s linear 1s, top 0.1s linear 1s'
    })
  }

  showApp = () => {
    this.setState(prevState => {
      return {
        icons: prevState.icons,
        app: prevState.app,
        calc: !prevState.calc,
        todo: !prevState.todo 
      }
    })
  }

  hideApp = hide => {
    const set = () => {
      this.setState({
        icons: false,
        app: false,
        calc: false,
        todo: false
      })
      return window.removeEventListener('click', set)
    }

    if(hide) {
      window.addEventListener('click', set)
    } else {
      window.removeEventListener('click', set)
    }
    console.log(this.state)
  }

  showCalc = () => {
    this.setState({ calc: !this.state.calc, app: !this.state.app })
    console.log('hello')
  }

  showTodo = () => {
    this.setState({ todo: !this.state.todo, app: !this.state.app })
    console.log('world')
  }

  showAppStyles = open => {
    return({
      position: 'absolute',
      top: open ? '15vh' : '100vh',
      border: '2px solid gray',
      height: '65%',
      width: '35%',
      padding: '2% 5%',
      background: '#e9e9e9',
      zIndex: open ? '1' : '-1',
      opacity: open ? '1' : '0',
      transition: 'top 0.5s ease, opacity 0.8s ease-in'
    })
  }

  showPomodoro = () => {
    this.setState({ pomodoro: true })
    console.log('hello')
  }

  pomodoroStyles = (open, pomInfo) => {
    return ({
      position: 'absolute',
      bottom: open ? pomInfo ? '3px' : '-20px' : '-25%',
      left: 'calc(55% - 112.5px)'
    });
  }

  showPomInfo = () => {
    this.setState({ pomInfo: !this.state.pomInfo })
  }

  render() { console.log(this.state)
    return (
      <>
        <div 
          style = { this.reactProjects(this.state.app) }
          onMouseEnter = { this.state.app ? () => this.hideApp(false) : () => this.showIcons() }
          onMouseLeave = { this.state.app ? () => this.hideApp(true) : () => this.showIcons() }
        >
          <span style = { this.reactHeader(this.state.icons, this.state.app) }>React Projects</span>
          <div style = { this.reactIcons(this.state.icons, this.state.app) }>
            <Calc 
              open = { this.state.app ? this.state.calc ? this.showCalc : this.showApp : this.showCalc }
            />
            <Todo 
              open = { this.state.app ? this.showApp : this.showTodo }
            />
            <Pomodoro 
              open = { this.showPomodoro }
              start = { this.state.startPomodoro }
            />
          </div>
        </div>
        <div 
          style = { this.showAppStyles(this.state.calc) }
          onMouseEnter = { this.state.app ? () => this.hideApp(false) : null }
          onMouseLeave = { this.state.app ?  () => this.hideApp(true) : null }
        >
          <CalcApp />
        </div>
        <div 
          style = { this.showAppStyles(this.state.todo) }
          onMouseEnter = { this.state.app ? () => this.hideApp(false) : null }
          onMouseLeave = { this.state.app ? () => this.hideApp(true) : null }
        >
          <TodoApp />
        </div>
        <div 
          style = { this.pomodoroStyles(this.state.pomodoro, this.state.pomInfo) }
          onMouseEnter = { () => this.showPomInfo() }
          onMouseLeave = { () => this.showPomInfo() }
        >
          <PomodoroApp />
        </div>
      </>
    )
  }
}