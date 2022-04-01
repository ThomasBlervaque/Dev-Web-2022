const mongoose = require('mongoose')
const  express = require("express")
const router = express.Router()
const connexionTemplateCopy = require("../models/Connexion")
const   bcrypt = require('bcrypt')

// Requête post pour l'insertion des données
router.post('/connexion', async (request, response, next) => {
    const saltPassword = await bcrypt.genSalt(10) // Utilisation du sel pour le mot de passe
    const securePassword = await bcrypt.hash(request.body.password, saltPassword) // crytage du mot de passe

    const connect = new connexionTemplateCopy({
        ...request.body,  // spread : pour tous les élement du request.body
        password:securePassword // enregistre le mot de passe crypté
    })
    connect.save()
        .then(data => {
            response.json(data)
        }).catch(error => {
        response.json(error)
    })
})

// Requête pour la liste des utilisateurs
router.get('/connexion/list', (req, res, next) => {
    connexionTemplateCopy.find()
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
});

// Supression d'un utilisateur
router.delete('/connexion/delete/:id', (req, res, next) => {
  connexionTemplateCopy.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
});

module.exports = router
