import axios from 'axios'
import React, { Component } from 'react'
import { Button, Form, Icon, Input, Menu, Modal } from 'semantic-ui-react'

//Función que asigna los nombres a las categorías de Canal6
function nameCategoria(categoria: any): string { 
  let strCategoria = categoria.id_acervo + "-" +
  categoria.id_coleccion + "-" +
  categoria.id_serie + "-" +
  categoria.id_subserie + "-" +
  categoria.id_grupo + "-" +
  categoria.id_subgrupo + "-" +
  categoria.id_conjunto ;
  
  return strCategoria
} ;

class Categorias extends Component {

  state = {
      categorias: [], 
      modal: false
  }

  openModal = () => this.setState({modal: true})
  closeModal = () => this.setState({modal: false})
  

  // Despliega dentro del componente la categoría
  displayCategorias = (categorias: any[]) => {
    return (
      categorias.length > 0 && 
      categorias.map((categoria) => (
        <Menu.Item
           key={categoria.id}
           onClick={() => console.log(categoria)}
           name={nameCategoria(categoria)}
           style={{opacity: 0.7}}>
            # {nameCategoria(categoria)}
        </Menu.Item>
      ))
    )
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/categorias').then( (response) => 
    {
      this.setState({
        categorias: response.data
      }) 
      
    })
  }


  render() {
    const { categorias, modal } = this.state
    console.log(categorias);


    return (
      <React.Fragment>
      <Menu.Menu style={{ paddingBottom: '2em'}}>
        <Menu.Item>
          <span><Icon name="exchange" /> Categorías </span> {' '}
          ({categorias.length}) <Icon name="add" onClick={this.openModal}/>
        </Menu.Item>
      {this.displayCategorias(categorias)}
      </Menu.Menu>
        <Modal basic open={modal}>
          <Modal.Header>Agregar Categoría</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <Input fluid label="Contexto" name="contexto" ></Input>
              </Form.Field>
              <Form.Field>
                <Input fluid label="SubContexto" name="subcontexto" ></Input>
              </Form.Field>
            </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button basic color="green" inverted>
                <Icon name="checkmark" /> Agregar
              </Button>
              <Button basic color="red" inverted onClick={this.closeModal}>
                <Icon name="remove" /> Cancel
              </Button>
            </Modal.Actions>
          
        </Modal>
      </React.Fragment>
    )
  }
}


export default Categorias
