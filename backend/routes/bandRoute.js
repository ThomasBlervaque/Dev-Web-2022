const  express = require("express")
const routerBand = express.Router()
const Band = require("../models/Band")
const multer = require('multer')
//const fs = require('fs');
//const path = require('path');
const {request} = require("express");

const storage = multer.diskStorage({
    destination : (request, file, cb) =>{
        cb(null, './uploads/')
    },
    filename: (request, file, cb) =>
        cb(null, new Date().toISOString() + file.originalname )
})

const fileFilter = (request,file,cb)=>{
    //reject a file
    if (file.mimetype === 'image/jpg'|| file.mimetype === 'image.png'){
        cb(null,true)
    }else {
        cb(null,false)
    }
}

const upload = multer({
    storage:storage,
    limits:{
        fileSize: 1024 * 1024 *5},
    fileFilter : fileFilter
})


routerBand.post('/createBand', upload.single('bandImage'), async(request,
                                        response, next)=> {
        const band = new Band({
            nameBand: request.body.nameBand,
            numberMember: request.body.numberMember,
            creationYear: request.body.creationYear,
            history: request.body.history,
            bandImage:request.body.bandImage
            //: request.file.path

        })
    console.log("Données chargées")
    band.save()
                 .then(()=>{
                        response.status(201).json({message: "Post saved succefully !"})
                    })
                    .catch((error)=>{
                        response.status(400).json({error:error})
                    })
/*
        if (Band.find({"nameBand":this.state.nameBand }).count() < 0) {
            Console.log("Créer car n'existe pas")

        } else {
            json({message: "Le groupe existe déjà"})


        }*/
    })

routerBand.put('/modify/:id',(request,response, next)=>{
    const band = new Band({
        _id: request.params.id,
        nameBand: request.body.nameBand,
        numberMember: request.body.numberMember,
        creationYear: request.body.creationYear,
        history: request.body.history

    })
    Band.updateOne({_id:request.params.id}, band)
    .then(()=>{
        response.status(201).json({message:"Band is updated successfully !"})})
    .catch((error)=>{
        response.status(400).json({error:error})})
    }
)

routerBand.delete('/delete/:id',(request, response, next)=>{
    Band.deleteOne({_id:request.params.id})
        .then(()=>{
            response.status(200).json({message:"Deleted !"})
        })
    .catch((error)=>{
        response.status(400).json({error:error})})
    }
)

routerBand.get('/showAllBand', (request,response,next)=>{
    Band.find({}, (err, items)=>{
        if(err){
            console.log(err)
            response.status(500).send("Une erreur s'est produite", err)
        }
        else{
            response.render('imagesPage',{items:items})
        }
    })
})

module.exports = routerBand