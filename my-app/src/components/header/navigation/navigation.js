import React, { Component } from 'react';
import './navigation.css'

const Navigation  = (props) => (
    <nav >
        <div className="row">
    
            <ul className="main-nav" >
                <li><a href ="#">Food Delivery </a></li>
                <li><a href ="#">How it works </a></li>
                <li><a href ="#">Our cities </a></li>
                <li><a href ="#">Sign in </a></li>
            </ul>

        </div>
    </nav>

);

export default Navigation;