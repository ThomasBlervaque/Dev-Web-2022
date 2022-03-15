import  AlexPaquette from '../assets/AlexPaquette.png'
import  BricEtBroc from '../assets/BricEtBroc.png'
import  CrocrodileDundish from '../assets/CrocrodileDundish.png'
import  FFK from '../assets/FFK.png'
import  Endless_dive from '../assets/Endless_dive.png'
import  Powersolo from '../assets/Powersolo.png'
import  Redshift from '../assets/Redshift.png'
import  The_Spunboys from '../assets/The_Spunboys.png'
import  The_Tone_Stellars from '../assets/The_Tone_Stellars.png'
import '../styles/ShowGroupes.css'

function ShowGroupes(){
    return(
        <div>

            <ul>
                <li> <img className='image-group'  src={AlexPaquette} alt='image AlexPaquette band'/> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    A accusamus aliquam consequuntur eos ipsum laboriosam nisi recusandae rerum, velit voluptatibus? Debitis molestias quibusdam ratione ullam.</p> </li>
                <li> <img className='image-group' src={BricEtBroc} alt='image BricEtBroc band'/> </li>
                <li> <img  className='image-group' src={CrocrodileDundish} alt='image CrocrodileDundish band'/> </li>
                <li> <img className='image-group' src={FFK} alt='image BricEtBroc band'/> </li>
                <li> <img className='image-group' src={Endless_dive} alt='image FFK band'/> </li>
                <li> <img className='image-group' src={Powersolo} alt='image Powersolo band'/> </li>
                <li> <img className='image-group' src={Redshift} alt='image Redshift band'/> </li>
                <li> <img className='image-group' src={The_Tone_Stellars} alt='image The_Tone_Stellars band'/> </li>
                <li> <img className='image-group' src={The_Spunboys} alt='image The_Spunboys band'/> </li>
            </ul>
        </div>
    )
}


export default ShowGroupes