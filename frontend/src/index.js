import React from "react";
import ReactDOM from 'react-dom'

import  AchatTicket from './pages/AchatTicket'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import LineUp from "./pages/LineUp";
import ShowGroupes from "./pages/ShowGroupes";
import Home from "./pages/Home"
import User from "./pages/User";
import EditUser from "./pages/EditUser";
import AddUser from "./pages/AddUser";
import AddPerson from "./pages/Client";


ReactDOM.render(
  <BrowserRouter>
   <Header/>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='achat-ticket' element={<AchatTicket/>}/>
        <Route path='/lineUp' element={<LineUp/>}/>
        <Route path='/groupes'element={<ShowGroupes/>}/>
        <Route path='/user'element={<User/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
        <Route path='edituser' element={<EditUser/>}/>
        <Route path='/person' element={<AddPerson/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)