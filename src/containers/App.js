import React, { Component } from 'react';
import Modal from 'react-modal';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.scss';
import Nav from './../components/Nav/Nav';
import Games from './../components/Games/Games';
import Footer from './../components/Footer/Footer';
import gameListData from '../assets/gameListData.json';
import GameDetails from '../components/GameDetails/GameDetails';

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

    this.handleLoginModalClose = this.handleLoginModalClose.bind(this);
    this.handleRegisterModalClose = this.handleRegisterModalClose.bind(this);
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

  handleLoginModalClose() {
    this.setState({ showLoginModal: false });
  }

  handleRegisterModalClose() {
    this.setState({ showRegisterModal: false });
  }

  render() {
    return (
      <div>
        <div className={this.state.showDetails ? 'grid-container-details' : 'grid-container'}>
          <div className='header'><Nav searchClick={(e) => this.gameSearch(e)} loginClick={() => this.handleModalOpen('login')} registerClick={() => this.handleModalOpen('register')} /></div>
          <div className='games'><Games gameList={this.state.gamesList} onClick={(e) => this.showDetails(e)} /></div>
          <div className='details'><GameDetails onClick={(e) => this.showDetails(e)} /></div>  
          <div className='footer'><Footer /></div>
        </div>

        <Modal 
           isOpen={this.state.showLoginModal}
           contentLabel="onRequestClose Example"
           onRequestClose={() => this.handleModalClose('login')}
           className="Modal"
           overlayClassName="Overlay"
        >
          <p>Login Modal</p>
          <button className="primary" onClick={() => this.handleModalClose('login')}>Okay</button>
          <button className="secondary" onClick={() =>this.handleModalClose('login')}>Cancel</button>
        </Modal>

        <Modal 
           isOpen={this.state.showRegisterModal}
           contentLabel="onRequestClose Example"
           onRequestClose={() => this.handleModalClose('register')}
           className="Modal"
           overlayClassName="Overlay"
        >
          <p>Register Modal</p>
          <button className="primary" onClick={() => this.handleModalClose('register')}>Okay</button>
          <button className="secondary" onClick={() => this.handleModalClose('register')}>Cancel</button>
        </Modal>
      </div>
    );
  }
}

Modal.setAppElement('#root');

export default App;
