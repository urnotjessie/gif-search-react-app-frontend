import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import TrendingGifs from './containers/TrendingGifs';
import SearchGifs from './containers/SearchGifs';
import ShowGif from './containers/ShowGif';
import ParticlesBackground from './components/ParticlesBackground';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ParticlesBackground />
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/search" component={SearchGifs} />
          <Route exact path="/trending" component={TrendingGifs} />
          <Route exact path="/trending/:id" component={ShowGif} />
        </div>
      </Router>
    );
  }
}

export default App;
