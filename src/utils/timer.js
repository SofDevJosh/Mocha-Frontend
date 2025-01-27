import { clear } from "./clear.js";
export function countdown(obj, num){
   
   
    //need to clear out the screen in a write once, use forever kinda way
    

    const time = setInterval(function(){
        num--
        obj.innerHTML = num //this represents the object's that we want to change
        
        if (num===0){
            
            alert(`GAME OVER! Your score was ${'score.innerHTML'}`)

            clearInterval(time);
            
        }
    }, 1000)
};
