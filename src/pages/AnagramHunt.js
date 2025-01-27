import React, {useEffect, useRef, useState} from 'react';
import Navigation from '../comps/nav';
import AnagramStartScreen from '../comps/game-comps/anagram-comps/game-screens/anagram-game-startscreen';
import AnagramPlay from '../comps/game-comps/anagram-comps/game-screens/anagram-play-screen';
import Play from '../comps/game-comps/gen-comps/playGame';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../styles/games/anagram-styles/general.css'


export default function AnagramHunt () {

    
   
    let [GM, setGM] = useState(0);
    const gmRef = useRef(GM);
    function selectGameMode(game){
        gmRef.current = game
        setGM(game);
        
    
    }
    
    let dataSend = GM
    

    
    


    function init(gamemodeVal){
        setPlayScreen(() => <AnagramPlay gm={gmRef.current} />);
        setStartButton(prevState => !prevState);
        
    }

  
    
        



    
    const [startscreen, setPlayScreen] = useState(<AnagramStartScreen onGameSelect={selectGameMode} />)
    const [startButton, setStartButton] = useState(
    <Button id="AnagramPlayButton" onClick={function(){
        init(dataSend)
        }} >PLAY
    </Button>)

    return(
        <Container>
            
            <Row>
                <Col></Col>
                <Col>
                {startscreen}
               
                </Col>
                <Col>
                
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                {startButton}
                </Col>
                
                <Col></Col>
            </Row>
           
        </Container>
    )
}