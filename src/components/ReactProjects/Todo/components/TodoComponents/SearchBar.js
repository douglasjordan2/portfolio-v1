import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <input 
        name="search"
        value = { this.props.search }
        type="text"
        onChange = { this.props.handleChange }
        style = {{ 
          marginRight: '5%' ,
          borderRadius: '5px',
          width: '62%',
          height: '15px'
        }}
      />
    )
  }
}
