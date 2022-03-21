import {Link} from "react-router-dom";
import '../styles/Header.css'


//Fonction qui définie l'en tête de la page principale
function Header(){
    return(
        <nav className='header'>
            <Link to='/'> Accueil</Link>
            <Link to='/lineUp'> Line-up </Link>
            <Link to='/achat-ticket'> Achat Ticket </Link>
            <Link to='/contact'> Contact </Link>
            <Link to='/connexion'> Connexion </Link>
        </nav>
    )
}

export  default  Header