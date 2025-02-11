import React, { useEffect } from "react";
import StartGameScreen from "../../gen-comps/startGameScreen";
import MathGameRules from "../math-game-rules";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";  
import Col from "react-bootstrap/Col";
import Select from "react-select";
import { useState } from "react";
import '../../../../styles/games/math-styles/game-start.css'

export default function MathStartScreen({setGm}) {
    const opts = [
        {value: 0, label: 'Addition'},
        {value: 1, label: 'Subtraction'},
        {value: 2, label: 'Multiplication'},
        {value: 3, label: 'Division'}
    ]
    const [optionValue, setOptionValue] = useState(0);
    useEffect(()=>{
        setGm(optionValue)
    },[optionValue])
   
    return(
        <Container id="MathGameStart">
            
            <Row>
                <h1>Math Wars</h1>
            </Row>
            <Row>
                <Select options={opts} defaultValue={{label: "Choose a Game Mode", value: ""}} onChange={(e)=> {
                setOptionValue(e.value);
                
                
                
                }}></Select>
            
            
            </Row>
            <Row>
                <MathGameRules/>
            </Row>
            
          
        </Container>
    )
}