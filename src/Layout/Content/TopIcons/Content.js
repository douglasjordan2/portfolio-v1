import React, { Component } from 'react';
import { TopContentData } from '../../../Data/TopContent';
import { Icon, ContentWindow } from './styles';

export default class TopIcons extends Component {
  state = {
    data: TopContentData,
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

  componentDidMount() {
    setTimeout(() => this.setState({ flash: true }), 1000)
    setTimeout(() => this.setState({ flash: false }), 2000)
  }

  render() {
    return (
      <>
        { this.state.data.map(item => (
          <Icon
            show = { this.show }
            id = { item.id }
            flash = { this.state.flash }
          >
            { item.icon }
          </Icon>
        )) }
        <ContentWindow 
          data = { this.state.data }
          top = { '-100%' }
        />
      </>
    )
  }
}