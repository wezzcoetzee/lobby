
import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import './GameDetails.scss';

class GameDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGame: ""
    }
  }

  render() {
    return (
      <div>
        <div className="toggle__button menu--toggle" onClick={() => {this.props.onClick(false)}}>
          <i className="material-icons">
            chevron_left
          </i>
        </div>
        <div className="toggle__button scroll--top">
          <i className="material-icons">
            expand_less
          </i>
        </div>
      </div>
    )
  }
}

export default GameDetails;
