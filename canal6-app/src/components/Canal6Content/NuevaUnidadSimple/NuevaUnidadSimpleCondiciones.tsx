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

const NuevaUnidadSimpleCondiciones: React.FC<IProps> = ({unidadSimple, isWaiting, handleUnidadSimpleChange, handleCreateEditUnidadSimple}) => {
  const handleTextChange = event => { handleUnidadSimpleChange(event)}
  
  return (
  <Segment>
    <Label circular color='grey' key='grey'>4</Label> <Label>Área de características físicas</Label><br /><br />
    <Input fluid style={{ marginBottom: '0.7em' }} 
    defaultValue={unidadSimple.condiciones_acceso}
    name="condiciones_acceso" onChange={handleTextChange} />


    <Button.Group  widths="2">
          <Button
                disabled={isWaiting}
                color="grey"
                content="Guardar"
                labelPosition="left"
                icon="edit"
                onClick={handleCreateEditUnidadSimple}
              ></Button>
        </Button.Group>
  </Segment>
  )
}

export default NuevaUnidadSimpleCondiciones
