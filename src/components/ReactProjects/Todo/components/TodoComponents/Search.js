import React, { Component } from 'react';

import SearchBar from './SearchBar';

export default 
class Search extends Component {
  render() {
    return (
      <div style = {{
        display: 'flex',
        justifyContent: 'space-around',
        position: 'absolute',
        top: '11%',
        right: '2%',
        zIndex: '1',
        width: '48%'
      }}>
        <SearchBar 
          handleChange = { this.props.handleChange }
          search = { this.props.searchVal }
        />
        <button
          onClick = { () => this.props.search() }
        >
          Search
        </button>
      </div>
    )
  }
}
