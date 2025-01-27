import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CustomerReview from '../comps/home-comps/customerReview';
import GameCards from '../comps/home-comps/gameCards';
import Timer from '../comps/logic/state-comp';
import anaImage from '../media/barista-woman/barista-woman-with-serving-tray.jfif'
import mathImage from '../media/barista-woman/male-barista.jfif'
import './../styles/home-styles/home.css';
import Navigation from '../comps/nav';
import Footer from '../comps/Footer';

export default function Home () {
    return(
      
        <Container fluid id="homeContainer">
            <Row>
                
                <Col>
                <h1 id="homeTitle">Welcome to <span id="mocha">MOCHA</span></h1>
                <p>because Java was too obvious...</p>
                
                </Col>
                
            </Row>
            <Row>
                <CustomerReview/>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <GameCards
                        gameTitle = "Anagram Hunt"
                        gameImage ={anaImage}
                        gameDescribe = "Your on the hunt for coffee.. or words. Find new combos to earn points!"
                    />
                
                </Col>
                <Col>
                    <GameCards
                        gameTitle = "Math Run"
                        gameImage = {mathImage}
                        gameDescribe="Turns out coffee isn't free! Punch the numbers at check out to earn points!"
                    />
                </Col>
                <Col></Col>
            </Row>
            
            
            
          
            

        </Container>
       
    )
}