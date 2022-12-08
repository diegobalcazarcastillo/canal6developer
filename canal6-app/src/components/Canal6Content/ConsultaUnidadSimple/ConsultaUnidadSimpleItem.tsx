import React, {useContext} from 'react'
import { Button, Table } from 'semantic-ui-react'
import { IUnidadSimple } from '../../../models/unidadsimple'
import UnidadSimpleStore from '../../../stores/UnidadSimpleStore'
import { useNavigate } from 'react-router-dom'
import {observer} from 'mobx-react-lite'


interface IProps
{
    UnidadSimple: IUnidadSimple
}

const ConsultaUnidadSimpleItem: React.FC<IProps> = ({UnidadSimple}) => {
  const {showEdit, setUnidadSimple } = useContext(UnidadSimpleStore)
  const navigate = useNavigate();
  const OnEdit = () => {
    showEdit(true);
    setUnidadSimple(UnidadSimple)
    navigate('/Main/Editar')
  }

  return (
    <Table.Row key={UnidadSimple.id}>
        <Table.Cell collapsing>
          <Button onClick={OnEdit}> Editar </Button>
        </Table.Cell>
        <Table.Cell>{UnidadSimple.id_categoria + '-' + UnidadSimple.id} </Table.Cell>
        <Table.Cell>{UnidadSimple.numero_topografico}</Table.Cell>
        <Table.Cell>{UnidadSimple.nT_numerocasetes}</Table.Cell>
        <Table.Cell>{UnidadSimple.nT_numerocinta}</Table.Cell>
        <Table.Cell>{UnidadSimple.duracion}</Table.Cell>
      </Table.Row>
  )
}

export default observer(ConsultaUnidadSimpleItem)
