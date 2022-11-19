import React, { Component} from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { Grid } from 'semantic-ui-react';
import SidePanel from './components/SidePanel/SidePanel'
import ColorPanel from './components/ColorPanel/ColorPanel'
import NuevaUnidadSimple from './components/Canal6Content/NuevaUnidadSimple/NuevaUnidadSimple';
import { Route, Routes } from 'react-router-dom';
import MainCanal6 from './MainCanal6';
import ConsultaUnidadSimple from './components/Canal6Content/ConsultaUnidadSimple/ConsultaUnidadSimple';
class App extends Component {
  render() {
  return (
    <Routes>
      <Route path='/Main' element={<MainCanal6/>} >
          <Route path="Nueva" element={<NuevaUnidadSimple />} />
          <Route index path="Consulta" element={<ConsultaUnidadSimple />} />
      </Route>
    </Routes>
  )
}
}

export default App;
