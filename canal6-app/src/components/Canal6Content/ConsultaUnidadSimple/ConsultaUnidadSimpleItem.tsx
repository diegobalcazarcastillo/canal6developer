import React, {useContext} from 'react'
import { Button, Table } from 'semantic-ui-react'
import { IUnidadSimple } from '../../../models/unidadsimple'
import {RootStoreContext} from '../../../stores/RootStore'
import { useNavigate } from 'react-router-dom'
import {observer} from 'mobx-react-lite'


interface IProps
{
    UnidadSimple: IUnidadSimple
}

const ConsultaUnidadSimpleItem: React.FC<IProps> = ({UnidadSimple}) => {
  const rootStore = useContext(RootStoreContext)
  const {setEdit, setUnidadSimple } = rootStore.unidadSimpleStore
  const navigate = useNavigate();
  const OnEdit = () => {
    setEdit(true);
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
