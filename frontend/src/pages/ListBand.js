import React from "react";
import axios from "axios";

let listBand
axios.get('http://localhost:4000/showAllBand').then(response => {
    //console.log(listBand);
    listBand = JSON.stringify(response.data)
    //console.log(listBand)

});
//console.log(JSON.stringify(listBand))
console.log('enfin me voici '+ listBand)

function BandTab({band}){
    return <table className='table'>
        <thead>
            <th> Name band </th>
            <th> Number Member</th>
            <th> Creation year</th>
        </thead>
        <tbody>

        </tbody>
    </table>
}

class ListBand extends React.Component{

   render() {
       const {listBand} = this.props
       return(
           <div> Bonjour
               {JSON.stringify(listBand)}
           </div>
       )
   }
}



export  default ListBand