import React from 'react';
import Navigation from '../comps/nav';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import workerOne from "../media/updated-characters/person-to-add.jpg";


export default function About () {
    return(
        <Container>
            <Row>
                <Col>
                <h1>About</h1>
                
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
                <Col>
                <img
                src = {workerOne}
                />
                
                </Col>
            </Row>
            
        </Container>
    )
}