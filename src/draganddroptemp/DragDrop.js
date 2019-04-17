import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div style = {{
        height: '100vh',
        width: '100vw',
        position: 'relative'
      }}>
      <Link to="/" style = {{
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        marginTop: '10px'
      }}>Home</Link>
      <Container style = {{
        background: 'gray',
        height: '250px',
        width: '500px',
        color: 'white',
        margin: '100px 50px'
      }}>
        <DragItem
          x = { 100 }
          y = { 100 }
          style = {{ 
            border: '2px solid black', 
            background: 'green',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            width: 120,
            color: 'black'
          }}
        >
          draggable
        </DragItem>
        <DragItem
          x = { 250 }
          y = { 150 }
          style = {{ 
            border: '2px solid blue', 
            background: "yellow",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 75,
            width: 150,
            color: 'black'
          }}
        >
          also draggable
        </DragItem>
        <div style = {{ background: 'blue', cursor: 'pointer', height: 40, width: 80, position: 'absolute', top: 30, left: 300, display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid white' }}>
          fixed
        </div>
      </Container>
      </div>
    )
  }
}

class Container extends Component {
  state = {
    drag: false,
    left: 0,
    top: 0,
    x: 0,
    y: 0,
    maxX: 0,
    maxY: 0
  }

  container = obj => {
    return {
      ...obj,
      position: 'relative',
    }
  }

  componentDidMount() {
    const left = Math.floor(ReactDOM.findDOMNode(this).getBoundingClientRect().left)
    const top = Math.floor(ReactDOM.findDOMNode(this).getBoundingClientRect().top)
    const width = Math.floor(ReactDOM.findDOMNode(this).getBoundingClientRect().width)
    const height = Math.floor(ReactDOM.findDOMNode(this).getBoundingClientRect().height)

    this.setState({ 
      left: left, 
      top: top, 
      maxX: width + left, 
      mexY: height + top 
    })
  }

  setDrag = event => {
    event.stopPropagation();
    this.setState({ drag: !this.state.drag })
  }

  onMouseMove = event => {
    event.stopPropagation();
    this.setState({ x: event.clientX, y: event.clientY })
  }

  render() {
    return (
      <div
        {...this.props}
        style = { this.container(this.props.style) }
        onMouseMove = { event => this.onMouseMove(event) }
      >
        { this.props.children.length > 1 
          ? this.props.children.map(child => {
            if(child.type === DragItem) {
              return (
                <Item
                  {...child.props}
                  newX = { this.state.x - this.state.left }
                  newY = { this.state.y - this.state.top }
                  maxX = { this.state.maxX }
                  maxY = { this.state.maxY }
                  mousein = { this.setDrag }
                  mouseout = { this.setDrag }
                />
              );
            } else {
              return child
            }
          })
          : <>
              {
                this.props.children.type === DragItem 
                  ? <Item 
                      {...this.props.children.props}
                      newX = { this.state.x - this.state.left }
                      newY = { this.state.y - this.state.top }
                      maxX = { this.state.maxX }
                      maxY = { this.state.maxY }
                      mousein = { this.setDrag }
                      mouseout = { this.setDrag }
                    />
                  : this.props.children
              }
          </>
        }
      </div>
    );
  }
}

class Item extends Component {
  state = {
    drag: false,
    x: 0,
    y: 0,
    maxX: 0,
    maxY: 0
  }

  item =  (obj) => {
    return {
      ...obj,
      position: 'absolute',
      cursor: 'pointer',
      top: this.state.drag ? this.props.newY : this.state.y,
      left: this.state.drag ? this.props.newX : this.state.x
    }
  }

  getPosition = event => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({ 
      drag: !this.state.drag, 
      x: this.props.newX, 
      y: this.props.newY
    })
  }

  componentDidMount() {
    const width = Math.floor(ReactDOM.findDOMNode(this).getBoundingClientRect().width)
    const height = Math.floor(ReactDOM.findDOMNode(this).getBoundingClientRect().height)
    this.setState({ 
      x: this.props.x, 
      y: this.props.y,
      maxX: this.props.maxX - width,
      maxY: this.props.maxY - height 
    })
  }

  getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.maxX !== prevState.maxX || nextProps.maxY !== prevState.maxY) {
      this.setState ({
        maxX: nextProps.maxX - this.state.width,
        maxY: nextProps.maxY - this.state.height
      })
    }
    else return null
  }

  render() { console.log(this.state)
    return (
      <div
        {...this.props}
        draggable
        style = { this.item(this.props.style) }
        onMouseDown = { event => this.getPosition(event) }
        onMouseUp = { event => this.getPosition(event) }
        onMouseEnter = { event => this.props.mousein(event) }
        onMouseLeave = { event => this.props.mouseout(event) }
      >
        { this.props.children }
      </div>
    )
  }
}

const DragItem = {}