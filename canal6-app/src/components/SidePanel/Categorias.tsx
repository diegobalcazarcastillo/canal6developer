import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { ICategoria } from '../../models/categoria'
import CategoriaForm from './CategoriaForm'
import CategoriaItem from './CategoriaItem'
import agent from '../../api/agent'
//Interface del componente

interface IState {
  categorias: ICategoria[],
  modal: boolean
}

const Categorias = () => {

  const [categorias, setCategorias] = useState<ICategoria[]>([]);
  const [selectedModal, setModal] = useState(false);
  
  useEffect(() => {
    agent.Categorias.List().then( (response) => 
    {
      setCategorias(response);
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

  const handleCreateChannel = (categoria: ICategoria) => {
    
    console.log(categoria);
    agent.Categorias.create(categoria).then(() => 
    setCategorias([...categorias, categoria ])
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
      <CategoriaForm createCategoria={handleCreateChannel} selectedModal={selectedModal} closeModal={closeModal} />
      </React.Fragment>
    )
  
}


export default Categorias
