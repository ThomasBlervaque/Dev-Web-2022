const mongoose = require('mongoose')
const  express = require("express")
const router = express.Router()
const connexionTemplateCopy = require("../models/Connexion")
const   bcrypt = require('bcrypt')


router.post('/connexion', async (request, response, next) => {
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)


    const connect = new connexionTemplateCopy({
        ...request.body,
        password:securePassword
    })
    connect.save()
        .then(data => {
            response.json(data)
        }).catch(error => {
        response.json(error)
    })


})


module.exports = router
