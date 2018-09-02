import React, { Component } from 'react';
import './App.scss';
import Nav from './../components/Nav/Nav';
import Footer from './../components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="header"><Nav /></div>
        <div className="games">Games</div>
        <div className="details">Details</div>  
        <div className="footer"><Footer /></div>
      </div>
    );
  }
}

export default App;
