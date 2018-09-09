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
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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

  handleOpenModal() {
    this.setState({ showModal: true });
  }
  
  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <div className={this.state.showDetails ? 'grid-container-details' : 'grid-container'}>
          <div className='header'><Nav searchClick={(e) => this.gameSearch(e)} loginClick={() => this.handleOpenModal()} /></div>
          <div className='games'><Games gameList={this.state.gamesList} onClick={(e) => this.showDetails(e)} /></div>
          <div className='details'><GameDetails onClick={(e) => this.showDetails(e)} /></div>  
          <div className='footer'><Footer /></div>
        </div>
        <Modal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           className="Modal"
           overlayClassName="Overlay"
        >
          <p>Modal text!</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
      </div>
    );
  }
}

Modal.setAppElement('#root');

export default App;
