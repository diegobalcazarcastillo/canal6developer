import React from 'react'
import { Header, Icon, Segment } from 'semantic-ui-react'

const ConsultaUnidadSimpleHeader = () => {
  return (
    <Segment clearing>

    <Header
        fluid="true"
        as="h2"
        floated="left"
        style={{marginBottom: 0}}
    >
        <span >
            Consulta de unidades simples {'\u00A0'} 
            <Icon name={'grid layout'} color="black" />
        </span>
        
    </Header>
    </Segment>
  )
}

export default ConsultaUnidadSimpleHeader
