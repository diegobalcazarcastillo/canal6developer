import React, {  useEffect, useContext, useState } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { ICategoria } from '../../models/categoria'
import CategoriaForm from './CategoriaForm'
import CategoriaItem from './CategoriaItem'
import CategoriaStore from '../../stores/CategoriaStore'
import {observer} from 'mobx-react-lite'
import { create } from 'domain'

//Interface del componente

interface IState {
  categorias: ICategoria[],
  modal: boolean
}

const Categorias = () => {


  
  const [createCategoriaModal, setCreateCategoriaModal] = useState<boolean>(false);
  const ShowCreateCategoriaModal = (show: boolean) => {
    setCreateCategoriaModal(show)
  }

  const {categorias, loadCategoria} = useContext(CategoriaStore);
  //const {categorias} = categoriaStore

  useEffect(() => {
    loadCategoria()
  },[])

  const displayCategorias = (categorias: ICategoria[]) => {
    return (
      categorias.length > 0 && 
      categorias.map((categoria) => (
        <CategoriaItem key={categoria.id} categoria={categoria} />
      ))
    )
  }

  return (
    <React.Fragment>
    <Menu.Menu style={{ paddingBottom: '2em'}}>
      <Menu.Item>
        <span><Icon name="exchange" /> Categorías </span> {' '}
        ({categorias.length}) <Icon name="add" onClick={()=> ShowCreateCategoriaModal(true) }/>
      </Menu.Item>
    {displayCategorias(categorias)}
    </Menu.Menu>
    <CategoriaForm  ShowCreateCategoriaModal={ShowCreateCategoriaModal} createCategoriaModal={createCategoriaModal}  />
    </React.Fragment>
  ) 
}

export default observer(Categorias)