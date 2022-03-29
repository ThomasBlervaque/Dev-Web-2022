import {Link} from "react-router-dom";
import '../styles/Header.css'

function Header(){
    return(
        <nav className='header'>
            <Link to='/'> Accueil</Link>
            <Link to='/lineUp'> Line-up </Link>
            <Link to='/achat-ticket'> Achat Ticket </Link>
            <Link to='/user'> Utilisateur </Link>
        </nav>
    )
}

export  default  Header