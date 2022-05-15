// Structure pour atteindre le serveur pour lancer les requêtes
const express = require('express')
const  app = express() // Création de l'application
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routeClient = require('./routes/Client')
const routeReservation = require('./routes/Reservation')
const routeFestivalDay = require('./routes/FestivalDay')
const routeBand = require('./routes/Band')
const cors = require('cors')
const bodyParser = require("express");



dotenv.config()
// AddUser de la base de donnée via le fichier .env
mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected"))
app.use(express.json()) // Convertir les données au formats JSON
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
//app.use('/',routeConnexion) //Middelware Function permettant d'avoir acces à la requête et sa réponse
app.use('/',routeClient)
app.use('/',routeFestivalDay)
app.use('/',routeReservation)
app.use('/',routeBand)
app.set("view engine", "ejs");
app.listen(4000, ()=>console.log("Server is up and running")) // Indique le port sur lequel on a la réponse