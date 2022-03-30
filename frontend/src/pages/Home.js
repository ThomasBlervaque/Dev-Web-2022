import main from '../assets/main.png'

import '../styles/Home.css'
import Heading from "./Heading";

function Home(){
    return(<>
        <banner class = "background-image">
           <img className='main-page-image' alt="photo page d\'accueil" src={main}/>
        </banner>
        <div id="WelcomeTextspace">
            <span>
            Nous sommes heureux de vous annoncé.e.s que le festival "Rock and Troll" aurra lieux cette année 2022 ! 
            Ce festival se deroulera du 15 au 16 mars et comprendra de nombreux groupes tel que : FFk, Bric et Broc ou encore Redshift ! 
            vous retrouverez sur ce site toute les informations dont vous aurez besoins concernant le festivale. 
            <ul>
                <li>un horaire precis du deroulement des concers vous permetra de planifier votre weekend</li>
                <li>des information complementaires sur les groupes et leurs histoire</li>
                <li>la possibilitée de crée votre propre planning en fonction de vos gouts </li>
                <li>et bien d'autres</li>
            </ul>
            Nous vous atendons nombreux.euses pour le festival de cette année , vous pouvez dès à present reserver vos place via la page "Achat Ticket".
            </span>
        </div>

    </>)
}
export default Home
