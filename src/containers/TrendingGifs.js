import React, { Component } from 'react';
import Gifs from '../components/Gifs';

class SearchGifs extends Component {

  state = {
    trendingGifs: [],
  }


  componentDidMount() {
    fetch(`http://localhost:3001/api/trending`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          trendingGifs: json.data.map(gif => gif)
        })
      })
  }

  render() {
    return (
      <div>
        <Gifs gifs={this.state.trendingGifs} />
      </div>
    )
  }
}

export default SearchGifs;
