import React from 'react';
import { MdSearch } from 'react-icons/md';
import { MdTrendingUp } from 'react-icons/md';
import { Redirect } from 'react-router-dom'

class Home extends React.Component {
  state = {
    redirect: false,
    path: ""
  }

  setRedirect = (event) => {
    this.setState({
      redirect:true,
      path: event.target.id
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={`/${this.state.path}`} />
    }
  }

  render() {
    return (
      <div className="home-form">
        {this.renderRedirect()}
        <div onClick={this.setRedirect}><MdSearch id="search" size={90} /></div>
        <div onClick={this.setRedirect}><MdTrendingUp id="trending" size={90} /></div>
      </div>
    )
  }

}

export default Home;
