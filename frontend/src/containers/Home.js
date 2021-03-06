import React, { Component } from 'react';
import * as io from 'socket.io-client';
// import SideBar from '../components/sideBar';
import '../styles/App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    // var socket = io.connect('http://localhost:3001');
    // socket.on('user',function(obj){
    //   console.log(obj)
    // });
  }

  render() {
    return (
      <div className="mdl-grid mdl-grid--no-spacing">
        <div className="mdl-cell mdl-cell--12-col mdl-grid--no-spacing home-background">
        </div>
        <div className="mdl-cell mdl-cell--12-col mdl-grid--no-spacing backdrop">
          <div className="mdl-cell mdl-cell--12-col mdl-grid--no-spacing home-header">
            <nav className="home-nav">
              <Link className="home-link" to="/blog"><a className="mdl-navigation__link home-link-text">Blog</a></Link>
              <Link className="home-link" to="/about"><a className="mdl-navigation__link home-link-text">About</a></Link>       
            </nav>
          </div>
          <div className="mdl-cell mdl-cell--12-col title">
            <div className="mdl-cell mdl-cell--12-col welcome">Welcome to visit</div>
            <div className="mdl-cell mdl-cell--12-col start-button-div"><Link to="/blog"><button className="start-button">
              Public Blog</button></Link></div>
          </div>        
        </div>
      </div>
    );
  }
}

export default Home;


