const mongoose = require('mongoose')


const membreTemplate = new mongoose.Schema({
    nomMembre:{
        type: String,
        required: true
    },
     prenomMembre:{
        type: String,
        required: true
    },

    dateNaissance:{
        type:Date,
        required: true
    },
    adresseMembre:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Rock_and_Troll', membreTemplate)
