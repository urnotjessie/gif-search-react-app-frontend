import React, { Component } from 'react';
import Gifs from '../components/Gifs';

class SearchGifs extends Component {

  state = {
    trendingGifs: [],
  }


  componentDidMount() {
    fetch(`http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&rating=g`)
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
