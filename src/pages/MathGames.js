import React, { useState, useEffect } from 'react';
import Navigation from '../comps/nav';
import MathStartScreen from '../comps/game-comps/math-comps/game-screens/math-game-startscreen';
import MathPlay from '../comps/game-comps/math-comps/game-screens/math-play-screen';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../styles/games/math-styles/main-screen-styles.css'
export default function MathGames () {
    const [gm, setGm] = useState(0);
    const [playtoggle, setPlaytoggle] = useState(null);
    const [startScreen, setStartScreen] = useState(<MathStartScreen setGm={setGm}/>);
    const [startButtonVis, setStartButtonVis] = useState('block');
    


    useEffect(()=>{
        
    })
    


    return(
            <Container id="MathGamePage">
               
                
                <Row>
                    <Col></Col>
                    <Col>
                    {startScreen}
                    <Col>
                    <Button id="MathPlayBtn" style={{display:startButtonVis}}onClick={()=>{ 
                        setPlaytoggle(<MathPlay gamemode={gm}/>);
                        setStartScreen('')
                        setStartButtonVis('none');}}>
                        <span id="MathPlayBtnTop">PLAY</span>
                    </Button>
                    </Col>
                    
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    {playtoggle}
                </Row>
                

                
            </Container>
    )
}