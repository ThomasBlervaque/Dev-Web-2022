import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import {Form, Button, Input, FormGroup} from "reactstrap";
import {render} from "@testing-library/react";


class AddBand extends Component{
    constructor(pros) {
        super(pros)
        this.state={
            nameBand:'',
            numberMember:'',
            creationYear:'',
            history:''
        }
        this.changeNameBand = this.changeNameBand.bind(this)
        this.changeNumberMember= this.changeNumberMember.bind(this)
        this.changeCreationYear = this.changeCreationYear.bind(this)
        this.changehistory = this.changehistory.bind(this)
    }
    changeNameBand(event){
        this.setState({nameBand:event.target.value})
    }
    changeNumberMember(event){
        this.setState({numberMember:event.target.value})
    }
    changeCreationYear(event){
        this.setState({creationYear:event.target.value})
    }
    changehistory(event){
        this.setState({history:event.target.value})
    }

    onSubmit(event) {
        event.preventDefault()
        const registerd = {
            nameBand: this.state.nameBand,
            numberMember: this.state.numberMember,
            creationYear: this.state.creationYear,
            history: this.state.history
        }
        axios.post('http://localhost:4000/createBand', registerd)
            .then(response => console.log(response.data))
        this.setState({
            nameBand: '',
            numberMember: '',
            creationYear: '',
            history: ''
        })
    }
        render(){
            return (<div>
                <div className='form-div'>
              <Form onSubmit={this.onSubmit} encType='multipart/form-data'>
                  <FormGroup>
                        <Input type='text'
                               placeholder='name of band'
                               onChange={this.changeNameBand}
                               value={this.state.nameBand}
                               className='form-control from-group'/>
                         <Input type='Number'
                               placeholder='Type number'
                               onChange={this.changeNumberMember}
                               value={this.state.numberMember}
                               className='form-control from-group'
                        />
                        <Input type='date'
                               placeholder='jj-mm-aaaa'
                               onChange={this.changeCreationYear}
                               value={this.state.creationYear}
                               className='form-control from-group'
                        />

                        <Input type='text'
                               placeholder='summury history'
                               onChange={this.changehistory}
                               value={this.state.history}
                               className='form-control from-group'
                        />
                      <div>
                          <label htmlFor="image">Upload Image</label>
                          <input type="file" id="image"
                                 name="image" value="" required/>
                      </div>
                        <Button type='submit' Submit
                               className='btn btn-danger btn-block'
                        > Enregistrer</Button>
                  </FormGroup>
              </Form>
            </div>
            </div>)
        }
}

export default AddBand