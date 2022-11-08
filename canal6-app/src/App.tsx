import React, { Component} from 'react';
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import { Grid } from 'semantic-ui-react';
import SidePanel from './components/SidePanel/SidePanel'
import ColorPanel from './components/ColorPanel/ColorPanel'
import NuevaUnidadSimple from './components/Canal6Content/NuevaUnidadSimple';
class App extends Component {
  render() {
  return (
    <Grid column="equal" className='app'>
      <ColorPanel/>
      <SidePanel />
     
      <Grid.Column width={12} style={{ marginLeft: 320}}>
        <NuevaUnidadSimple />
      </Grid.Column>
    </Grid>
  )
}
}

export default App;
