const mongoose = require("mongoose")
const Client = require('../models/Client')
const FestivalDay = require('../models/FestivalDay')

const templateReservation = new mongoose.Schema({
    client:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    dateReservation:{
        type:Date,
        required: true
    },
    oneDay:{
        type: Number,
        required: true
    },
    twooDay:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Reservation', templateReservation, 'Reservation')
