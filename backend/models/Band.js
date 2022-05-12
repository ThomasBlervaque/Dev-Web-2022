const mongoose = require("mongoose")

const templateBand = new mongoose.Schema({
            nameBand:{
                type: String,
                required: true
            },
            numberMember:{
                type: Number,
                required: true
            },
            creationYear:{
                type: Date,
                required: true
            },
            history:{
                type: String,
                required: false
            },
            BandImage:{
                type:String,
                required:true
            }
})

module.exports = mongoose.model('Band', templateBand, 'Band')
