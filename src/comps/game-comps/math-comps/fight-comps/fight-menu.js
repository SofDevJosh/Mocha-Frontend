import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import StartingMenu from "./starting-menu";
import '../../../../styles/games/math-styles/fight-menu-styles/fight-menu.css';
import getRandomInt from "../../../../utils/randomint";

export default function FightMenu({correctAns, setMenu, setHit}) {
        
        
        
        let answerBank = [correctAns,getRandomInt(0,20),getRandomInt(0,20),getRandomInt(0,20)]
        let answerChoices = []
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
        
        shuffle(answerBank);
        function test(ans){
            if(ans == correctAns){
                
                setHit("y");
                setTimeout(()=>{
                    setHit('no');
                }, 1)
                
                setMenu('start')
            } else if(ans != correctAns){
    
                setHit('yes');
                setTimeout(()=>{
                    setHit('no');
                }, 1)
                
                setMenu('start');
                

            }

        }
        

    return(
        
        <Container>
          
            
            <Container >
            
            

           
            <Row>
                <Col>
                    <Button id="option1" onClick={()=>{test(answerBank[0])}}>
                        <span id="option1Top">{answerBank[0]}</span>
                    </Button>
                </Col>
                <Col>
                    <Button id="option2" onClick={()=>{test(answerBank[1])}}>
                        <span id="option2Top">{answerBank[1]}</span>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button id="option3" onClick={()=>{test(answerBank[2])}}>
                        <span id="option3Top">{answerBank[2]}</span>
                    </Button>
                </Col>
                <Col>
                    <Button id="option4" onClick={()=>{test(answerBank[3])}}>
                        <span id="option4Top">{answerBank[3]}</span>
                    </Button>
                </Col>
            </Row>
            <Row>
                <Button onClick={()=>{setMenu('start')}} id="fightBackButton">
                    <span id="fightBackButtonTop">BACK</span>
                </Button>
            </Row>
            </Container>
        </Container>
    )
}