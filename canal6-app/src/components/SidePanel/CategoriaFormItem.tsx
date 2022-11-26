import React, {SyntheticEvent, useState} from 'react'
import { Button, Form, Icon, Input, Select } from 'semantic-ui-react'
import { IAcervo, IColeccion } from '../../models/InfoCategorias'


/** Componente incompleto, lo tengo que terminar, este debe de darme la posibilidad de crear nuevos elementos*/

interface IProps
{
  handleSelectChange (event: SyntheticEvent, data: any): void,
  colecciones: any // Aquí debo de cambiar esto para que regrese algún grupo de retorno de las colecciones, pero de momento funciona
  placeholder: string,
  name: string,
  loadCatalogos (Acervo: IAcervo): void
}

const CategoriaFormItem: React.FC<IProps> = ({colecciones, handleSelectChange, placeholder, name, loadCatalogos}) => {
  
  const [cambiar, setCambiar] = useState<boolean>(false);
  const changeCambiar = () =>{ setCambiar(!cambiar) }
  

  

  const createAcervo = () => {
    const Acervo: IAcervo = {
      id: "1000",
      nombre: 'elagregado' 
    }
    loadCatalogos(Acervo);
  }

  const SelectOrInput = (selectOrInput: boolean) => {
    console.log('entré');
    var element;
    if(!selectOrInput)
      element = 
        
          <React.Fragment>
            <Form.Select size='large' 
                           placeholder={placeholder} 
                           name={name} 
                           onChange={handleSelectChange} 
                           options={colecciones.map(ds => {return {key: ds.id,text: ds.nombre,value: ds.id}})} />       
                           <Icon name='add' onClick={changeCambiar} ></Icon>
          </React.Fragment>
                           
  
    else

      element = 
      <React.Fragment>
        <Form.Input placeholder='Agregar...' />
        <Icon name='checkmark' onClick={createAcervo} ></Icon>
      </React.Fragment>
   return element; 
  }

  




  return (
    <Form.Group widths='equal'>
      
        {SelectOrInput(cambiar)}
        
    </Form.Group>
        
  )
}

export default CategoriaFormItem
