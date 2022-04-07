const mongoose = require('mongoose')

// Déclaration du schéma de la structure de la table d'une personne

const templateClient= new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    clientName:{
        type: String,
        required: true
    },
     firstName:{
        type: String,
        required: true
    },
    birthDay:{
        type: Date,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Client', templateClient, 'Client')
