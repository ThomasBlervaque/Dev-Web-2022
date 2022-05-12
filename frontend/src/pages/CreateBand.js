import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import {Form, FormGroup, Button, Input, Label} from "reactstrap";
import '../styles/Inscription.css'


// Page de création d'un utilisateur

class CreateBand extends  Component{
  constructor(props) {
    super(props);
    this.state = {
            nameBand: '',
            numberMember: '',
            creationYear: '',
            history: '',
            img: ''
    }
    this.changeNameBand = this.changeNameBand.bind(this)
    this.changeNumberMember = this.changeNumberMember.bind(this)
    this.changeCreationYear = this.changeCreationYear.bind(this)
    this.changeHistory = this.changeHistory.bind(this)
    this.changeImage = this.changeImage.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
  }

  changeNameBand(event){
    this.setState({
      nameBand:event.target.value
    })
  }

  changeNumberMember(event){
    this.setState({
      numberMember:event.target.value
    })
  }

  changeCreationYear(event){
    this.setState({
      creationYear:event.target.value
    })
  }

  changeHistory(event){
    this.setState({
      history:event.target.value
    })
  }

  changeImage(event) {
      this.setState({
          bandImage: event.target.value
      })
  }

  onSubmit(event) {
      event.preventDefault()
      const registered = {
          nameBand: this.state.nameBand,
          numberMember: this.state.numberMember,
          creationYear: this.state.creationYear,
          history: this.state.history,
          bandImage: this.state.img
      }
      //console.log(registered)
      const rep = axios.post(  'http://localhost:4000/createBand',registered)

      //console.log('reponse après')
      this.setState({
                        nameBand : '',
                        numberMember : '',
                        creationYear: '',
                        history: '',
                        bandImage: ''
                    })
  }
  render() {
    return(
        <div className="form-connexion">
          <div className='container'>
            <div className='form-div'>
              <Form onSubmit={this.onSubmit}>
                  <Label>Nom du groupe </Label>
                  <Input type='text'
                       placeholder=''
                       onChange={this.changeNameBand}
                       value={this.state.nameBand}
                       required
                  />
                    <Label> Nombre de membres </Label>
                    <Input type='number'
                       placeholder=''
                       onChange={this.changeNumberMember}
                       value={this.state.numberMember}
                       className='form-control from-group'
                    />

                    <Label> Année de création </Label>
                    <Input type='date'
                       placeholder=''
                       onChange={this.changeCreationYear}
                       value={this.state.creationYear}
                       className='form-control from-group'
                    />

                    <Label> Histoire </Label>
                    <Input type='textarea'
                       placeholder=''
                       onChange={this.changeHistory}
                       value={this.state.history}
                       className='form-control from-group'
                    />
                    <Label htmlFor="image"> Upload Image  </Label>
                    <Input type='file' id='image' name='image'
                       onChange={this.changeImage}
                       value={this.state.bandImage}
                       className='form-control from-group'
                    />

                    <div className="confirmer">
                        <button className='btn btn-primary' type="submit" id='sub' name='sub'>Enregistrer  </button>
                    </div>
              </Form>
            </div>
          </div>
        </div>
    )
  }
}

export  default  CreateBand