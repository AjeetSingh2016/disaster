import React, {useState, useEffect} from 'react'
import Data from './Pages/Data'
import Home from './Pages/Home';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


const App = () => {

  return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Navigate to="/home" />} />
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/data" element={<Data/>}/>
        </Routes>
      </BrowserRouter>
      
  )
}

export default App
