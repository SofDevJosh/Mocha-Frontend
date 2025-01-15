import React from "react";
import StartGameScreen from "../../gen-comps/startGameScreen";
import MathGameRules from "../math-game-rules";

export default function MathStartScreen() {
    return(
        <div>
            <StartGameScreen
            gameName={"Math Game"}
            v1={"+"}
            v2={"-"}
            v3={"*"}
            v4={"/"}
            rules={<MathGameRules/>}
            
            
            
            />
        </div>
    )
}