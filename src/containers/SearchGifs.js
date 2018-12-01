import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Gifs from '../components/Gifs';


class SearchGifs extends Component {

  state = {
    gifs: [],
  }

  fetchGif = (query) => {
    fetch(`http://localhost:3001/api/search?q=${query}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          gifs: json.data.map(gif => gif)
        })
      })
  }

  render() {
    return (
      <div>
        <SearchBar fetchGif={this.fetchGif} />
        <Gifs gifs={this.state.gifs} />
      </div>
    )

  }
}

export default SearchGifs;
