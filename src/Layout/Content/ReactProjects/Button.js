import React, { Component } from 'react';
import { ReactButton, ReactString, Icons } from './styles';
import { Icon } from '../TopIcons/styles';

export default class Button extends Component {
  state = {
    hover: false
  }

  animate = () => {
    this.setState({ hover: !this.state.hover })
  }

  render() {
    return (
      <ReactButton
        animate = { () => this.animate() }
        hover = { this.state.hover }
      >
        { !this.state.hover ? 
          <ReactString>React Projects</ReactString>
          :
          <Icons
            hover = { this.state.hover }
          >
            { this.props.data.map(item => (
              <Icon
                show = { this.props.show }
                id = { item.id }
              >
                { item.icon }
              </Icon>
            )) }
          </Icons>
        }
      </ReactButton>
    )
  }
}