import React, { Component } from 'react';
import { AppContainer } from './styles';
import Content from './Layout/Content/Content';
import DragDrop from './draganddroptemp/DragDrop';
import { Route } from 'react-router-dom';

export default class App extends Component {
  state = {
    mobile: false
  }

  componentDidMount() {
      window.addEventListener("resize", this.resize.bind(this));
      this.resize();
  }

  resize() {
    let current = (window.innerWidth <= 600);
    if(current !== this.state.current)
    this.setState({mobile: current});
  }

  render() {
    return (
      <AppContainer
        mobile = { this.state.mobile }
      >
        <Route 
          path="/" 
          exact render = { props => 
            <Content 
              {...props}
              mobile = { this.state.mobile }
            /> 
          } 
        />
        <Route 
          exact path="/dragdrop" 
          exact component = { DragDrop } 
        />
      </AppContainer>
    );
  }
}

