import React, { Component } from 'react';
import Carousel from './styles';
import { frames } from '../../../Data/Projects';

export default class Content extends Component {
  state = {
    frames: frames,
    visible: {},
    left: {},
    right: {}
  }

  componentDidMount() {
    let frames = this.state.frames;
    let visible = frames[0];
    let left = frames[frames.length - 1];
    let right = frames[1];

    frames = frames.map(frame => {
      if(frame == visible) {
        frame.visible = true;
      } else if(frame == left) {
        frame.left = true;
      } else if(frame.right == right) {
        frame.right = true;
      }
      return frame
    })

    this.setState({ frames: frames, visible: visible, left: left, right: right })
  }
  
  shiftRight = () => {
    let frames = this.state.frames;
    let visible;
    let left;
    let right;

    for(let i = 0; i < frames.length; i++) {
      if(this.state.visible === frames[i]) {
        right = frames[i];
        if(i === 0) {
          visible = frames[frames.length - 1];
          left = frames[frames.length - 2];
        } else if(i === 1) {
          visible = frames[0];
          left = frames[frames.length - 1]
        } else {
          visible = frames[i - 1];
          left = frames[i - 2]
        }
      }
    }

    this.setState({ frames: this.state.frames.map(frame => {
      if(frame === visible) {
        frame.right = false;
        frame.left = false;
        frame.visible = true;
        frame.hold = false;
      } else if(frame === right) {
        frame.left = false;
        frame.visible = false;
        frame.right = true;
        frame.hold = false;
      } else if(frame === left) {
        frame.right = false;
        frame.visible = false;
        frame.left = true;
        frame.hold = true;
      } else {
        frame.right = false;
        frame.visible = false;
        frame.left = false;
        frame.hold = false;
      }
      return frame;
    }), visible: visible, left: left, right: right })
  }

  shiftLeft = () => {
    let frames = this.state.frames;
    let visible;
    let left;
    let right;
    
    for(let i = frames.length - 1; i >= 0; i--) {
      if(this.state.visible === frames[i]) {
        left = frames[i];
        if(i === frames.length - 1) {
          visible = frames[0];
          right = frames[1];
        } else if(i === frames.length - 2) {
          visible = frames[frames.length - 1];
          right = frames[0];
        } else {
          visible = frames[i + 1]
          right = frames[i + 2];
        }
      }
    }

    this.setState({ frames: this.state.frames.map(frame => {
      if(frame === visible) {
        frame.right = false;
        frame.left = false;
        frame.visible = true;
        frame.hold = false;
      } else if(frame === right) {
        frame.left = false;
        frame.visible = false;
        frame.right = true;
        frame.hold = true;
      } else if(frame === left) {
        frame.right = false;
        frame.visible = false;
        frame.left = true;
        frame.hold = false;
      } else {
        frame.right = false;
        frame.visible = false;
        frame.left = false;
        frame.hold = false;
      }
      return frame;
    }), visible: visible, left: left, right: right })
  }

  render() {
    return (
      <Carousel
        shiftLeft = { () => this.shiftLeft() }
        data = { this.state.frames }
        shiftRight = { () => this.shiftRight() }
      />
    );
  }
}