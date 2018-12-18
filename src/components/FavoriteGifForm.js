import React, { Component } from 'react';

class FavoriteGifForm extends Component {
  state = {
    source: this.props.gif.source,
    images: this.props.gif.images.fixed_width.url,
    title: this.props.gif.title
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createFavoriteGif(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="submit" value="Add to Favorite Gifs" />
      </form>
    )
  }
}

export default FavoriteGifForm;
