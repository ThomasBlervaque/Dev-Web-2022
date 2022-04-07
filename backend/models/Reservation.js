const mongoose = require("mongoose")
//const Client = require("../models/Client")
//const festivalDay = require("../models/FestivalDay")

const templateReservation = new mongoose.Schema({
dateResevation:{
        type: Date,
        required: true
    },
    client:[],
    festivalDay:[],
})

module.exports = mongoose.model('Reservation', templateReservation, 'Reservation')
