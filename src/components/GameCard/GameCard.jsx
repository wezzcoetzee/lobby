
import React from 'react';
import './GameCard.scss';

class GameCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      propularity: 0
    }
  }

  showDetails = () => {
    this.props.onClick();
  }

  render() {
    return (
      <div className="game__card" onClick={this.showDetails}>
        <img src="https://via.placeholder.com/250x200" alt={this.props.game.name} />
        <span>{this.props.game.name}</span>
      </div>
    )
  }
}

export default GameCard;