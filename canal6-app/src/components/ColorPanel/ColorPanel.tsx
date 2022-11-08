import React from 'react'
import { Sidebar, Divider, Menu, Button } from 'semantic-ui-react'

const ColorPanel = () => {
  return (
    <Sidebar
    as={Menu}
    icon="labeled"
    inverted
    vertical
    visible
    width="very thin"
    >
    <Divider />
    <Button icon="add" side="small" color="blue" ></Button>     
    </Sidebar>
    
    
  )
}

export default ColorPanel
