
import React from 'react';
import './GameCard.scss';

class GameCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      propularity: 0
    }
  }

  render() {
    return (
      <div className="game__card">
        <img src="https://via.placeholder.com/200x150" alt={this.props.game.name} />
        {/* {this.props.game.name} */}
      </div>
    )
  }
}

export default GameCard;