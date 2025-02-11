import React from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../../../styles/games/math-styles/game-screen-styles.css";
import playerLostImage from '../../../../media/barista-woman/bruh-coffee.jpg'
import timeRanOut from '../../../../media/barista-woman/wow-coffee.jpg'
import win from '../../../../media/barista-woman/baristas-enjoying-coffee.jfif'
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

export default function EndMathWar({winner}){
    const [victoryImage, setVictoryImage] = useState();
    const [message, setMessage] = useState();
    const [whoWon, setWhoWon] = useState();


    useEffect(()=>{
        switch(winner) {
            case 'player':
                setMessage("The war was well fought. You won the coffee math wars!");
                setVictoryImage(win)
                setWhoWon('You have Won!!')
                break;
            case 'op':
                setMessage("Dude.. really. Please turn in your mug");
                setVictoryImage(playerLostImage)
                setWhoWon('Cup-o-Joe Won!!')
                break;
            case 'time':
                setMessage("Do you even coffee? You let the timer run out. Go get a cup and try again");
                setVictoryImage(timeRanOut)
                setWhoWon('Time has run out!!')
                break;
            default:
                setMessage('Game is over, try again');
                break;
    
        }


    }, [winner])
    


    return(
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <h1>GAME OVER</h1>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <h3>{whoWon}</h3>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <Image src={victoryImage} rounded/>
                </Col>
                <Col></Col>

            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <h4>{message}</h4>
                </Col>
                <Col></Col>

            </Row>

            <Row>
                <Col></Col>
                <Col>
                    <a href="/Math-Games">
                        <Button id="retryBtn">
                            <span id="retryBtnTop">Try again</span>
                        </Button>
                    </a>
                </Col>
                <Col></Col>

            </Row>
            
         
          

        </Container>
    )
}