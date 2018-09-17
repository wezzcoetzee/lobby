
import React from 'react';
import './Nav.scss';
import netflixlogo from './img/logo.svg';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    }
  }

  updateSearch = (e) => {
    console.log(e.target.value);
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <header>
        <section className="logo">
          <img src={netflixlogo} alt="Netflix Logo" />
        </section>
        <section className="actions">
          <div>
            <input type="text" onChange={this.updateSearch} value={this.state.searchTerm} />
            <a onClick={() => this.props.searchClick(this.state.searchTerm)}><i className="material-icons">search</i></a>
          </div>
          <div className="button">
            <button className="primary" onClick={() => this.props.loginClick()}>Login</button>
            <button className="secondary" onClick={() => this.props.registerClick()}>Register</button>
          </div>
        </section>
      </header>
    )
  }
}

export default Nav;