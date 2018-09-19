
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
        {/* <div className="toggle__button menu--toggle" onClick={() => {this.props.onClick(false)}}>
          <i className="material-icons">
            chevron_left
          </i>
        </div>
        <div className="toggle__button scroll--top">
          <i className="material-icons">
            expand_less
          </i>
        </div> */}
        {this.props.gameList.map((game, i) => <section className="game__container" key={i}><GameCard game={game} onClick={() => {this.props.onClick(true, game)}} /></section>)}
      </div>
    )
  }
}

export default Games;