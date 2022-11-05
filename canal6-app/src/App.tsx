import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react';
import SidePanel from './components/SidePanel/SidePanel'
import ColorPanel from './components/ColorPanel/ColorPanel'
function App() {
  return (
    <Grid column="equal" className='app'>
      <ColorPanel />
      <SidePanel />
    </Grid>
  );
}

export default App;
