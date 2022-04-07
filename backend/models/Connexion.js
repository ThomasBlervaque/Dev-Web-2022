const mongoose = require('mongoose')

// Déclaration du schéma de la structure de la table d'un utilisateur pour la connexion

const connexionTemplate = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
     username:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Connexion', connexionTemplate, 'userConnexion')
