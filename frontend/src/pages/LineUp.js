import GroupeSamedi from './ShowGroupesSamedi'
import GroupesVendredi from './ShowGroupesVendredi';
import React, { useState } from 'react';

function LineUp(){
    
    const [day, setDay] = useState(true)

    if (day === true){
        return(
            <div>
                <button onClick={()=>{setDay(true)}}>Vendredi</button>
                <button onClick={()=>{setDay(false)}}>Samedi</button>
                <GroupesVendredi/>
            </div>
        )
    }
    if (day === false){
        return(
            <div>
                <button onClick={()=>{setDay(true)}}>Vendredi</button>
                <button onClick={()=>{setDay(false)}}>Samedi</button>
                <GroupeSamedi />
            </div>
        )
    }
}

export default LineUp