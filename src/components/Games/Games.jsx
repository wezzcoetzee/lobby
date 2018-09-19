
import React from 'react';
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
        {this.props.gameList.map((game, i) => <section className="game__container" key={i}><GameCard game={game} onClick={() => {this.props.onClick(true, game)}} /></section>)}
      </div>
    )
  }
}

export default Games;