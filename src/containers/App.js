import React, { Component } from 'react';
import './App.css';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import GifsContainer from './GifsContainer';
import GifModal from '../components/GifModal';

class App extends Component {

  state = {
    gifs: [],
    selectedGif: null,
    modalIsOpen: false
  }

  openModal = (gif) => {
    this.setState({
      selectedGif: gif,
      modalIsOpen: true
    })
  }

  closeModal = (gif) => {
    this.setState({
      selectedGif: null,
      modalIsOpen: false
    })
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
        <NavBar />
        <SearchBar fetchGif={this.fetchGif} />
        <GifsContainer gifs={this.state.gifs} selectGif={selectedGif => this.openModal(selectedGif)} />
        <GifModal modalIsOpen={this.state.modalIsOpen}
                  selectedGif={this.state.selectedGif}
                  onRequestClose={() => this.closeModal()} />
      </div>
    );
  }
}

export default App;
