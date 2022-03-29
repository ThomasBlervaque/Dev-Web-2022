import  Groupe from './ShowGroupes'
import {Link} from "react-router-dom";

function LineUp(){
    return(
        <div>
            <Groupe/>
            <Link to='/groupes'> Groupes </Link>
        </div>
    )
}

export default LineUp