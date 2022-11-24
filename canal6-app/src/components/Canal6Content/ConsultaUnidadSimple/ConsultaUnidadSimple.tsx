import React, {useContext} from 'react'
import { Table } from 'semantic-ui-react'
import { IUnidadSimple } from '../../../models/unidadsimple'
import {observer} from 'mobx-react-lite'
import UnidadSimpleStore from '../../../stores/UnidadSimpleStore'
import ConsultaUnidadSimpleItem from './ConsultaUnidadSimpleItem'
import ConsultaUnidadSimpleHeader from './ConsultaUnidadSimpleHeader'

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
    <ConsultaUnidadSimpleHeader/>
    <Table compact celled definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Unidad Simple</Table.HeaderCell>
          <Table.HeaderCell>Número Topográfico</Table.HeaderCell>
          <Table.HeaderCell>Número de casetas</Table.HeaderCell>
          <Table.HeaderCell>Número de cintas</Table.HeaderCell>
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
