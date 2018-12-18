import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTargetGif } from '../actions/fetchGifs';
import FavoriteGifForm from '../components/FavoriteGifForm';

class ShowGif extends Component {

  componentDidMount() {
    this.props.fetchTargetGif(this.props.match.params.id)
  }

  render() {
    if (Object.keys(this.props.targetGif).length !== 0) {
      console.log(this.props.targetGif)
      return (
        <div className="under-navbar">
          <img src={this.props.targetGif.images.original.url} alt="gif" />
          <p>"{this.props.targetGif.title}"</p>
          <p><a href={this.props.targetGif.source}>Check the Source Here!</a></p>
          <FavoriteGifForm gif={this.props.targetGif}/>
        </div>
      )
    } else {
      return <div>loading</div>
    }

  }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchTargetGif: id => dispatch(fetchTargetGif(id)) }
}

const mapStateToProps = (state) => {
  return { targetGif: state.targetGif }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowGif);
