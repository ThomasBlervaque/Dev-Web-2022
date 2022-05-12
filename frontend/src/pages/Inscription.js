import React from "react";
import axios from "axios";

class Inscription extends React.Component {

    constructor (props){
        super(props)
        this.state = {
            fullName : '',
            userName : '',
            email : '',
            password : '',
            confirmPassword : '',
            mailValide : false,
            mdpValide : false,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
      const name = e.target.name
      this.setState({
          [name]: e.target.value
      })
    }

    submitHandler = e => {
        e.preventDefault()
        //console.log(this.state)
        this.validationemail();
        this.confmdp();
        if(this.state.mailValide === true && this.state.mdpValide === true){
                console.log(this.state.mailValide,this.state.mdpValide)
                axios.post('http://localhost:4000/createClient', this.state)
                .then(response => {
                    console.log(response)
                    alert("Votre inscription est validée.")
                    //this.props.history.push('/connexion')
                    this.setState({
                        fullName : '',
                        userName : '',
                        email : '',
                        password : '',
                        confirmPassword : '',
                        mailValide : false,
                        mdpValide : false,
                    })
                })
                .catch(error => {
                    alert("Les mots de passe ne sont pas identiques")
                })
        }
        //console.log(this.state.mailValide,this.state.mdpValide)
        
    }

    validationemail = () => {
        let expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/ ;
        if (expressionReguliere.test(this.state.email)){	
            console.log("Adresse mail valide.");
            this.state.mailValide = true
        }
        else{
            alert("Adresse Mail invalide.")
            this.state.mailValide = false
        }
    }

    confmdp = () => {
        if(this.state.password === this.state.confirmPassword){
            this.state.mdpValide = true
        }
        else{
            this.state.mdpValide = false
            alert("Les mots de passe ne sont pas identiques.")
        }
    }

    render () {
        return <form onSubmit={this.submitHandler}>
            <div className={'row-wrapper'}>

                <div className="column-wrapper contact">
                    <h2>Veuillez remplir les informations ci-dessous</h2>
                    <div>
                        <label htmlFor="Nom">Nom :</label>
                        <input type="texte" id="nom" name="fullName" value={this.state.fullName} onChange={this.handleChange}
                               required/>
                    </div>
                    <div>
                        <label htmlFor="Prenom">Prenom :</label>
                        <input type="texte" id="prenom" name="userName" value={this.state.userName}
                               onChange={this.handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="Mail">Mail :</label>
                        <input type="texte" id="mail" name="email" data-testid="mail" value={this.state.email} onChange={this.handleChange}
                               required/>
                    </div>
                    <div>
                        <label htmlFor="Mdp">Mot de passe :</label>
                        <input type="password" id="mdp" name="password" value={this.state.password} onChange={this.handleChange}
                               required/>
                    </div>
                    <div>
                        <label htmlFor="ConfMdp">Confirmer mot de passe :</label>
                        <input type="password" id="confmdp" name="confirmPassword" value={this.state.confirmPassword}
                               onChange={this.handleChange} required/>
                    </div>
                    <div className="confirmer">
                        <button className='btn btn-primary' type="submit" id='sub' name='sub'>S'inscrire</button>
                    </div>
                    
                </div>
            </div>
        </form>


    }
}

export default Inscription