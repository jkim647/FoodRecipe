import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './sectionThree.css'

const france = require('../.././picture/france.png')
const Itary = require('../.././picture/italy.png')
//const Japan = require('../.././picture/japan.png')
const Korea = require('../.././picture/Korea.png')
const Section_three  = (props) => (

    <Container>
        <Row>
        <Col sm="12"><h2>We currently have these food! </h2></Col>
        </Row>

        <Row>
            <Col sm="3">
                <img className="country" src={france}/>
                <h3>France</h3>
            </Col> 
            <Col sm="3">
                <img className="country" src={Itary}/>
                <h3>Itary</h3>
            </Col> 
           
            <Col sm="3">
                <img className="country" src={Korea}/>
                <h3></h3>
            </Col> 
        </Row>


    </Container>
);

export default Section_three;