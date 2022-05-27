import React, { useState } from "react";
import ReactDOM from 'react-dom'
import  AchatTicket from './pages/Ticket'
import {BrowserRouter, Routes, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import LineUp from "./pages/LineUp";
import Home from "./pages/Home"
import Inscription from "./pages/Inscription"
import Connexion from "./pages/Connexion";
import HeaderNoCo from "./components/HeaderNoCo";
import MyTicket from "./pages/MyTicket";


function App(){
        const connected = sessionStorage.getItem('JWT')

        if(connected == null){
            return (
                <BrowserRouter>
                    <HeaderNoCo/>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path='/lineUp' element={<LineUp/>}/>
                        <Route path='/connexion' element={<Connexion />}/>
                        <Route path='/inscription' element={<Inscription/>}/>
                    </Routes>
                </BrowserRouter>
                )
        }
        else{
            return (
                <BrowserRouter>
                    <Header/>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path='/lineUp' element={<LineUp/>}/>
                        <Route path='achat-ticket' element={<AchatTicket/>}/>
                        <Route path='/lineUp' element={<LineUp/>}/>
                        <Route path='/myticket' element={<MyTicket/>}/>
                    </Routes>
                </BrowserRouter>
                )
        }
}

export default  App