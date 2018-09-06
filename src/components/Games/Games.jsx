
import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Games.scss';
import GameCard from '../GameCard/GameCard';

class Games extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGame: ""
    }
  }
  
  render() {
    return (
      <div className="games__container">
         {this.props.gameList.map((item, i)=><section className="game__container" key={i}><GameCard game={item} /></section>)}
      </div>
    )
  }
}

export default Games;