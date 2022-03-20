const mongoose = require('mongoose')


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

module.exports = mongoose.model('rock_and_troll', connexionTemplate)
