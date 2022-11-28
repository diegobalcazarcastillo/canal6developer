import React from 'react'
import { Segment, Label, Input, Button } from 'semantic-ui-react'
import { IUnidadSimple } from '../../../models/unidadsimple'


interface IProps
{
    unidadSimple: IUnidadSimple
}

const NuevaUnidadSimpleCondiciones: React.FC<IProps> = ({unidadSimple}) => {
  return (
    <Segment >
    <Label circular color='grey' key='grey'>4</Label> <Label>Área de características físicas</Label><br /><br />
  <Input fluid style={{ marginBottom: '0.7em' }} 
  defaultValue={unidadSimple.condiciones_acceso}
  name="condiciones_acceso"
  ></Input>


<Button.Group  widths="2">
      <Button
            color="grey"
            content="Editar"
            labelPosition="left"
            icon="edit"
          ></Button>
    </Button.Group>

  </Segment>
  )
}

export default NuevaUnidadSimpleCondiciones
