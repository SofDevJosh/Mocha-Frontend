import React, { useEffect, useMemo, useState } from "react";
import StartGameScreen from "../../gen-comps/startGameScreen";
import AnagramGameRules from "../anagram-game-rules";
import Select from "react-select";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../../../../styles/games/anagram-styles/anagram-start-style.css'



export default function AnagramStartScreen({onGameSelect, startbtn}) {
    const options = [
        {value: 0, label: 'Three Letters'},
        {value: 1, label: 'Four Letters'},
        {value: 2, label: 'Five Letters'},
        {value: 3, label: 'Six Letters'}
    ]
    const [optionValue, setOptionValue] = useState(0);

   
        function sendValue() {
            onGameSelect(optionValue);
            

        }
      useEffect(()=>{
        sendValue()
      }, [optionValue])
    
   
    let rules = 'asdf'
    return(
        <Container id="AnagramStartContainer">
        <Row>
         <h1>Anagram Hunt</h1>
        </Row>
        <Row>
         <Select options={options} defaultValue={{label: "Choose a Game Mode", value: ""}} onChange={(e)=> {
            setOptionValue(e.value)
            
            
            
            }}   ></Select>
        </Row>
        <Row>
         <AnagramGameRules/>
        </Row>
        <Row>
            {startbtn}
        </Row>


     </Container>
    )
}