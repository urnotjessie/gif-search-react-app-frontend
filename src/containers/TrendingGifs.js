import React, { Component } from 'react';
import { connect } from 'react-redux';
import Gifs from '../components/Gifs';
import { fetchGifs } from '../actions/fetchGifs';

class TrendingGifs extends Component {

  componentDidMount() {
    this.props.fetchGifs()
  }

  render() {
    return (
      <div>
        <Gifs gifs={this.props.trendingGifs} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchGifs: () => dispatch(fetchGifs()) }
}

const mapStateToProps = (state) => {
  return {trendingGifs: state.trendingGifs}
}

export default connect(mapStateToProps, mapDispatchToProps)(TrendingGifs);
