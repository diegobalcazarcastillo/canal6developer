import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { ICategoria } from '../../models/categoria'
import CategoriaForm from './CategoriaForm'
import CategoriaItem from './CategoriaItem'
//Interface del componente

interface IState {
  categorias: ICategoria[],
  modal: boolean
}

const Categorias = () => {

  const [categorias, setCategorias] = useState<ICategoria[]>([]);
  const [selectedModal, setModal] = useState(false);
  
  useEffect(() => {
axios.get<ICategoria[]>('http://localhost:5000/api/categorias').then( (response) => 
    {
      setCategorias(response.data);
    })
  },[])


  const closeModal = () => setModal(false)
  const openModal = () => setModal(true)
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
          ({categorias.length}) <Icon name="add" onClick={openModal}/>
        </Menu.Item>
      {displayCategorias(categorias)}
      </Menu.Menu>
      <CategoriaForm selectedModal={selectedModal} closeModal={closeModal} />
      </React.Fragment>
    )
  
}


export default Categorias
