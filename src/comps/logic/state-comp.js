import React, {useState} from 'react'

  


export default function Timer() {
    let [num, setNum] = useState(30);
    function time(){
        const time = setInterval(function() {
            let newNum = num --;
            setNum(newNum);
            if(newNum === 0 ){
                clearInterval(time);
            }
            console.log(newNum)

        },500)
        
    
    }
    return(
        





        <div>
            {num}
            <button onClick={Timer}>click me!</button>
            
        </div>
    )
}

