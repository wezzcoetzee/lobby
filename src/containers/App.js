import React, { Component } from 'react';
import Modal from 'react-modal';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.scss';
import Nav from './../components/Nav/Nav';
import Games from './../components/Games/Games';
import Footer from './../components/Footer/Footer';
import gameListData from '../assets/gameListData.json';
import GameDetails from '../components/GameDetails/GameDetails';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: [],
      selectedGame: {},
      showDetails: false,
      showLoginModal: false,
      showRegisterModal: false
    };

    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
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

  showDetails(gameClick, selectedGame) {
    if (gameClick) {
      this.setState({
        showDetails: gameClick,
        selectedGame: selectedGame
      });
    } else {
      if (this.state.selectedGame !== undefined) {
        this.setState({
          showDetails: !this.state.showDetails
        });
      }
    }
  }

  handleModalOpen(type) {
    if (type === 'login') {
      this.setState({ showLoginModal: true });
    } else if (type === 'register') {
      this.setState({ showRegisterModal: true });
    } else {
      return;
    }
  }

  handleModalClose(type) {
    if (type === 'login') {
      this.setState({ showLoginModal: false });
    } else if (type === 'register') {
      this.setState({ showRegisterModal: false });
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        <div className={this.state.showDetails ? 'grid-container-details' : 'grid-container'}>
          <div className='header'><Nav searchClick={(e) => this.gameSearch(e)} loginClick={() => this.handleModalOpen('login')} registerClick={() => this.handleModalOpen('register')} /></div>
          <div className='games'><Games gameList={this.state.gamesList} onClick={(gameClick, selectedGame) => this.showDetails(gameClick, selectedGame)} /></div>
          <div className='details'><GameDetails game={this.state.selectedGame} /></div>  
          <div className='footer'><Footer /></div>
        </div>
        
        <div className={this.state.showDetails ? 'toggle__button menu--toggle details--expanded' : 'toggle__button menu--toggle'} onClick={() => {this.showDetails(false)}}>
          {this.state.showDetails ? (
            <i className="material-icons">
              chevron_right
            </i>
          ) : (
            <i className="material-icons">
              chevron_left
            </i>
          )}
        </div>
        <div className={this.state.showDetails ? 'toggle__button scroll--top details--expanded' : 'toggle__button scroll--top'}>
          <i className="material-icons">
            expand_less
          </i>
        </div>

        <Modal 
           isOpen={this.state.showLoginModal}
           contentLabel="onRequestClose Example"
           onRequestClose={() => this.handleModalClose('login')}
           className="Modal"
           overlayClassName="Overlay"
        >
          <Login handleModalClose={(e) => this.handleModalClose(e)} />
        </Modal>

        <Modal 
           isOpen={this.state.showRegisterModal}
           contentLabel="onRequestClose Example"
           onRequestClose={() => this.handleModalClose('register')}
           className="Modal"
           overlayClassName="Overlay"
        >
          <Register handleModalClose={(e) => this.handleModalClose(e)} />
        </Modal>
      </div>
    );
  }
}

Modal.setAppElement('#root');

export default App;
