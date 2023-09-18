import React from 'react'
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App
