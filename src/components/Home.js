import React from 'react';
import { MdSearch } from 'react-icons/md';
import { MdTrendingUp } from 'react-icons/md';
import { Redirect } from 'react-router-dom'
import { Button, Row, Col } from 'reactstrap';

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
      <div className="home">
        {this.renderRedirect()}
        <Row>
          <Col sm={{size: 4, order: 1, offset: 2}}><Button id="search" color="secondary" size="lg" block onClick={this.setRedirect}>Search Gifs</Button></Col>
          <Col sm={{size: 4, order: 1}}><Button id="trending" color="secondary" size="lg" block onClick={this.setRedirect}>Trending Gifs</Button></Col>

        </Row>
        <Row>
          <Col sm={{size: 4, order: 1, offset: 2}}><MdSearch size={70} /></Col>
          <Col sm={{size: 4, order: 1}}><MdTrendingUp size={70} /></Col>
        </Row>
      </div>
    )
  }

}

export default Home;
