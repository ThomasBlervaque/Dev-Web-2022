import main from '../assets/main.png'
import '../styles/Home.css'


// Fonction pour la page  principale

function Home(){
    return(
    <div>
        <banner>
           <img className='main-page-image' alt="photo page d\'accueil" src={main} alt="logo principal d'accueil"/>
        </banner>

        <div className='text-description'>
            Trèèèèès bonne nouvelle les trolls !! Lundi on est passé en code jaune et qui dit jaune dit pastis, soleil, et foie cirrhosé (j'vous vois v'nir avec vos 6 rosés) !🍺 Sans oublier l'éternel maillot jaune de Vernon...
Tout ça n'annonce que du bon ! Et toi ça te fait penser à quoi le jaune ? 🟨
        </div>
        <div>
            <img className='div-image' src={'image1'}/>
            <img className='div-image'src={'image2'}/>
            <img className='div-image'src={'image3'}/>
        </div>
    </div>)
}
export default Home