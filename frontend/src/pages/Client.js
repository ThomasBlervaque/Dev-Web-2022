import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import {Form, FormGroup, Button, Input} from "reactstrap";
import '../styles/Client.css'


// Page de création d'un utilisateur

class AddClient extends  Component{
  constructor() {
    super()
    this.state ={
      email: '',
      fullName: '',
      userName:'',
      birthDay:'',
      password:'',
      confirmPassword:''
    }
    this.changeEmail = this.changeEmail.bind(this)
    this.changeFullName = this.changeFullName.bind(this)
    this.changeUserName = this.changeUserName.bind(this)
    this.changeBirthDay = this.changeBirthDay.bind(this)
    //this.changePassword = this.changePassword(this)
    //this.changeConfirmPassword = this.changeConfirmPassword(this)

    this.onSubmit= this.onSubmit.bind(this)
  }
  changeEmail(event){
    this.setState({
      email:event.target.value
    })
  }
  changeFullName(event){
    this.setState({
      personName:event.target.value
    })
  }
  changeUserName(event){
    this.setState({
      firstName:event.target.value
    })
  }

  changeBirthDay(event){
    this.setState({
      birthDay:event.target.value
    })
  }

  changePassword(event){
    this.setState({
      password:event.target.value
    })
  }

  changeConfirmPassword(event){
    this.setState({
      confirmPassword:event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault()
    const registered = {
      email: this.state.email,
      fullName: this.state.personName,
      userName: this.state.firstName,
      birthDay:this.state.birthDay,
      password:this.state.password,
      confirmPassword:this.state.confirmPassword
    }
    axios.post('http://localhost:4000/createClient',registered)
        .then(response => console.log(response.data))
        // window.location = '/' la page sur laquelle  on veut rediriger après la connexion
        this.setState({
          email:'',
          fullName:'',
          userName:'',
          birthDay:'',
          password:'',
          confirmPassword:''
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
                       placeholder='fullName'
                       onChange={this.changeFullName}
                       value={this.state.personName}
                       className='form-control from-group'
                  />
                <Input type='text'
                       placeholder='userName'
                       onChange={this.changeUserName}
                       value={this.state.firstName}
                       className='form-control from-group'
                />
                <Input type='date'
                       placeholder='2022-12-25'
                       onChange={this.changeBirthDay}
                       value={this.state.birthDay}
                       className='form-control from-group'
                />

                <Input type='password'
                       placeholder='password'
                       onChange={this.c}
                       value={this.state.password}
                       className='form-control from-group'
                />

                <Input type='password'
                       placeholder='confirm password'
                       onChange={this.c}
                       value={this.state.confirmPassword}
                       className='form-control from-group'
                />

                <fieldset className='btn-confirm'>
                  <Button type='submit' Submit
                       className='btn btn-danger btn-block'> Enregistrer
                  </Button>
                </fieldset>
                </FormGroup>
              </Form>
            </div>
          </div>

        </div>
    )
  }
}

export  default  AddClient