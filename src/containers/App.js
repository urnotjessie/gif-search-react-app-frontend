import React, { Component } from 'react';
import './App.css';
import SearchBar from '../components/SearchBar';
import GifsContainer from './GifsContainer';

class App extends Component {

  state = {
    gifs: []
  }

  fetchGif = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(json => {

        this.setState({
          gifs: json.data.map(gif => gif)
        })
      })
  }

  render() {
    return (
      <div className="App">
        <SearchBar fetchGif={this.fetchGif}/>
        <GifsContainer gifs={this.state.gifs}/>
      </div>
    );
  }
}

export default App;
