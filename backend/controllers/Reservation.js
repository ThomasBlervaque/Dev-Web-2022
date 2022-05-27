const express = require("express")
const router = express.Router()
const Reservation = require("../models/Reservation")



exports.createReservation = (request, response)=>{
    const reservation = new Reservation({
        client: request.body.client,
        dateReservation: request.body.dateReservation,
        oneDay: request.body.oneDay,
        twooDay: request.body.twooDay
    })
    reservation.save()
        .then(()=>{
            response.status(201).json({message: "Post saved succefully !"})
        })
        .catch((error)=>{
            response.status(400).json({error:error})
        })
}


exports.showReservation = (request, response)=>{
    Reservation.find({client :request.params.client})
        .then((festivalDay)=>{
            response.status(200).json(festivalDay)})
        .catch((error)=>{
            response.status(404).json({error:error})})
}

exports.modifyReservation = (request,response)=>{
    const reservation_ = new Reservation({
        _id: request.params.id,
        dateReservation: request.body.dateReservation,
        client: request.body.client,
        festivalDay: request.body.festivalDay,
    })
    Reservation.updateOne({_id:request.params.id}, reservation_)
    .then(()=>{
        response.status(201).json({message:"Person updated successfully !"})})
    .catch((error)=>{
        response.status(400).json({error:error})})
}

exports.deleteReservation = (request, response)=>{
    Reservation.deleteOne({_id:request.params.id})
        .then(()=>{
            response.status(200).json({message:"Deleted !"})
        })
    .catch((error)=>{
        response.status(400).json({error:error})})
}
