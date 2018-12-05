import React from 'react';
import { Redirect } from 'react-router-dom'

class GifItem extends React.Component {
   state = {
     redirect: false,
   }

   setRedirect = () => {
     this.setState({
       redirect:true,
     })
   }

   renderRedirect = (id) => {
     if (this.state.redirect) {
       return <Redirect to={`/trending/${id}`} />
     }
   }

   render() {
     return (
       <div className="gif-item">
        {this.renderRedirect(this.props.gif.id)}
         <img src={this.props.gif.images.fixed_width.url} alt="gif" onClick={this.setRedirect}/>
       </div>
     )
   }
}
// const GifItem = (props) => {
//
//   return (
//     <div className="gif-item">
//       <img src={props.gif.images.fixed_width.url} alt="gif" />
//     </div>
//   )
// }
//
export default GifItem;
