import React from 'react'
import {  Routes, Route, Outlet } from 'react-router-dom'
import NuevaUnidadSimple from './NuevaUnidadSimple/NuevaUnidadSimple'

const InformationPanel = () => {
  return (

        <Routes>
            <Route path="/Nueva" element={<NuevaUnidadSimple/>} ></Route>
            
        </Routes>
       
  )
}

export default InformationPanel
