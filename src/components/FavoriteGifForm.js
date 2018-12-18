import React, { Component } from 'react';

class FavoriteGifForm extends Component {
  state = {
    source: '',
    images: '',
    title: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.gif);
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
