import React, { Component } from 'react';
import { connect } from 'react-redux';
import FavoriteGifsList from '../components/FavoriteGifsList';
import { fetchFavoriteGifs } from '../actions/fetchGifs';

class FavoriteGifs extends Component {

  componentDidMount() {
    this.props.fetchFavoriteGifs()
  }

  render() {
    return (
      <div>
        <FavoriteGifsList gifs={this.props.favoriteGifs} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchFavoriteGifs: () => dispatch(fetchFavoriteGifs()) }
}

const mapStateToProps = (state) => {
  return {favoriteGifs: state.favoriteGifs}
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteGifs);
