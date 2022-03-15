import React from "react";
import ReactDOM from 'react-dom'
import  Home from './pages/Home'
import  AchatTicket from './pages/AchatTicket'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import LineUp from "./pages/LineUp";
import Contact from "./pages/Contact"
import ShowGroupes from "./pages/ShowGroupes";

ReactDOM.render(
  <BrowserRouter>
    <Header/>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='achat-ticket' element={<AchatTicket/>}/>
        <Route path='/lineUp' element={<LineUp/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/groupes'element={<ShowGroupes/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)