import React, {useEffect, useState} from 'react'
import { Button, Table } from 'semantic-ui-react'
import { IUnidadSimple } from '../../../models/unidadsimple'
import agent from '../../../api/agent'
const ConsultaUnidadSimple = () => {


    const [UnidadesSimples, setUnidadesSimples] = useState<IUnidadSimple[]>();



    useEffect(() => {

        const fetchData = async () => {
            await agent.UnidadSimple.List();
            console.log('CREADO');
            } 
        
      },[])


  return (
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
      <Table.Row>
        <Table.Cell collapsing>
          <Button > Editar </Button>
        </Table.Cell>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>September 14, 2013</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        
      </Table.Row>
    </Table.Body>

    
  </Table>
  )
}

export default ConsultaUnidadSimple
