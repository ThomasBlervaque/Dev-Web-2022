import React from "react";
import axios from "axios";

let listBand
axios.get('http://localhost:4000/showAllBand').then(response => {
    listBand = response.data
    console.log(listBand);

});
console.log(listBand)

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