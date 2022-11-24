import React, {SyntheticEvent, useState} from 'react'
import { Button, Form, Icon, Input, Select } from 'semantic-ui-react'
import { IColeccion } from '../../models/InfoCategorias'


/** Componente incompleto, lo tengo que terminar, este debe de darme la posibilidad de crear nuevos elementos*/

interface IProps
{
  handleSelectChange (event: SyntheticEvent, data: any): void,
  colecciones: IColeccion[]
  placeholder: string,
  name: string,
}

const CategoriaFormItem: React.FC<IProps> = ({colecciones, handleSelectChange, placeholder, name}) => {
  
  const [cambiar, setCambiar] = useState<boolean>(false);
  const changeCambiar = () =>{ setCambiar(!cambiar) }

  

  const SelectOrInput = (selectOrInput: boolean) => {
    console.log('entré');
    var element;
    if(!selectOrInput)
      element = 
        <Form.Select fluid size='large' 
                           placeholder={placeholder} 
                           name={name} 
                           onChange={handleSelectChange} 
                           options={colecciones.map(ds => {return {key: ds.id,text: ds.nombre,value: ds.id}})} />       
  
    else
      element = 
        <Form.Input fluid placeholder='Agregar...' />
    
   return element; 
  }




  return (
    <Form.Group widths='equal'>
      
        {SelectOrInput(cambiar)}
        <Icon fluid name='add' onClick={changeCambiar} ></Icon>
    </Form.Group>
        
  )
}

export default CategoriaFormItem
