import { Form, FormGroup,Input,Button} from "reactstrap";
import {Link} from "react-router-dom";
import React from "react";


function EditUser(){
    return(
        <div className="form-connexion">
          <div className='container'>
            <div className='form-div'>
              <Form>
                <FormGroup>
                  <Input type='text'
                       placeholder='Full Name'
                       className='form-control from-group'/>
                <Input type='text'
                       placeholder='Username'
                       className='form-control from-group'
                />
                <Input type='text'
                       placeholder='E-mail'
                       className='form-control from-group'
                />

                <Input type='password'
                       placeholder='Mot de passe'
                       className='form-control from-group'
                />

                <Button type='submit' Submit
                       className='btn btn-danger btn-block'
                > Modifier </Button>
                <Link to="/" className = "btn btn-danger m1-2"> Supprimer</Link>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
    )
}

export default EditUser