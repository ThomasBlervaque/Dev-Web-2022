import React from "react";
import {Button, ListGroup, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";

function UserListe(){
    return(
        <ListGroup className="mt-4">
            <ListGroupItem className="d-flex">
            <strong> User one</strong>
            <div className="ml-auto">
              <Link className=" btn btn-warning mr-1" to={"/edituser"}> Modifier </Link>
            <Button color="danger"> Supprimer</Button>
                </div>
            </ListGroupItem>
            <ListGroupItem className="d-flex">
            <strong> User one</strong>
            <div className="ml-auto">
              <Link className=" btn btn-warning mr-1" to={"/edituser"}> Modifier </Link>
            <Button color="danger"> Supprimer</Button>
                </div>
            </ListGroupItem>
        </ListGroup>
    )
}

export default UserListe