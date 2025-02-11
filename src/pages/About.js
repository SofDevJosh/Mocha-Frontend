import React, { useRef } from 'react';
import Navigation from '../comps/nav';
import { Container } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import workerOne from "../media/updated-characters/coffee-bean-character-two.jpg";
import Image from 'react-bootstrap/Image';
import './../styles/about-styles/about-style.css';
import abImage from '../media/barista-woman/about-mocha.jpg'


export default function About () {

    let WeAre = useRef();
    let WeAreThis = useRef();
    function showMainDescription(){
        setTimeout(function(){
            WeAre.current.innerHTML = "MOCHA";
            WeAreThis.current.innerHTML = "Mocha because Java was too obvious."
        }, 200);
        
    }
    function hideDescription(){
       setTimeout(function(){
        WeAre.current.innerHTML = "WHO WE ARE";
        WeAreThis.current.innerHTML = "";
       },100);
        
    }
    return(
        <Container id="AboutContainer">
            <Row>
                <Col></Col>
                <Col>
                <Row><h4>THIS IS</h4></Row>
                
                <Row><h1>MOCHA</h1></Row>
                <Row><p>Because Java was too obvious</p></Row>
                </Col>
                <Col></Col>

            </Row>
            <Row>
                <Col>
                <Image
                src={abImage}
                rounded
                
                />
                
                </Col>
            </Row>
            <Row>
                <Accordion>
                    <Accordion.Item eventKey='0' id="FirstAboutItem">
                        <Accordion.Header>Who We Are</Accordion.Header>
                        <Accordion.Body>
                            <Image/>
                            Alright. Serious time. Because I deleted my old project, I had to recreate Play2Go from scratch. I tried working with Vue3 but.. let's just say we didn't see
                            eye to eye. So I decided to beat my head against the desk with React instead. Wait. What was the question again?
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>Mocha vs Javascript</Accordion.Header>
                        <Accordion.Body>
                            <Image/>
                            One man's trash is another man's class project.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Header>About the Team</Accordion.Header>
                        <Accordion.Body>Flying solo here. Just trying to get a tech job *wink *wink.</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
           
            
        </Container>
    )
}