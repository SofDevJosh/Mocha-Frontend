import React, { useRef, useState, useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import getRandomInt from "../../../../utils/randomint";
import Row from "react-bootstrap/Row";
import StartingMenu from "../fight-comps/starting-menu";
import '../../../../styles/games/math-styles/game-screen-styles.css';
import HealthBar from "../fight-comps/healthbar/healthbar";
import Image from "react-bootstrap/Image";
import enemyImage from  '../../../../media/updated-characters/coffee-cup-character-one.jpg'
import playerImage from '../../../../media/updated-characters/coffee-bean-character-two.jpg'
import Button from "react-bootstrap/Button";
import OpHealthBar from "../fight-comps/healthbar/opHealthbar";
import FightMenu from "../fight-comps/fight-menu";
import EndMathWar from "./math-game-end";

export default function MathPlay({gamemode}){
   
    const [operation, setOperation] = useState('+');

    useEffect(()=>{
        switch(gamemode){
            case 0:
                setOperation('+')
                
                break;
            case 1: 
                setOperation('-')
                break;
            case 2:
                setOperation('*')
                break;
            case 3:
                setOperation('/')
                break;
            default:
                setOperation('+')
                break;
        }
    })
   
    console.log(gamemode);
    

    const [hit, setHit] = useState();
    const [dead, setDead] = useState();
    const [endScreen, setEndScreen] = useState();
    const [playScreenVisible, setPlayScreenVisible] = useState('block');

   let timeRef = useRef();
   

    let [num, setNum] = useState(30)
   function fireEndScreen(win){
         setEndScreen(<EndMathWar winner={win}/>);
         setPlayScreenVisible('none');
   }
   function countdown() {
    setTimeout(() => {
        if (num > 0) {
            setNum(num - 1);
            timeRef.current.innerHTML = num;
         
            
        } else {
            fireEndScreen('time');
        }
    }, 1000);
   }
   
    let problem = useRef();
    function applyOp(a,b,operator){
        return eval(`${a}${operator}${b}`);
    }
    
    const [answer, setAnswer] = useState();


   

    
    function generateProblem(operator){
        let num1 = getRandomInt(0, 10);
        let num2 = getRandomInt(0, 10);
        problem.current.innerHTML = `${num1} ${operator} ${num2}`;
        setAnswer(applyOp(num1,num2,operator))
   

    }

  
    
    useEffect(()=>{
        generateProblem(operation);
    },[problem, gamemode])
    useEffect(()=>{
        
        if(hit == 'y'){
            generateProblem(operation);
            
        }
    },[hit,answer, gamemode])
   
    
    
    if(playScreenVisible === 'block'){
        countdown();
        
    }
    const [menu, setMenu] = useState('start')
    const [pad, setPad] = useState(<StartingMenu/>)
    useEffect(()=>{
        if(menu=='start'){
            setPad(<StartingMenu setMenu={setMenu}/>)
        } else if(menu == 'fight'){
            setPad(<FightMenu setMenu={setMenu} correctAns={answer} setHit={setHit}/>)
        }
    },[menu, hit])
   
    useEffect(()=>{
        
        if(dead == 'player dead'){
            fireEndScreen('op');
        }
        if(dead == 'op dead'){
            fireEndScreen('player');
        }
    },[dead])
  

    return(
        


        <Container id ="MathPlayScreen" >
            <Row>
                <h1>Math Wars</h1>

            </Row>
            {endScreen}
            <Row>
                <Container id="GameContainer" style={{display:playScreenVisible}}>
                    <Row>
                       <Col></Col>
                        <Col>
                            <h3 ref={timeRef}>30</h3>
                        </Col>
                        
                    </Row>
                    <Row id="opArea">
                    
                        <Col>
                        <OpHealthBar name={"Cup-o-jow"} setHitOP={hit} setDead={setDead}/>
                        </Col>
                        <Col></Col>
                        
                        
                        
                        
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col>
                            <Image src={enemyImage} width={100} height={100} id="enemyImage" roundedCircle/>
                            <div id="circle"></div>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col></Col>
                        <Col>
                        
                        </Col>
                    </Row>
                   
                    <Row>
                        <Col></Col>
                        <Col><h2 ref={problem}></h2></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image id="playerImage" src={playerImage} roundedCircle />
                            <div id="circlePlayer"></div>
                        </Col>
                        
                        <Col>
                        <HealthBar name="PlayerName" setHit={hit} setDead={setDead}/>
                        </Col>
                        
                    
                    </Row>
                    <Row>
                       
                        <Col></Col>
                    </Row>

                </Container>
            </Row>
            <Row id="GamePad" style={{display:playScreenVisible}}>
                {pad}
                
                
            </Row>            
        </Container>
    )
};
