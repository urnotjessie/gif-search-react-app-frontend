import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Gifs from '../components/Gifs';
import { connect } from 'react-redux';
import { fetchSearchGifs } from '../actions/fetchGifs';

class SearchGifs extends Component {

  render() {
    return (
      <div>
        <SearchBar fetchGif={this.props.fetchSearchGifs} />
        <Gifs gifs={this.props.gifs} />
      </div>
    )

  }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchSearchGifs: term => dispatch(fetchSearchGifs(term)) }
}

const mapStateToProps = (state) => {
  return { gifs: state.gifs }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchGifs);
