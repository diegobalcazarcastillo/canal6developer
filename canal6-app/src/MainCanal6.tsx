import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { Grid } from 'semantic-ui-react';
import SidePanel from './components/SidePanel/SidePanel'
import ColorPanel from './components/ColorPanel/ColorPanel'
import InformationPanel from './components/Canal6Content/InformationPanel';
import { Outlet } from 'react-router-dom';
import NuevaUnidadSimple from './components/Canal6Content/NuevaUnidadSimple/NuevaUnidadSimple';

const MainCanal6 = () => {
  
  return (
    <Grid column="equal" className='app'>
      <ColorPanel/>
      <SidePanel />
     
      <Grid.Column width={12} style={{ marginLeft: 320}}>
        
            <Outlet/>
        
      </Grid.Column>
    </Grid>
  )
}


export default MainCanal6;
