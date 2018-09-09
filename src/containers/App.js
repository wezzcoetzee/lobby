import React, { Component } from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.scss';
import Nav from './../components/Nav/Nav';
import Games from './../components/Games/Games';
import Footer from './../components/Footer/Footer';
import gameListData from '../assets/gameListData.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: [],
      selectedGame: {},
      showDetails: false
    };

    // this.gameSearch = this.gameSearch.bind(this)
  }

  componentDidMount() {
    this.fetchGameList();
  }

  fetchGameList() {
    // fetch('../assets/gameListData.json')
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json);
    //     this.setState({
    //       gamesList: json
    //     });
    //   });
    this.setState({
      gamesList: gameListData
    });
  }

  gameSearch(searchTerm) {
    console.log(searchTerm);
  }

  showDetails(e) {
    if (e) {
      this.setState({
        showDetails: e
      });
    } else {
      this.setState({
        showDetails: !this.state.showDetails
      });
    }
  }

  render() {
    return (
      <div className={this.state.showDetails ? 'grid-container-details' : 'grid-container'}>
        <div className='header'><Nav onClick={(e) => this.gameSearch(e)} /></div>
        <div className='games'><Games gameList={this.state.gamesList} onClick={(e) => this.showDetails(e)} /></div>
        <div className='details'>Details</div>  
        <div className='footer'><Footer /></div>
      </div>
    );
  }
}

export default App;
