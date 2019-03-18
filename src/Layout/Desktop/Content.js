import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import TopIcons from '../Desktop/TopIcons/TopIcons';
import TopContentWindows from '../../components/TopIconsContent/TopContentWindows';
import Info from '../../components/TopIconsContent/Info/Content';
import Projects from '../../components/TopIconsContent/Projects/Content';
import Contact from '../../components/TopIconsContent/Contact/Content';
import ReactButton from './ReactProjects/ReactButton';
import ReactContent from  '../../components/ReactProjects/ReactContent';
import Calc from '../../components/ReactProjects/Calculator/App';
import Todo from '../../components/ReactProjects/Todo/App';
import Pomodoro from '../../components/ReactProjects/Pomodoro/Pomodoro';

export default class Left extends Component {
  state = {
    dataTop: [
      {
        icon: <i class="fas fa-info-circle"></i>,
        content: <Info />,
        open: false,
        close: false,
        id: 'info'
      },
      {
        icon: <i class="fas fa-project-diagram"></i>,
        content: <Projects />,
        open: false,
        close: false,
        id: 'projects'
      },
      {
        icon: <i class="far fa-envelope"></i>,
        content: <Contact />,
        open: false,
        close: false,
        id: 'contact'
      }
    ],
    dataBottom: [
      {
        icon: <i class="fas fa-calculator" ></i>,
        content: <Calc />,
        open: false,
        close: false,
        id: 'calc'
      },
      {
        icon: <i class="fas fa-tasks"></i>,
        content: <Todo />,
        open: false,
        close: false,
        id: 'todo'
      },
      {
        icon: <i class="fas fa-user-clock"></i>,
        id: 'pom'
      }
    ],
    windowWidth: '100%',
    hover: false,
    pomOpen: false,
    pomHover: false
  }

  toggleOpen = id => {  
    this.setState({ dataTop: this.state.dataTop.map(item => {
      if(item.id == id) {
        if(item.open) {
          item.close = !item.close
        } else {
          item.open = !item.open
        }
      } else if(item.open) {
        item.close = !item.close;
      }
      return item;
    }), dataBottom: this.state.dataBottom.map(item => {
      if(item.open) {
        item.close = true;
      }
      return item;
    }) })

    setTimeout(() => {
      this.setState({ dataTop: this.state.dataTop.map(item => {
        if(item.close) {
          item.close = false;
          item.open = false;
        }
        return item
      }), dataBottom: this.state.dataBottom.map(item => {
        if(item.close) {
          item.close = false;
          item.open = false;
        }
        return item;
      }) })
    }, 1000)
  }

  openPomodoro = () => {
    this.setState({ pomOpen: !this.state.pomOpen })
  }

  pomHover = () => {
    this.setState({ pomHover: !this.state.pomHover })
  }

  pomodoroStyles = (open, hover) => {
    return ({
      position: 'absolute',
      bottom: open ? hover ? '5px' : '-15px' : '100%',
      left: '70%'
    })
  }

  pomodoroStylesMobile = (open) => {
    return ({
      position: 'fixed',
      bottom: open ? '5px' : '100%',
      right: '0'
    })
  }

  toggleReactApp = id => {
    this.setState({ dataBottom: this.state.dataBottom.map(item => {
      if(item.id == id && id !== 'pom') {
        if(item.open) {
          item.close = !item.close
        } else {
          item.open = !item.open
        }
      } else if(item.id == id && item.id == 'pom') {
        this.openPomodoro()
      } else if(item.open) {
        item.close = !item.close;
      } 
      return item;
    }), dataTop: this.state.dataTop.map(item => {
      if(item.open) {
        item.close = true;
      }
      return item;
    }) })

    setTimeout(() => {
      this.setState({ dataBottom: this.state.dataBottom.map(item => {
        if(item.close) {
          item.close = false;
          item.open = false;
        }
        return item
      }), dataTop: this.state.dataTop.map(item => {
        if(item.open) {
          item.close = false;
          item.open = false;
        }
        return item;
      }) })
    }, 1000)
  }

  windowClickEvent = () => {
    this.windowClickListenerOff();
    this.setState({ dataTop: this.state.dataTop.map(item => {
      if(item.open) {
        item.close = !item.close
      }
      return item;
    }), dataBottom: this.state.dataBottom.map(item => {
      if(item.open) {
        item.close = !item.close
      }
      return item;
    }) })

    setTimeout(() => {
      this.setState({ dataTop: this.state.dataTop.map(item => {
        item.open = false
        return item;
      }), dataTop: this.state.dataTop.map(item => {
        item.open = false
        return item;
      }) })
    }, 400)
  }

  windowClickListenerOn = () => {
    window.addEventListener('click', this.windowClickEvent)
  } 

  windowClickListenerOff = () => {
    window.removeEventListener('click', this.windowClickEvent)
  }

  hover = () => {
    this.setState({ hover: !this.state.hover })
  }

  button = hover => {
    return ({
      border: hover ? '0px solid #e7e7e7' : '2px solid #e7e7e7',
      padding: hover ? '12px 22px' : '10px 20px',
      margin: '5% 0',
      fontSize: hover ? '1.7rem' : '1.3rem',
      cursor: 'pointer',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '175px',
      transition: hover ? 'all 0.2s ease-out' : 'all 0.1s ease-in',
      position: 'relative'
    });
  }

  reactString = hover => {
    return ({
      fontSize: '1.3rem',
      opacity: hover ? '0' : '1',
      zIndex: hover ? '0' : '1',
      transition: 'opacity 0.3s ease-in'
    });
  }

  reactIconStyles = hover => {
    return ({
      position: 'absolute',
      display: 'flex',
      justifyContent: 'space-between',
      width: '150px',
      fontSize: '1.5rem',
      zIndex: hover ? '0' : '1',
      opacity: hover ? '1' : '0',
      transition: 'opacity 0.5s ease-out'
    });
  }

  windowsContainer = () => {
    return ({
      position: 'relative',
      height: '65vh',
      width: this.state.windowWidth,
      transition: this.state.windowWidth == '100%' ? 'none' : 'width 0.5s linear'
    })
  }

  windowsContainerMobile = () => {
    return ({
      position: 'relative',
      height: '75%',
      width: this.state.windowWidth,
      transition: this.state.windowWidth == '100%' ? 'none' : 'width 0.5s linear'
    })
  }

  componentDidMount() {
    setTimeout(() => this.setState({ dataTop: this.state.dataTop.map(item => {
      if(item.id == 'info') {
        item.open = true
      }
      return item;
    }) }), 800)
  }

  render() {
    return (
      <>
      <MediaQuery minWidth = {601}>
      <div style = { desktopLeft }>
        <div style = { topIconsContainer }>
          { this.state.dataTop.map(item => (
            <TopIcons 
              item = { item }
              toggleOpen = { this.toggleOpen }
              mouseIn = { this.windowClickListenerOff }
              mouseOut = { this.windowClickListenerOn }
            />
          )) }
        </div>
        <div 
          style = { this.windowsContainer() }
        >
          { this.state.dataTop.map(item => {
            if(item.open) {
              return (
                <TopContentWindows
                  key = { item.id }
                  item = { item }
                  mouseIn = { this.windowClickListenerOff }
                  mouseOut = { this.windowClickListenerOn }
                />
              );
            }
          }) }
          { this.state.dataBottom.map(item => {
            if(item.open) {
              return (
                <ReactContent 
                  key = { item.id }
                  item = { item }
                  mouseIn = { this.windowClickListenerOff }
                  mouseOut = { this.windowClickListenerOn }
                />
              )
            }
          }) }
        </div>
        <div 
          style = { this.button(this.state.hover) }
          onMouseEnter = { this.state.hover ? null : () => this.hover() }
          onMouseLeave = { this.state.hover ? () => this.hover() : null }
        >
          <span style = { this.reactString(this.state.hover) }>React Projects</span>
          <div style = { this.reactIconStyles(this.state.hover) }>
            { this.state.dataBottom.map(item => (
              <ReactButton 
                item = { item }
                toggleReactApp = { this.toggleReactApp }
                mouseIn = { this.windowClickListenerOff }
                mouseOut = { this.windowClickListenerOn }
              />
            )) }
          </div>
        </div>
        <div 
          style = { this.pomodoroStyles(this.state.pomOpen, this.state.pomHover) }
          onMouseEnter = { this.state.pomHover ? null : () => this.pomHover() }
          onMouseLeave = { this.state.pomHover ? () => this.pomHover() : null }
        >
          <Pomodoro />
        </div>
      </div>
      </MediaQuery>

      <MediaQuery maxWidth = {600}>
      <div style = { mobile }>
        <div style = { topIconsContainerMobile }>
          { this.state.dataTop.map(item => (
            <TopIcons 
              item = { item }
              toggleOpen = { this.toggleOpen }
              mouseIn = { this.windowClickListenerOff }
              mouseOut = { this.windowClickListenerOn }
            />
          )) }
        </div>
        <div 
          style = { this.windowsContainerMobile() }
        >
          { this.state.dataTop.map(item => {
            if(item.open) {
              return (
                <TopContentWindows
                  key = { item.id }
                  item = { item }
                  mouseIn = { this.windowClickListenerOff }
                  mouseOut = { this.windowClickListenerOn }
                />
              );
            }
          }) }
          { this.state.dataBottom.map(item => {
            if(item.open) {
              return (
                <ReactContent 
                  key = { item.id }
                  item = { item }
                  mouseIn = { this.windowClickListenerOff }
                  mouseOut = { this.windowClickListenerOn }
                />
              )
            }
          }) }
        </div>
        <div 
          style = { this.button(this.state.hover) }
          onClick = { this.state.hover ? null : () => this.hover() }
        >
          <span style = { this.reactString(this.state.hover) }>React Projects</span>
          <div style = { this.reactIconStyles(this.state.hover) }>
            { this.state.dataBottom.map(item => (
              <ReactButton 
                item = { item }
                toggleReactApp = { this.toggleReactApp }
                mouseIn = { this.windowClickListenerOff }
                mouseOut = { this.windowClickListenerOn }
              />
            )) }
          </div>
        </div>
        <div 
          style = { this.pomodoroStylesMobile(this.state.pomOpen) }
          onMouseEnter = { this.state.pomHover ? null : () => this.pomHover() }
          onMouseLeave = { this.state.pomHover ? () => this.pomHover() : null }
        >
          <Pomodoro />
        </div>
      </div>
      </MediaQuery>
      </>
    )
  }
}

const desktopLeft = {
  width: '60%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  padding: '0 5%'
}

const mobile = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  padding: '0',
  height: '100vh'
}

const topIconsContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  fontSize: '1.8rem',
  height: '15%'
}

const topIconsContainerMobile = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  fontSize: '1.8rem',
  padding: '5% 0'
}