// Structure pour atteindre le serveur pour lancer les requêtes

const express = require('express')
const  app = express() // Création de l'application
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routeUrls = require('./routes/routes') // lien vers la route de l'url
const cors = require('cors')


dotenv.config()
// Connexion de la base de donnée via le fichier .env
mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected"))

app.use(express.json()) // Convertir les données au formats JSON
app.use(cors())
app.use('/app',routeUrls) //Middelware Function permettant d'avoir acces à la requête et sa réponse
app.listen(4000, ()=>console.log("Server is up and running")) // Indique le port sur lequel on a la réponse