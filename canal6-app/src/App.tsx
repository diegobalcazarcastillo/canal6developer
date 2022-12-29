import React, { Component} from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import NuevaUnidadSimple from './components/Canal6Content/NuevaUnidadSimple/NuevaUnidadSimple';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainCanal6 from './MainCanal6';
import ConsultaUnidadSimple from './components/Canal6Content/ConsultaUnidadSimple/ConsultaUnidadSimple';
import Login from './Auth/Login';
import Register from './Auth/Register' 
import NotFound from './NotFound'



class App extends Component {
  
  render() {
  return (
    
    <Routes>
      <Route path='/Main' element={<MainCanal6/>} >
          <Route path="Nueva" element={<NuevaUnidadSimple />} />
          <Route path="Editar" element={<NuevaUnidadSimple />} />
          <Route index path="Consulta" element={<ConsultaUnidadSimple />} />
      </Route>
      <Route path='/Login' element={<Login />} ></Route>
      <Route path='/Register' element={<Register />} ></Route>
      <Route path='/NotFound' element={<NotFound />} ></Route>
    </Routes>
    
  )
}
}

export default App;

// /* */
