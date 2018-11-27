import React from 'react';

const GifItem = (props) => {
  return (
    <div className="gif-item">
      <img src={props.gif.images.fixed_width.url} alt="gif" onClick={() => props.selectGif(props.gif)}/>
    </div>
  )
}

export default GifItem;
