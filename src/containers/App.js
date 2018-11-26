import React, { Component } from 'react';
import './App.css';
import SearchBar from '../components/SearchBar';

class App extends Component {

  state = {
    gifs: []
  }

  fetchGif = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(json => {
        debugger
        this.setState({
          gifs: json.data.map(gif => gif.images.original.url)
        })
      })
  }

  render() {
    return (
      <div className="App">
        <SearchBar fetchGif={this.fetchGif}/>
        {/*<GifsContainer />*/}
      </div>
    );
  }
}

export default App;
