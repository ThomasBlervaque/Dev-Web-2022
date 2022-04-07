import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import {Form, FormGroup, Button, Input} from "reactstrap";
import {Link} from "react-router-dom";

// Page de création d'une personne

class Ticket extends  Component{
  constructor(props) {
    super(props)
    this.state ={
      email: '',
      personName: '',
      firstName:'',
      birthDay:'',
      typePerson:'',
    }
    this.changeEmail = this.changeEmail.bind(this)
    this.changePersonName = this.changePersonName.bind(this)
    this.changeFirstName = this.changeFirstName.bind(this)
    this.changeBirthDay = this.changeBirthDay.bind(this)
    //this.changeTypePerson= this.changeTypePerson(this)
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

  changeTypePerson(event){
    this.setState({
      typePerson:event.target.value
    })
  }

  onSubmit(event){
    event.preventDefault()
    const registered = {
      email: this.state.email,
      personName: this.state.personName,
      firstName: this.state.firstName,
      birthDay:this.state.birthDay,
      typePerson: this.state.typePerson
    }
    axios.post('http://localhost:4000/createPerson',registered)
        .then(response => console.log(response.data))
        // window.location = '/' la page sur laquelle  on veut rediriger après la connexion
        this.setState({
          email:'',
          personName:'',
          firstName:'',
          birthDay:'',
          typePerson:''
        })
  }

  render() {
    return(
        <div className="div-ticket">
            <h1> Rock and Troll</h1>
            <div className='panier'>
              <div className='periode'> 15/04/22 au 31/04/22</div>
              <img  src='../assets/Basket.png'/>
            </div>
            <div className='data-play'>
              <label className='Day'>Journée du </label> <label>€</label> <Button>1</Button>
            </div>
        </div>
    )
  }
}

export  default  Ticket