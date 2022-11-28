import React from 'react'

import { Segment, Label, Input, Button } from 'semantic-ui-react'
import { IUnidadSimple } from '../../../models/unidadsimple'

interface IProps
{
    unidadSimple: IUnidadSimple
}


const NuevaUnidadSimpleExLocCopias: React.FC<IProps> = ({unidadSimple}) => {
  return (
    <Segment >
    <Label circular color='orange' key='orange'>5</Label> <Label>Existencia y localización de copias</Label><br /><br />
  <Label style={{ marginBottom: '0.7em' }}  as='a' color='orange' ribbon>5.1 Existencia y localización de copia</Label>
  <Input fluid style={{ marginBottom: '0.7em' }} 
  defaultValue={unidadSimple.existencia_localizacion_copias}
  name="existencia_localizacion_copias"
  ></Input>
  <Label style={{ marginBottom: '0.7em' }}  as='a' color='orange' ribbon>5.2 Unidades de descripciones asociadas</Label>
  <Input fluid style={{ marginBottom: '0.7em' }} 
  defaultValue={unidadSimple.unidades_descripcion_asociada}
  name="unidades_descripcion_asociada"
  ></Input>
  <Label style={{ marginBottom: '0.7em' }}  as='a' color='orange' ribbon>5.2 Unidades de descripciones asociadas</Label>
  <Input fluid style={{ marginBottom: '0.7em' }} 
  defaultValue={unidadSimple.documentos_asociados}
  name="documentos_asociados"
  ></Input>


<Button.Group  widths="2">
      <Button
            color="orange"
            content="Editar"
            labelPosition="left"
            icon="edit"
          ></Button>
    </Button.Group>

  </Segment>
  )
}




export default NuevaUnidadSimpleExLocCopias
