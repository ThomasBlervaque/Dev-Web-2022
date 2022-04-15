import React from "react";
import ReactDOM from 'react-dom'

import  AchatTicket from './pages/AchatTicket'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import LineUp from "./pages/LineUp";
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import User from "./pages/User";
import EditUser from "./pages/EditUser";
import AddUser from "./pages/AddUser";
import Inscription from "./pages/Inscription"

ReactDOM.render(
  <BrowserRouter>
   <Header/>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='achat-ticket' element={<AchatTicket/>}/>
        <Route path='/lineUp' element={<LineUp/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/user'element={<User/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
        <Route path='edituser' element={<EditUser/>}/>
        <Route path='/inscription' element={<Inscription/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)