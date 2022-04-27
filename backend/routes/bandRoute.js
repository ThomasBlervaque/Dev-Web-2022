const  express = require("express")
const routerBand = express.Router()
let Band = require("../models/Band")

let multer = require('multer')
const path = require("express");

let storage = multer.diskStorage({
    destination : (request, file, cb) =>{
        cb(null, 'uploads')
    },
    filename: (request, file, cb) =>
        cb(null, file.filename + '-'+ Date.now())
})
let upload = multer({storage:storage})

/*routerBand.post('/createBand', Band.single('image'), async(request,
                                        response, next)=>{
    const band = new Band({
        nameBand: request.body.nameBand,
        numberMember: request.body.numberMember,
        creationYear: request.body.creationYear,
        history: request.body.history,
        img:{
            data : fs.readFileSync(path.join(__dirname + 'uploads' + request.file.filename)),
            contentType: 'image/png'
        }
    })
    Band.create(obj,(err, item) =>{
      if (err){
          console.log(err)
      }
      else {
         band.save()
                 .then(()=>{
                        response.status(201).json({message: "Post saved succefully !"})
                    })
                    .catch((error)=>{
                        response.status(400).json({error:error})
                    })
      }
    })
       ** (Band.find({ "email": clientMail }).count()<0) {**


       **}
       else {
             json({message: "L'utilisateur existe déjà"})
       }**
   }
)*/

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
    Band.find()
        .then((client)=>{
            response.status(200).json(client)})
        .catch((error)=>{
            response.status(400).json({error:error})
        })
})

module.exports = routerBand