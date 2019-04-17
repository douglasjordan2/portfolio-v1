import React, { Component } from 'react';

const Container = props => {
  const container = {
    width: '100%', 
    height: '100%', 
    position: 'relative', 
    background: 'gray',
    display: 'flex',
    justifyContent: 'space-between'
  }

  return (
    <div 
      style = { container }
    >
      { props.children }
    </div>
  );
}

const Arrow = props => {
  const arrow = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    background: 'gray',
    cursor: 'pointer',
    zIndex: '3'
  }

  return (
    <div 
      onClick = { () => props.shift() }
      style = { arrow }
      onMouseEnter = { () => props.check(props.id) }
    >
      { props.name }
    </div>
  );
}

const InfoOverlay = props => {
  const overlay = info => {
    return {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: info ? '1' : '-1',
      background: 'black',
      opacity: info ? '0.9' : '0',
      transition: 'all 1s ease',
      fontStyle: 'italic'
    }
  }

  const close = {
    position: 'absolute',
    color: 'white',
    top: '2%',
    right: '8.5%',
    fontFamily: 'Arial, Helvetica, sans-serif',
    cursor: 'pointer',
    fontSize: '1rem',
    fontStyle: 'none'
  }

  return (
    <div
      style = { overlay(props.info) }
    >
      <span
        style = { close }
        onClick = { () => props.hideInfo() }
      >X</span>
      <span>{ props.children }</span>
    </div>
  )
}

const InfoIcon = props => {
  const container = {
    background: 'black',
    borderRadius: '12px',
    bottom: '2%',
    padding: '3px 3px 2px 2.5px',
    right: '8.5%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  }
  
  const icon = {
    color: 'white',
    fontSize: '1rem',
    padding: '0',
    margin: '0'
  }

  return (
    <div
      style = { container }
    >
      <i class="fas fa-info-circle"
        style = { icon }
        onClick = { () => props.showInfo() }
      ></i>
    </div>
  );
}

class Slides extends Component {
  state = {
    info: false
  }

  slideContainer = (visible, left, right, check) => {
    return {
      right: right ? '-150%' : left ? '150%' : visible ? '0' : '-300%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      position: 'absolute',
      bottom: '0',
      transition: check ? left ? 'right 1s ease' : visible ? 'right 1s ease' : 'none' : right ? 'right 1s ease' : visible ? 'right 1s ease' : 'none',
    }
  }

  slide = {
    transform: 'scale(0.68)', 
    background: 'white', 
    position: 'absolute',
    top: '-22.5%',
    right: '-12.5%'
  }

  showInfo = () => {
    this.setState({ info: true })
  }

  hideInfo = () => {
    this.setState({ info: false })
  }

  render() {
    return(
      <React.Fragment>
        { this.props.data.map(item => ( 
          <div 
            style={ this.slideContainer(item.visible, item.left, item.right, this.props.check) }
          >
            <iframe 
              item = { item }
              src = { item.src }
              width = "125%" 
              height = "145%"
              style = { this.slide }
            ></iframe>
            <InfoOverlay
              hideInfo = { this.hideInfo }
              info = { this.state.info }
            >
              { item.info }
            </InfoOverlay>
            <InfoIcon 
              showInfo = { this.showInfo }
            />
          </div>
        )) }
      </React.Fragment>
    )
  }
}

export default class Carousel extends Component {
  state = {
    check: false
  }  

  toggle = id => {
    this.setState({ check: id === 'left' ? true : false })
  }

  render() {
    return (
      <Container>
        <Arrow 
          shift = { () => this.props.shiftRight() }
          name = { '<' }
          id = { 'right' }
          check = { this.toggle }
        />
          <Slides 
            {...this.props}
            check = { this.state.check }
          />
        <Arrow 
          shift = { () => this.props.shiftLeft() }
          name = { '>' }
          id = { 'left' }
          check = { this.toggle }
        />
      </Container>
    );
  }
}