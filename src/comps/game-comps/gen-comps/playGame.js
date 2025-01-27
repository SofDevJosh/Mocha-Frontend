import React, {useEffect, useRef, useState} from "react";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import picOne from '../../../media/barista-woman/two-baristas-coffee-bag.jfif';
import Image from "react-bootstrap/Image";
import "../../../styles/games/anagram-styles/anagram-play-styles.css";
import Button from "react-bootstrap/Button";
import Timer from "../../logic/state-comp";
import EndGame from "./endGame";



export default function Play({gamescreen, gameImages, problem, gameInput, points, onInputFromChild}) {
    let [num, setNum] = useState(30);
    const [val, setVal] = useState('');

    function handleVal(e) {
        let newVal = e.target.value;
        setVal(newVal);
        
    }
    console.log(val);
    function sendVal(){
        onInputFromChild(val);
        console.log('changed')
    }
    useEffect(()=>{
        sendVal()
    },[val]);


    let newNum = useRef(num);
    function time(){
        
        const time = setInterval(function() {
             num--
             newNum.current.innerHTML = num;
            
             
           setNum(num);
            if(num === 0 ){
                clearInterval(time);
                setEndScreen(<EndGame/>)

            }
            
            
   
        },1000)
    }

   



    const [playscreen, setEndScreen] = useState(
        <Container id="playScreen" onLoad={time}>
            <Row>
                {gamescreen}
            </Row>
            <Row>
                <Col>
                <Image
                rounded
                src={gameImages}
                />
                </Col>
            </Row>
            <Row>
                {problem}
            </Row>
            <Row>
                {/*custom input for gamemode */}
                <input type="text" defaultValue={val} onChange={handleVal}></input>
                <Button onClick={sendVal}>GO</Button>
            </Row>
            <Row>
                <Col>
                <h3 ref={newNum} >{num}</h3>
                </Col>
                <Col>
                    <Button id="powerupButton">USE POWERUP</Button>
                </Col>
                <Col>
                    <h4><span>{points}</span>pts</h4>
                </Col>
            </Row>
        </Container>);
    

    



    return(
        <Container>{playscreen}</Container>
        
        
    )
}