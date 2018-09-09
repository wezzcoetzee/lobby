
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

  showDetails = () => {
    this.props.onClick();
  }

  render() {
    return (
      <div className="games__container">
        <div className="toggle__button menu--toggle" onClick={this.showDetails}>
          <i className="material-icons">
            chevron_left
          </i>
        </div>
        <div className="toggle__button scroll--top">
          <i className="material-icons">
            expand_less
          </i>
        </div>
        {/* <div className="menu--toggle"></div> */}
        {this.props.gameList.map((item, i) => <section className="game__container" key={i}><GameCard game={item} /></section>)}
      </div>
    )
  }
}

export default Games;