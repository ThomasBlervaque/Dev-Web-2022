import axios from 'axios'
import React, { useState } from 'react'
import ListeDeroulante from '../components/dropDown'




function MyTicket() {
    const [tickets, setTicket] = useState()

    axios.get(`http://localhost:4000/showReservation/${sessionStorage.getItem('userId')}`)
    .then(response => {
        console.log(response.data)
        
    })
    

  return (
    <div>
        <p></p>
    </div>
    
  )
}

export default MyTicket