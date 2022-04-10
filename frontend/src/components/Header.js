import {Link} from "react-router-dom";
import '../styles/Header.css'

function Header(){
    return(
        <nav className='header'>
            <ul>
                <li><Link to='/'> Accueil</Link></li>
                <li><Link to='/lineUp'> Line-up </Link></li>
                <li><Link to='/achat-ticket'> Achat Ticket </Link></li>
                <li><Link to='/user'> Utilisateur </Link></li>
                <li><Link to='/admin'> Admin </Link> </li>

            </ul>
        </nav>
    )
}

export  default  Header