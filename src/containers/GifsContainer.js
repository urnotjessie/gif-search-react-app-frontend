import React from 'react';
import GifItem from '../components/GifItem';

const GifsContainer = (props) => {
  const gifItems = props.gifs.map((gif) => {
    return <GifItem key={gif.id} gif={gif} />
  });

  return (
    <ul>{gifItems}</ul>
  )
}

export default GifsContainer;
