import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import '../../../../../styles/games/math-styles/healthbar/healthbar.css';

import { useRef } from "react";
export default function OpHealthBar({name, setHitOP, setDead}){
    const [healthBarFillOP, setHealthBarFillOP] = useState(100)
    const [healthBarColorOP,setHealthBarColorOP] = useState('green')

    function damageOP(){
        setHealthBarFillOP(healthBarFillOP-10);
        if(healthBarFillOP == 0){
            console.log('end game')
            

        } else if (healthBarFillOP <= 30){
            setHealthBarColorOP('rgb(161,6,6)')

        } else if (healthBarFillOP <= 70 ) {
            setHealthBarColorOP('rgb(219,179,68)')
        }
    }

      useEffect(()=>{
           
            if (setHitOP == 'y'){
                damageOP();
            }
            if (healthBarFillOP == 0){
                setDead('op dead')
            }
           
        },[setHitOP])
    
    return(
        <Container className="healthContainer">
            <div className="healthSection">
                <p>{name}</p>

            <div className="healthBar">
                <div className="healthBarFill" style={{width:`${healthBarFillOP}%`, backgroundColor:`${healthBarColorOP}`}}></div>
            </div>
            <div>
                <p className="healthText">
                    <span className="healthPoints">{healthBarFillOP}</span>
                    /
                    <span className="setHealthPoints">100</span>
                
                </p>
            </div>
          
            </div>
            
        </Container>
    )
}
