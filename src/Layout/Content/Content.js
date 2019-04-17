import React, { Component } from 'react';
import TopIcons from './TopIcons/Content';
import ReactContent from  './ReactProjects/Content';
import Pomodoro from '../../components/ReactProjects/Pomodoro/Pomodoro';

import { PageContainer, TopIconsContainer, Signature } from './styles';

export default class Left extends Component {
  state = {
    pomOpen: false,
    pomHover: false
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
      display: open ? 'block' : 'none',
      left: '70%'
    })
  }

  pomodoroStylesMobile = (open) => {
    return ({
      position: 'fixed',
      bottom: open ? '5px' : '200%',
      display: open ? 'block' : 'none',
      right: '0'
    })
  }

  render() {
    return (
      <PageContainer>
        <TopIconsContainer>
          <TopIcons />
        </TopIconsContainer>
        <Signature />
        <p style = {{
          fontStyle: 'italic',
          paddingBottom: '5px'
        }}>minimalism represents perfection in aesthetics until i'm happy with how this site looks</p>
        {/* <ReactContent /> */}
      </PageContainer>
    )
  }
}