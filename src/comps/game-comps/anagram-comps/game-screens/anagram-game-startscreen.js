import React from "react";
import StartGameScreen from "../../gen-comps/startGameScreen";
import AnagramGameRules from "../anagram-game-rules";

export default function AnagramStartScreen() {
    return(
        <div>
            <StartGameScreen 
            gameName={"Anagram Hunt"}
            v1={"3"}
            v2={"4"}
            v3={"5"}
            v4={"6"}
            rules={<AnagramGameRules/>}
            />
        </div>
    )
}