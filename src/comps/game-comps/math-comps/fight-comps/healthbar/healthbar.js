import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import '../../../../../styles/games/math-styles/healthbar/healthbar.css';

import { useRef } from "react";
export default function HealthBar({name, setHit, setDead}){
    const [healthBarFill, setHealthBarFill] = useState(100)
    const [healthBarColor,setHealthBarColor] = useState('green')

    function damage(){
        setHealthBarFill(healthBarFill-10);
        if(healthBarFill == 0){
            console.log('end game')

        } else if (healthBarFill <= 30){
            setHealthBarColor('rgb(161,6,6)')

        } else if (healthBarFill <= 70 ) {
            setHealthBarColor('rgb(219,179,68)')
        }
    }
    const [attack, setAttack] = useState();
    
   
    useEffect(()=>{
       
        if (setHit == 'yes'){
            damage();
        }
        if (healthBarFill == 0) {
            setDead('player dead')
        }
        
    },[setHit])
    
    return(
        <Container className="healthContainer">
            <div className="healthSection">
                <p>{name}</p>

            <div className="healthBar">
                <div className="healthBarFill" style={{width:`${healthBarFill}%`, backgroundColor:`${healthBarColor}`}}></div>
            </div>
            <div>
                <p className="healthText">
                    <span className="healthPoints">{healthBarFill}</span>
                    /
                    <span className="setHealthPoints">100</span>
                
                </p>
            </div>
            </div>
           
        </Container>
    )
}
