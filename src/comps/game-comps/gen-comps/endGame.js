import React from "react";
import { Button } from "react-bootstrap";
export default function EndGame(){
    return(
        <div>
            <h1>GAME OVER</h1>
            <a href="/anagram-hunt">
                <Button>Try Again</Button>
            </a>
        </div>
    )
}