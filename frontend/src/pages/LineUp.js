import React, { useState } from 'react';

function LineUp(){
    
    const [day, setDay] = useState(true)

    if (day === true){
        return(
            <div>
                <button onClick={()=>{setDay(true)}}>Vendredi</button>
                <button onClick={()=>{setDay(false)}}>Samedi</button>
            </div>
        )
    }
    if (day === false){
        return(
            <div>
                <button onClick={()=>{setDay(true)}}>Vendredi</button>
                <button onClick={()=>{setDay(false)}}>Samedi</button>
            </div>
        )
    }
}

export default LineUp