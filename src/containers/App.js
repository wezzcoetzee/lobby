import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="header">Header</div>
        <div className="games">Menu</div>
        <div className="details">Main</div>  
        <div className="footer">Right</div>
      </div>
    );
  }
}

export default App;
