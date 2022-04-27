const mongoose = require("mongoose")
const Band = require('../models/Band')

const templateFestivalDay = new mongoose.Schema({
    dateFestival:{
        type: Date,
        required: true
    },
    numberScene:{
        type: Number,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    Bands:[{type: mongoose.Schema.Types.ObjectId, ref:"Band"}],
})

module.exports = mongoose.model('FestivalDay', templateFestivalDay, 'FestivalDay')
