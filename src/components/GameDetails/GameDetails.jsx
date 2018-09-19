
import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import './GameDetails.scss';

class GameDetails extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     selectedGame: ""
  //   }
  // }

  render() {
    return (
      <div className="details__wrapper">
        <section>
          <img src={this.props.game.image} alt={this.props.game.name} />
          <h3>{this.props.game.name}</h3>
          <p>Tempreture</p>
          <progress value={this.props.game.heat} max="100"></progress>
        </section>        
      </div>
    )
  }
}

export default GameDetails;
