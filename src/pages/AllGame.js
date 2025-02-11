import React from 'react';
import Navigation from '../comps/nav';
import GameCards from '../comps/home-comps/gameCards';
import { Col, Container, Row } from 'react-bootstrap';
import anaImage from '../media/barista-woman/barista-woman-with-serving-tray.jfif'
import mathImage from '../media/barista-woman/male-barista.jfif'
import '../styles/games/allgames-styles/allgames.css'



export default function AllGames () {
    return(
        <Container id="AllGamesContainer">
            <Row></Row>
            <Row>
                <Col>
                    <GameCards
                    gameTitle="Anagram Hunt"
                    gameDescribe="Your on the hunt for coffee.. or words. Find new combos to earn points!"
                    gameImage={anaImage}
                    page="/Anagram-Hunt"
                    />
                </Col>
                <Col>
                    <GameCards
                    gameTitle="Math Wars"
                    gameDescribe="Your on the hunt for coffee.. or words. Find new combos to earn points!"
                    gameImage={mathImage}
                    page="Math-Games"
                    />
               </Col>
               

            </Row>
        </Container>
    )
}