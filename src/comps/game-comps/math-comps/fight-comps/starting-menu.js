import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useState,useEffect } from "react";   
import FightMenu from "./fight-menu";
//add click events here to change the menus
export default function StartingMenu({setMenu}) {
   
 
    
    
    return(
        <Container >
        
               
            
        <Container >
        <Row>
            <Button onClick={()=>{setMenu('fight')}} id="fightButton">
                <span id="fightButtonTop">FIGHT</span>
            </Button>
        </Row>
        <Row>
            <Col>
                <Button id="powerUpButton" onClick={()=>{alert('Coming soon ;)')}}> 
                    <span id="powerUpButtonTop">PowerUP</span>
                </Button>
            </Col>
            <Col>
                <Button id="quitButton" onClick={()=>{alert('you cannot quit.. yet.. coming soon')}}>
                    <span id="quitButtonTop">Quit</span>
                </Button>
            </Col>
            <Col>
                <Button id="skipButton" onClick={()=>{alert('might be coming soon. ;D')}}>
                    <span id="skipButtonTop">Skip</span>
                </Button>
            </Col>
        </Row>
        </Container>
        </Container>
    )
}