import React from 'react'
import { Segment, Input, Button, Label, Grid } from 'semantic-ui-react'
import { IUnidadSimple } from '../../../models/unidadsimple'


interface IProps
{
  unidadSimple: IUnidadSimple
  isWaiting: boolean
  handleUnidadSimpleChange(event: any) : void
  handleCreateEditUnidadSimple() : void
}

const NuevaUnidadSimpleAreaCaractFisica: React.FC<IProps> = ({unidadSimple, isWaiting, handleUnidadSimpleChange, handleCreateEditUnidadSimple}) => {
  const handleTextChange = event => { handleUnidadSimpleChange(event)}
  
  return (
    <Segment >
      <Label circular color='blue' key='blue'>2</Label> <Label>Área de características físicas</Label><br /><br />
    <Label style={{ marginBottom: '0.7em' }}  as='a' color='blue' ribbon>2.1 Soporte</Label>
    <Input fluid style={{ marginBottom: '0.7em' }} 
    defaultValue={unidadSimple.soporte} onChange={handleTextChange} name="soporte"
    ></Input>

    <Label style={{ marginBottom: '0.7em' }} as='a' color='blue' ribbon> 2.2 Inscripciones y/o etiquetas</Label>
    <Grid celled="internally">
        <Grid.Row columns={2}>
            <Grid.Column>
              <Input fluid style={{ marginBottom: '0.7em' }} label={<Label> Casete </Label>} labelPosition="left" 
              defaultValue={unidadSimple.ie_casete} onChange={handleTextChange} 
              name="ie_casete" />
            </Grid.Column>

            <Grid.Column>
                <Input fluid style={{ marginBottom: '0.7em' }} label={<Label> Caja protectora </Label>} labelPosition="left" 
                defaultValue={unidadSimple.ie_cajaprotectora} onChange={handleTextChange} 
                name="ie_cajaprotectora" />
            </Grid.Column>
        </Grid.Row>
    </Grid>

    <Button.Group  widths="2">
      <Button
            disabled={isWaiting}
            color="blue"
            content="Guardar"
            labelPosition="left"
            icon="edit"
            onClick={handleCreateEditUnidadSimple}
          ></Button>
    </Button.Group>
</Segment>
  )
}

export default NuevaUnidadSimpleAreaCaractFisica
