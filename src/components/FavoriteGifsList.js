import React from 'react';
import FavoriteGifItem from './FavoriteGifItem';

const FavoriteGifsList = (props) => {
  const gifItems = props.gifs.map((gif) => {
    return <FavoriteGifItem key={gif.id} gif={gif} />
  });

  return (
    <div className="gifs-container">{gifItems}</div>
  )
}

export default FavoriteGifsList;
