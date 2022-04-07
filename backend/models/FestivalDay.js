const mongoose = require("mongoose")

const templateFestivalDay = new mongoose.Schema({
    dateFestival:{
        type: Date,
        required: true
    },
    numberScene:{
        type: Number,
        required: true
    },
    Band:[
        {
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
            photo:{
                type:String,
                required: true
            }
        }
    ]

})

module.exports = mongoose.model('FestivalDay', templateFestivalDay, 'FestivalDay')
