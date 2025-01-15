import React from 'react';
import Navigation from '../comps/nav';
import AnagramStartScreen from '../comps/game-comps/anagram-comps/game-screens/anagram-game-startscreen';
import AnagramPlay from '../comps/game-comps/anagram-comps/game-screens/anagram-play-screen';
import Play from '../comps/game-comps/gen-comps/playGame';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AnagramHunt () {
    return(
        <Container>
            
            <Row>
                <Col></Col>
                <Col>
                    <Play 
                    gamescreen={<AnagramPlay/>}
                    />
                </Col>
                <Col></Col>
            </Row>
           
        </Container>
    )
}