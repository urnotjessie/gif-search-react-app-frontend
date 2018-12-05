import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTargetGif } from '../actions/fetchGifs';

class ShowGif extends Component {

  componentDidMount() {
    this.props.fetchTargetGif(this.props.match.params.id)
  }

  render() {
    if (Object.keys(this.props.targetGif).length !== 0) {
      return (
        <div>
          <img src={this.props.targetGif.images.fixed_width.url} alt="gif" />
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
