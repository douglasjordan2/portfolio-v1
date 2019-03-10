import React, { Component } from 'react'

export default 
class Todo extends Component {
  render() {
    return (
      <div>
        <i 
          class="fas fa-tasks"
          onClick = { () => this.props.show() }
          style = {{ cursor: 'pointer' }}
        ></i>
      </div>
    )
  }
}
