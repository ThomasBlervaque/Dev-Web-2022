import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import {Form, FormGroup, Button, Input} from "reactstrap";
import {Link} from "react-router-dom";

// Page de création d'une personne

class AddPerson extends  Component{
  constructor(props) {
    super(props)
    this.state ={
      email: '',
      personName: '',
      firstName:'',
      birthDay:'',
    }
    this.changeEmail = this.changeEmail.bind(this)
    this.changePersonName = this.changePersonName.bind(this)
    this.changeFirstName = this.changeFirstName.bind(this)
    this.changeBirthDay = this.changeBirthDay.bind(this)

    this.onSubmit= this.onSubmit.bind(this)
  }
  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }
  changePersonName(event){
    this.setState({
      personName:event.target.value
    })
  }
  changeFirstName(event){
    this.setState({
      firstName:event.target.value
    })
  }

  changeBirthDay(event){
    this.setState({
      birthDay:event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault()
    const registered = {
      email: this.state.email,
      personName: this.state.personName,
      firstName: this.state.firstName,
      birthDay:this.state.birthDay,
    }
    axios.post('http://localhost:4000/createClient',registered)
        .then(response => console.log(response.data))
        // window.location = '/' la page sur laquelle  on veut rediriger après la connexion
        this.setState({
          email:'',
          personName:'',
          firstName:'',
          birthDay:''
        })
  }

  render() {
    return(
        <div className="form-connexion">
          <div className='container'>
            <div className='form-div'>
              <Form onSubmit={this.onSubmit}>
                <FormGroup>
                  <Input type='text'
                       placeholder='E-mail'
                       onChange={this.changeEmail}
                       value={this.state.email}
                       className='form-control from-group'
                  />
                  <Input type='text'
                       placeholder='Name'
                       onChange={this.changePersonName}
                       value={this.state.personName}
                       className='form-control from-group'
                  />
                <Input type='text'
                       placeholder='firstName'
                       onChange={this.changeFirstName}
                       value={this.state.firstName}
                       className='form-control from-group'
                />
                <Input type='date'
                       placeholder='2022-12-25'
                       onChange={this.changeBirthDay}
                       value={this.state.birthDay}
                       className='form-control from-group'
                />
                <Button type='submit' Submit
                       className='btn btn-danger btn-block'
                > Enregistrer</Button>
                <Link to="/" className = "btn btn-danger m1-2"> Supprimer</Link>
                </FormGroup>
              </Form>
            </div>
          </div>

        </div>
    )
  }
}

export  default  AddPerson