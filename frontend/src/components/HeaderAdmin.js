import {Link} from "react-router-dom";
import '../styles/Header.css'

function HeaderAdmin(){
    return(
        <nav className='header'>
            <ul>
                <li><Link to='/person'> Personne </Link> </li>
                <li><Link to='/addBand'> Band </Link> </li>
                <li><Link to='/listBand'>List Band </Link></li>
            </ul>
        </nav>
    )
}

export default HeaderAdmin