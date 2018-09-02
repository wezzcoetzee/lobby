
import React from 'react';
import './Nav.scss';
import netflixlogo from './img/logo.svg';

const nav = () => {
    return (
        <header>
            <section className="logo">
                <img src={netflixlogo} alt="Netflix Logo" />
            </section>
            <section className="actions">
                <div>
                    <input type="text" />
                    <i className="material-icons">search</i>
                </div>
                <div className="button">
                    <button className="primary">Login</button>
                    <button className="secondary">Register</button>
                </div>
            </section>
        </header>
    )
}

export default nav;