import React, { Component } from 'react';
import './header.css'
import Navigation from './navigation/navigation'

const Header  = (props) => (
    <header>
        <div className="header-box">
          
            <h1>Here are all recipe for you</h1>
            <a className="btn btn-left-button" href="#"> I am hungry </a>
            <a className="btn btn-right-button" href="#">Show me more </a>

        </div>
        <Navigation/>
    </header>

);

export default Header;