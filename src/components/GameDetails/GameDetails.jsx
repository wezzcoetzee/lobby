
import React from 'react';
import './GameDetails.scss';

class GameDetails extends React.Component {
  render() {
    return (
      <div className="details__wrapper">
        <section>
          <img src={this.props.game.image} alt={this.props.game.name} />
          <h3>{this.props.game.name}</h3>
          <p>{this.props.game.description}</p>
          <p>Tempreture</p>
          <progress value={this.props.game.heat} max="100"></progress>
        </section>        
      </div>
    )
  }
}

export default GameDetails;
