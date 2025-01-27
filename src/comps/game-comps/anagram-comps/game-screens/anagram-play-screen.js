import React, { useState, useRef, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import picOne from "../../../../media/barista-woman/baristas-enjoying-coffee.jfif";
import Play from '../../gen-comps/playGame';
import Button from 'react-bootstrap/Button';
import EndGame from '../../gen-comps/endGame';



export default function AnagramPlay({ gm }) {
    const threeLetter = [["are","ear","era"],["opt","pot","top"],["apt","pat","tap"]];

    const fourLetter = [["acme","came","mace"],["acre","care","race"],["anew","wane","wean"],["arts","rats","star","tars"],["asps","pass","saps","spas"],["awls","laws","slaw"],["bard","brad","drab"],["bats","stab","tabs"],["brag","garb","grab"],["code","coed","deco"]];

    const fiveLetter= [["cruel","lucre","ulcer"],["dater","rated","trade","tread"],["dates","sated","stead"],["deist","diets","edits","sited","tides"],["emits","items","mites","smite","times"],["ester","reset","steer","terse","trees"]];

    const sixLetter = [["drapes", "padres","parsed","rasped","spared","spread"],["carets","caters","caster","crates","reacts","recast","traces"],["canter","nectar","recant","trance"],["barely","barley","bleary"],["ascent","secant","stance"],["arrest","rarest","raters","starer"]];

    const GameMode = [threeLetter, fourLetter, fiveLetter, sixLetter];

    const [userInput, setUserInput] = useState('');
    //
  
    



    //timer

    let num = 30;
    const timeRef = useRef(30);
  
    function countdown(obj, num) {

    }


        //this function creatyes a random interval between the determined numbers 
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      //ALL THIS GENERATES A PROBLEM
      function newProblem(){
        //fit all the logic into this funtion
      }

      const [currentMode, setCurrentMode] = useState(GameMode[gm]);

      useEffect(()=>{
        setCurrentMode(GameMode[gm]);
    }, [gm])



     //gm determines the GameMode(how many letters) 
     

    //here we get the length of what ever game mode (remember this number represents how many word banks we have of certain letter lengths)
    let possibleWordBanks = currentMode.length; 

    //after selecting x amount of letters, we want to take the length of the x array and use it to select a specfic array
    let selectRandomBankInt = getRandomInt(0,possibleWordBanks - 1 );

    //Bank here is the bank we use in the game
    let Bank = currentMode[selectRandomBankInt];

    //this is so we can select a random starting point in our playable bank
    let BankInt = getRandomInt(0,Bank.length -1);
    let AnagramProblem = Bank[BankInt];
    
      //now that we created a new problem, gather our input values

      //that would be userRef which collects the user answer when is hit

    

  
            
            
    const userRef = useRef('')
    let userAns;
    ///handling input
    function gatherUserInput(){
       userAns = userRef.current.value;
        
    }
    //we want to set up an array that we can push our guess answers in
    let guessAns = [];
    
    //we want to take the problem and lace it inside this array
    function placeProblemInArray(){
        if(guessAns.find((ans)=>ans==AnagramProblem) == undefined){
            guessAns.push(AnagramProblem);
        }
    }
    
    ///next we need a function to end the game completely (aka get rid of this comp and put another one)
    

    const [endscreen, setEndScreen] = useState('');
    const [isVisible, setIsVisible] = useState('block'); 
    function fireEndScreen(){
        setEndScreen(<EndGame/>);
        setIsVisible('none')
       

    }

    

   //this will be the points system
    const points = useRef(0);

    function addPoints(data){
        let currentPoints = Number(points.current.innerHTML)
        points.current.innerHTML = currentPoints + data
        
    }

    //this function will handle the enter key press
    function handleKeyPress(e){
        if (e.key === 'Enter'){
            Test();
        }
    }

    //this is our clear function
    function clear(){
        userRef.current.value = '';
    }

    //this tests our answer against anything in the word bank.
    function Test(){
        gatherUserInput();
        placeProblemInArray();
        let found = Bank.find((wordInBank) => wordInBank == userAns);
        console.log(found);
        if (found == undefined) {
            console.log(`That word ${userAns} was not correct`)

        } else if(guessAns.find((alreadyGuessed)=> alreadyGuessed == found)!= undefined){
            console.log('you already guessed that silly.')
        }
        else {
            guessAns.push(found);
            addPoints(10);
            clear();
            console.log(guessAns);
            console.log('correct!!')
        }
        if (guessAns.length == Bank.length){
            fireEndScreen();
        }
        
    }
      /*let threeLetterGameSet = getRandomInt(0, threeLetter.length);

      let totalPerGame = threeLetter[threeLetterGameSet].length;
      let word ;*/
      

    return(
        <Container  >
            {endscreen}
            <Container id="playScreen" style={{display: isVisible }} >
            <Row>
                <h1>Anagram Hunt</h1>
            </Row>
            <Row>
                <Col>
                <Image
                rounded
                src={picOne}
                
                />
                </Col>
            </Row>
            <Row>
                {AnagramProblem}
            </Row>
            <Row>
                
                {/*custom input for gamemode */}
                <input type="text" defaultValue={''} ref={userRef} onKeyDown={handleKeyPress}></input>
                <Button id="goButton" onClick={Test}>
                    <span id="goButtonTop">GO</span>
                </Button>
            </Row>
            <Row>
                <Col>
                <h3 ref={timeRef} ></h3>
                </Col>
                <Col>
                    <Button id="powerupButton">USE POWERUP</Button>
                </Col>
                <Col>
                    <h4><span ref={points}>0</span>pts</h4>
                </Col>
            </Row>










           </Container>
           <Container>
                <h4>Words</h4>
                
           </Container>
        </Container>
                
           
            
          
    )
}