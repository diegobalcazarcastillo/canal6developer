import React, {  useEffect, useContext } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { ICategoria } from '../../models/categoria'
import CategoriaForm from './CategoriaForm'
import CategoriaItem from './CategoriaItem'
import CategoriaStore from '../../stores/CategoriaStore'
import {observer} from 'mobx-react-lite'

//Interface del componente

interface IState {
  categorias: ICategoria[],
  modal: boolean
}

const Categorias = () => {

  const categoriaStore = useContext(CategoriaStore);

  const {categorias} = categoriaStore


  
  useEffect(() => {

    categoriaStore.loadCategoria()
    
  },[categoriaStore])


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
          ({categorias.length}) <Icon name="add" onClick={()=> categoriaStore.ShowModal(true) }/>
        </Menu.Item>
      {displayCategorias(categorias)}
      </Menu.Menu>
      <CategoriaForm   />
      </React.Fragment>
    )
  
}


export default observer(Categorias)
