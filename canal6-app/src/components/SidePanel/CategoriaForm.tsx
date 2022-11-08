import React , {useState, useEffect }from 'react'
import axios from 'axios'
import { Button, Form, Icon, Input, Modal, Select } from 'semantic-ui-react'
import { IColeccion } from '../../models/coleccion'


class selectColeccion implements IColeccion  
{
  id: number;
  id_acervo: string;
  nombre: string;
  key!: number;
  value!: number;
  text!: string;
  constructor()
  {
    
     console.log('Constructor start');

  }

};

interface IProps{
    selectedModal: boolean,
    closeModal: () => void
}




const CategoriaForm: React.FC<IProps> = ({ selectedModal, closeModal }) => {


  const [optionColecciones, setoptionColecciones] = useState([]);
  const [colecciones, setColecciones] = useState<IColeccion[]>([]);

  useEffect(() => {
    axios.get<IColeccion[]>('http://localhost:5000/api/colecciones').then( (response) => 
    {
      setColecciones(response.data);
      
    })
    
  }
  
  

  , []);

  
  

  return (
    
    <Modal basic open={selectedModal}>
          <Modal.Header>Agregar Categoría</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>

                <Select placeholder='Contexto' options={colecciones.map(ds => {
              return {
                  key: ds.id,
                  text: ds.nombre,
                  value: ds.id
              }
            })}  ></Select>

                
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
              <Button basic color="red" inverted onClick={closeModal}>
                <Icon name="remove" /> Cancel
              </Button>
            </Modal.Actions>
          
        </Modal>
  )
}

export default CategoriaForm
