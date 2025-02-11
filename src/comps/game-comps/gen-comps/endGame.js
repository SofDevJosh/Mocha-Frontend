import React from "react";
import { Button } from "react-bootstrap";
import '../../../styles/games/anagram-styles/game-over-styles.css';
export default function EndGame({pts}){
    return(
        <div>
            <h1>GAME OVER</h1>
            <h2>Your Score: {pts} pts</h2>
            <a href="/anagram-hunt">
                <Button id="RetryBtn">
                    <span id="RetryBtnTop">TRY AGAIN</span>
                </Button>
            </a>
        </div>
    )
}