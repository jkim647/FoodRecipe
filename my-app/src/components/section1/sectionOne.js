import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './section_one.css'



const imageName = require('../.././picture/1.jpg')
const imageName_2 = require('../.././picture/2.jpg')
const imageName_3 = require('../.././picture/3.jpg')
const imageName_4 = require('../.././picture/4.jpg')
const imageName_5 = require('../.././picture/5.jpg')
const imageName_6 = require('../.././picture/6.jpg')
const imageName_7 = require('../.././picture/7.jpg')
const imageName_8 = require('../.././picture/8.jpg')
const Section_one  = (props) => (
    
   
    <div>
       <ul className="meals-showcase">
           <li>
               <figure className="meal-photo">
                    <img src={imageName} />
                </figure>
            </li>
            
            <li>
                <figure className="meal-photo">
                    <img src={imageName_2} />
                </figure>
            </li>

            <li>
                <figure className="meal-photo">
                    <img src={imageName_3} />
                </figure>
            </li>

            <li>
            <figure className="meal-photo">
                <img src={imageName_4} />
            </figure>
            </li>

            <li>
            <figure className="meal-photo">
            
                <img src={imageName_5} />
            
            </figure>
            </li>

            <li>
             <figure className="meal-photo">
                
                    <img src={imageName_6} />
               
            </figure>
            </li>
            
            <li>
                <figure className="meal-photo">
                
                    <img src={imageName_7} />
                
                </figure>
            </li>


            <li>
                <figure className="meal-photo">
                
                    <img src={imageName_8} />
                
                </figure>
            </li>
        </ul>

    </div>
);

export default Section_one;