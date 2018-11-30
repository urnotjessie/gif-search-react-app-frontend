import React from 'react';
import GifItem from './GifItem';

const Gifs = (props) => {
  const gifItems = props.gifs.map((gif) => {
    return <GifItem key={gif.id} gif={gif} />
  });

  return (
    <div className="gifs-container">{gifItems}</div>
  )
}

export default Gifs;
