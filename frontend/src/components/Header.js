import {Link} from "react-router-dom";
import '../styles/Header.css'
import ListeDeroulante from './dropDown'
import axios from "axios";
import { useState } from "react";

/*function getUserName(){
    const idUser = sessionStorage.getItem('userId')
    axios.get(`http://localhost:4000/showOneClient/${idUser}`
    )
    .then(res =>{
        console.log(res.data)
        localStorage.setItem('userName',res.data.userName)
    })
}*/

function Header(){

    
    return(
        <nav className='header'>
            <ul>
                <li><Link to='/'> Accueil</Link></li>
                <li><Link to='/lineUp'> Line-up </Link></li>
                <li><Link to='/achat-ticket'> Achat Ticket </Link></li>
            </ul>
            <ListeDeroulante className='dropdown' profil='toto'/>
        </nav>
    )

}

export  default  Header