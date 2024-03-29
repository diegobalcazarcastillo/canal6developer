import React from 'react'
import { Header, Icon, Segment } from 'semantic-ui-react'

const NuevaUnidadSimpleHeader = () => {
  return (
    <Segment clearing>

    <Header
        fluid="true"
        as="h2"
        floated="left"
        style={{marginBottom: 0}}
    >
        <span>
            Unidad Simple {'\u00A0'}   
            <Icon name={'new pied piper'} color="black" />
        </span>
    </Header>
    </Segment>
  )
}

export default NuevaUnidadSimpleHeader
