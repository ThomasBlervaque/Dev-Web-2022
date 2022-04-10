import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import { Form, FormGroup, Button, Input} from "reactstrap";
import {Link} from "react-router-dom";

// Page de connexion utilisateur

class AddUser extends  Component{
  constructor() {
    super()
    this.state ={
      fullName:'',
      username: '',
      email: '',
      password:''
    }
    this.changeFullName=this.changeFullName.bind(this)
    this.changeUsername=this.changeUsername.bind(this)
    this.changeEmail=this.changeEmail.bind(this)
    this.changePassword=this.changePassword.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
  }
  changeFullName(event){
    this.setState({
      fullName:event.target.value
    })
  }

  changeUsername(event){
    this.setState({
      username:event.target.value
    })
  }

  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }


  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault()

    const registered = {
      fullName: this.state.fullName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    axios.post('http://localhost:4000/connexion',registered)
        .then(response => console.log(response.data))
        // window.location = '/' la page sur laquelle  on veut rediriger après la connexion
        this.setState({
          fullName:'',
          username:'',
          email:'',
          password:''

        })
  }

  render() {
    return(
              <Form onSubmit={this.onSubmit}>
                  <Input type='text'
                       placeholder='Full Name'
                       onChange={this.changeFullName}
                       value={this.state.fullName}
                       className='form-control from-group'/>
                <Input type='text'
                       placeholder='Username'
                       onChange={this.changeUsername}
                       value={this.state.username}
                       className='form-control from-group'
                />
                <Input type='text'
                       placeholder='E-mail'
                       onChange={this.changeEmail}
                       value={this.state.email}
                       className='form-control from-group'
                />

                <Input type='password'
                       placeholder='Mot de passe'
                       onChange={this.changePassword}
                       value={this.state.password}
                       className='form-control from-group'
                />

                <Button type='submit' Submit
                       className='btn btn-danger btn-block'
                > Enregistrer</Button>
                <Link to="/" className = "btn btn-danger m1-2"> Supprimer</Link>
              </Form>
    )
  }
}

export  default  AddUser