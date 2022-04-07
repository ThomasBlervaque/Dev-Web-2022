const mongoose = require('mongoose')
const  express = require("express")
const routerClient = express.Router()
const Client = require("../models/Client")
const bcrypt = require("bcrypt");


routerClient.post('/createClient',async(request, response, next)=>{
    const saltPassword = await bcrypt.genSalt(10) // Utilisation du sel pour le mot de passe
    const securePassword = await bcrypt.hash(request.body.password, saltPassword) // crytage du mot de passe


    const client = new Client({
        email: request.body.email,
        clientName: request.body.clientName,
        firstName: request.body.firstName,
        birthDay: request.body.birthDay,
        password: request.body.password,
        password:securePassword // enregistre le mot de passe crypté
    })
    client.save()
        .then(()=>{
            response.status(201).json({message: "Post saved succefully !"})
        })
        .catch((error)=>{
            response.status(400).json({error:error})
        })
    }
)
routerClient.get ('/showOneClient/:id',(request, response, next)=>{
    Client.findOne({_id:request.params.id})
        .then((person)=>{
            response.status(200).json(person)})
        .catch((error)=>{
            response.status(404).json({error:error})})
    }
)

routerClient.put('/modify/:id',(request,response, next)=>{
    const client = new Client({
        _id: request.params.id,
        clientName: request.body.personName,
        firstName: request.body.firstName,
        birthDay: request.body.birthDay,
        password: request.body.password

    })
    Client.updateOne({_id:request.params.id}, client)
    .then(()=>{
        response.status(201).json({message:"Person updated successfully !"})})
    .catch((error)=>{
        response.status(400).json({error:error})})
    }
)

routerClient.delete('/delete/:id',(request, response, next)=>{
    Client.deleteOne({_id:request.params.id})
        .then(()=>{
            response.status(200).json({message:"Deleted !"})
        })
    .catch((error)=>{
        response.status(400).json({error:error})})
    }
)

routerClient.get('/showAllClient', (request,response,next)=>{
    Client.find()
        .then((client)=>{
            response.status(200).json(client)})
        .catch((error)=>{
            response.status(400).json({error:error})
        })
})

module.exports = routerClient