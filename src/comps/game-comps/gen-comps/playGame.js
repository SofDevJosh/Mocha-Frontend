import React from "react";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import picOne from '../../../media/barista-woman/two-baristas-coffee-bag.jfif';
import Image from "react-bootstrap/Image";
import "../../../styles/games/anagram-styles/anagram-play-styles.css";
import Button from "react-bootstrap/Button";

export default function Play({gamescreen}) {
    return(
        <Container id="playScreen">
            <Row>
                {gamescreen}
            </Row>
            
            <Row>
                <Col>
                <Image

                rounded
                src={picOne}
                />
                
                </Col>
            </Row>
            <Row>
                <Col>
                    <input placeholder='TAC'></input>
                    
                </Col>
                <Col>
                    <Button id="goButton">GO</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                <h4><span>25</span>s</h4>
                </Col>
                <Col>
                    <Button id="powerupButton">USE POWERUP</Button>
                </Col>
                <Col>
                    <h4><span>100</span>pts</h4>
                </Col>
            </Row>
        </Container>
    )
}