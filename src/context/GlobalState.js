import React, { createContext, useReducer} from "react";
import  AddReducer from './AppReducer'



//Initial state

const initialState = {
    users:[
        {id:1, name: 'User One'},
        {id:2, name: 'User Two'},
        {id:3, name: 'User Three'},
    ]
}

// Create context

export  const  GlobolContext = createContext(initialState)