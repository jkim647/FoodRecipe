import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Ionicon from 'react-ionicons'
import './section.css'



const Section  = (props) => (
    <Container className="">

        <Row className="rowOne">
            
        <Col sm="12"> <h2 className="sectionTitle">Make your own, Share it everyone</h2> </Col>
        <p className="longCopy">Hello, we’re Omnifood, your new premium food delivery service. We know you’re always busy. No time for cooking. So let us take care of that, we’re really good at it, we promise!</p>
        
        </Row>
   
        <Row>
                
                <Col sm="4" className="box">
                    <Ionicon icon="md-heart" fontSize="35%" color="#e67e22"/>
                    <h3>Up to 365 days/year</h3>
                    <p>Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. You can also choose to order more flexibly if that's your style.
</p>
                </Col>

                <Col sm="4" className="box">
                    <Ionicon icon="ios-clock-outline" fontSize="35%" color="#e67e22"/>
                    <h3>Ready in 20 minutes</h3>
                    <p>You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.
                    </p>
                </Col>

                <Col sm="4" className="box">
                    <Ionicon icon="ios-nutrition" fontSize="35%" color="#e67e22"/>
                    <h3>100% organic</h3>
                    <p>All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!</p>
                </Col>


                
                
        </Row>
       
            
    </Container>
    
);

export default Section;
