import React from 'react';

class FavoriteGifItem extends React.Component {

  renderGif = () => {
    if (this.props.gif.images) {
      return <img src={this.props.gif.images} alt="gif" />
    }
  }

   render() {
     console.log(this.props)
     return (
       <div className="gif-item">
         {this.renderGif()}
       </div>
     )
   }
}

export default FavoriteGifItem;
