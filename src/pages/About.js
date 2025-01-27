import React from 'react';
import Navigation from '../comps/nav';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import workerOne from "../media/updated-characters/person-to-add.jpg";
import Image from 'react-bootstrap/Image';
import './../styles/about-styles/about-style.css';


export default function About () {
    return(
        <Container id="AboutContainer">
            <Row>
                <Col>
                <h1 id ="AboutTitle">About</h1>
                
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>asf sdj fjh sdfh kjh </p>
                    <p>asf sdj fjh sdfh kjh </p>
                    <p>asf sdj fjh sdfh kjh </p>
                    <p>asf sdj fjh sdfh kjh </p>
                </Col>
                <Col></Col>
                <Col id="imageContainer">
                <Image 
                src = {workerOne}
                rounded
                />
                
                </Col>
            </Row>
            
        </Container>
    )
}