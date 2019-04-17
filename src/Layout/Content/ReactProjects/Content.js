import React, { Component } from 'react';
import { ReactProjects } from '../../../Data/ReactProjects';
import Button from './Button';

export default class Content extends Component {
  state = {
    data: ReactProjects,
    flash: false
  }

  show = id => {
    this.setState({ data: this.state.data.map(item => {
      if(item.id === id) {
        item.open = !item.open
      } else {
        item.open = false;
      }
      return item
    }) })
  }

  render() {
    return (
      <>
        <Button 
          data = { this.state.data }
          hover = { this.state.hover }
          animate = { this.animateHover }
          show = { this.show }
        />
      </>
    );
  }
}