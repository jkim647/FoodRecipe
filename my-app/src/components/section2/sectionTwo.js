import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './sectionTwo.css'

const imageName = require('../.././picture/app-iPhone.png')
const Section_two  = (props) => (

    
<Container>
    <Row className="sectionTwo">
        <Col sm="12"><h2>How it works &mdash; Simple as 1, 2, 3</h2></Col>

    </Row>

    <Row>
        <Col sm="6" className="step-box">
            <img className="app-screen" src={imageName}/>   
        </Col>

         <Col sm="6" className="step-box">
            <div className="work-step">
                <div>1</div>
                <p> choose the subscription plan tha best fits your needs and sign up today </p>
            </div>

            <div className="work-step">
                <div>2</div>
                <p> choose the subscription plan tha best fits your needs and sign up today </p>
            </div>

            <div className="work-step">
                <div>3</div>
                <p> choose the subscription plan tha best fits your needs and sign up today </p>
            </div>
        </Col>

        
    </Row>
    

</Container>

);


export default Section_two;