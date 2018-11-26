import React from 'react';

const GifItem = (props) => {
  return (
    <li>
      <img src={props.gif.images.original.url} alt="gif"/>
    </li>
  )
}

export default GifItem;
