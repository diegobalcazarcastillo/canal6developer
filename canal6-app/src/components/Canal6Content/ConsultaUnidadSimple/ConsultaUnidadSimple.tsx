import React, {useContext} from 'react'
import { Table } from 'semantic-ui-react'
import { IUnidadSimple } from '../../../models/unidadsimple'
import {observer} from 'mobx-react-lite'
import UnidadSimpleStore from '../../../stores/UnidadSimpleStore'
import ConsultaUnidadSimpleItem from './ConsultaUnidadSimpleItem'

const ConsultaUnidadSimple = () => {

  const {UnidadesSimplesElectas} = useContext(UnidadSimpleStore)
 
  const displayUnidadesSimples = (unidadesSimples: IUnidadSimple[]) => {
    return (    
    
        unidadesSimples.map((UnidadSimple) => 
          (
            <ConsultaUnidadSimpleItem key={UnidadSimple.id} UnidadSimple={UnidadSimple} />
          ))
          )
  }

  return (

  <React.Fragment>
    <Table compact celled definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Código de Referencia</Table.HeaderCell>
          <Table.HeaderCell>Número Topográfico</Table.HeaderCell>
          <Table.HeaderCell>Duración</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {displayUnidadesSimples(UnidadesSimplesElectas)}
      </Table.Body>
    </Table>
  </React.Fragment>
  )
}

export default observer(ConsultaUnidadSimple)
