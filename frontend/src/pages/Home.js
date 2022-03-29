import main from '../assets/main.png'

import '../styles/Home.css'
import Heading from "./Heading";

function Home(){
    return(
    <>
        <banner>
           <img className='main-page-image' alt="photo page d\'accueil" src={main}/>
        </banner>
    </>)
}
export default Home
