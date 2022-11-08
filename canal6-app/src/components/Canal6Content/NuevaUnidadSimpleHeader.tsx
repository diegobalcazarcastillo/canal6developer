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
            Nueva Unidad Simple
            <Icon name={'star outline'} color="black" />
        </span>
        <Header.Subheader>2 Usuarios conectados </Header.Subheader>
    </Header>
    </Segment>
  )
}

export default NuevaUnidadSimpleHeader
