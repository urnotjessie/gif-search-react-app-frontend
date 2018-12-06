import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    term: ''
  }

  handleChange = (event) => {
    this.setState({
      term: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchGif(this.state.term);
    this.setState({term: ''})
  }

  render() {
    return (
      <div className="under-navbar">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.term} onChange={this.handleChange} placeholder="Enter text to search for gifs!" />
          <input id="submit-button" type="submit" value="Search" />
        </form>
      </div>
    )
  }
}

export default SearchBar;
