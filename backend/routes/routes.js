const  express = require("express")
const membreTemplateCopy = require('../models/Membre')
const router = express.Router()

router.post('/membre', (request, response )=>{
    const Membre = new membreTemplateCopy({
        nomMembre: request.body.nomMembre,
        prenomMembre:request.prenomMembre,
        dateNaissance:request.dateNaissance,
        adresseMembre:request.address
    })
    Membre.save()
        .then(data =>{
            response.json(data)
        })
        .catch(error =>{
            response.json(error)
        })
})

module.exports = router