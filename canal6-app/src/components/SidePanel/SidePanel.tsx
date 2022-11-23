import React from 'react'
import { Menu } from 'semantic-ui-react'
import Categorias from './Categorias'
import UserPanel from './UserPanel'
const SidePanel = () => {
    return (
        <Menu
            size="huge"
            inverted
            fixed="left"
            vertical
            style={{ background: "#4c3c4c", fontSize: "1.2rem"}}
        >
            <UserPanel />
            <Categorias />
        </Menu>
    ) 
}

export default SidePanel
