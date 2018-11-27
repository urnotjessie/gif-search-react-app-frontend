import React from 'react';
import GifItem from '../components/GifItem';

const GifsContainer = (props) => {
  const gifItems = props.gifs.map((gif) => {
    return <GifItem key={gif.id} gif={gif} selectGif={props.selectGif} />
  });

  return (
    <div className="gifs-container">{gifItems}</div>
  )
}

export default GifsContainer;
