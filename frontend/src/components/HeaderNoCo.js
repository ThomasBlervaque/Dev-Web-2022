import {Link} from "react-router-dom";
import '../styles/Header.css'

function HeaderNoCo(){
    return(
        <nav className='header'>
            <ul>
                <li><Link to='/'> Accueil</Link></li>
                <li><Link to='/lineUp'> Line-up </Link></li>
                <li><Link to='/inscription'> Inscription </Link> </li>
                <li><Link to='/connexion'> Connexion </Link> </li>
            </ul>
        </nav>
    )
}

export  default  HeaderNoCo