import React from 'react';
import { MdSearch } from 'react-icons/md';
import { MdTrendingUp } from 'react-icons/md';

class Home extends React.Component {

  handleClick = (event) => {
    console.log(event.target.id)
  }

  render() {
    return (
      <div className="home-form">
        <div onClick={this.handleClick}><MdSearch id="search" size={90} /></div>
        <div onClick={this.handleClick}><MdTrendingUp id="trending" size={90} /></div>
      </div>
    )
  }

}

export default Home;
