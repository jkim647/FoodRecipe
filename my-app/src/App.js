import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/header/header';
import Section from './components/section/section';
import Section_one from './components/section1/sectionOne';
import Section_two from './components/section2/sectionTwo';
import Section_three from './components/section3/sectionThree'

class App extends Component {
  render() {
    return (
    
    <div>
        
        <Header/>
        <Section/>
        <Section_one/>

        
        <Section_two/>
        <Section_three/>
      
     
        
        </div>

    );
  }
}

export default App;
