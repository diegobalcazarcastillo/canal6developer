import React from 'react'

import { Segment, Label, Input, Button } from 'semantic-ui-react'
import { IUnidadSimple } from '../../../models/unidadsimple'

interface IProps
{
  unidadSimple: IUnidadSimple
  isWaiting: boolean
  handleUnidadSimpleChange(event: any) : void
  handleCreateEditUnidadSimple() : void
}


const NuevaUnidadSimpleExLocCopias: React.FC<IProps> = ({unidadSimple, isWaiting, handleUnidadSimpleChange, handleCreateEditUnidadSimple}) => {
  const handleTextChange = event => { handleUnidadSimpleChange(event)}
  return (
    <Segment >
    <Label circular color='orange' key='orange'>5</Label> <Label>Existencia y localización de copias</Label><br /><br />
  <Label style={{ marginBottom: '0.7em' }}  as='a' color='orange' ribbon>5.1 Existencia y localización de copia</Label>
  <Input fluid style={{ marginBottom: '0.7em' }} 
  defaultValue={unidadSimple.existencia_localizacion_copias}
  name="existencia_localizacion_copias" onChange={handleTextChange}
  ></Input>
  <Label style={{ marginBottom: '0.7em' }}  as='a' color='orange' ribbon>5.2 Unidades de descripciones asociadas</Label>
  <Input fluid style={{ marginBottom: '0.7em' }} 
  defaultValue={unidadSimple.unidades_descripcion_asociada}
  name="unidades_descripcion_asociada" onChange={handleTextChange}
  ></Input>
  <Label style={{ marginBottom: '0.7em' }}  as='a' color='orange' ribbon>5.2 Unidades de descripciones asociadas</Label>
  <Input fluid style={{ marginBottom: '0.7em' }} 
  defaultValue={unidadSimple.documentos_asociados}
  name="documentos_asociados" onChange={handleTextChange}
  ></Input>


<Button.Group  widths="2">
      <Button
            disabled={isWaiting}
            color="orange"
            content="Editar"
            labelPosition="left"
            icon="edit"
            onClick={handleCreateEditUnidadSimple}
          ></Button>
    </Button.Group>
  </Segment>
  )
}




export default NuevaUnidadSimpleExLocCopias
