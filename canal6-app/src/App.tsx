import React, { Component} from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { Grid } from 'semantic-ui-react';
import SidePanel from './components/SidePanel/SidePanel'
import ColorPanel from './components/ColorPanel/ColorPanel'
import InformationPanel from './components/Canal6Content/InformationPanel';
import NuevaUnidadSimple from './components/Canal6Content/NuevaUnidadSimple/NuevaUnidadSimple';
import { Route, Routes } from 'react-router-dom';
import MainCanal6 from './MainCanal6';
class App extends Component {
  render() {
  return (
    <Routes>
      <Route path='/Main' element={<MainCanal6/>} >
          <Route path="Nueva" element={<NuevaUnidadSimple />} />
          <Route index path="*" element={<span> aquí es donde irá lo anidado </span>} />
      </Route>
    </Routes>
  )
}
}

export default App;
