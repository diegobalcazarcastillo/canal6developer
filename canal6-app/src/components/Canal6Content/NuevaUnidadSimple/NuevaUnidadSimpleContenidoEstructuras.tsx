import React from 'react'
import { Segment, Input, Button, Label, Grid } from 'semantic-ui-react'
import { IUnidadSimple } from '../../../models/unidadsimple'

interface IProps
{
  unidadSimple: IUnidadSimple
}


const NuevaUnidadSimpleContenidoEstructuras: React.FC<IProps> = ({unidadSimple}) =>{
  return (
    <Segment >
      <Label circular color='red' key='red'>3</Label> <Label>Área de contenido y estructuras</Label><br /><br />
    <Label style={{ marginBottom: '0.7em' }}  as='a' color='red' ribbon>3.1 Alcance y contenido</Label>
    <Input fluid style={{ marginBottom: '0.7em' }} 
    defaultValue={unidadSimple.alcance_contenido}
    name="alcance_contenido"
    ></Input>

    <Label style={{ marginBottom: '0.7em' }} as='a' color='red' ribbon> 3.2 Descriptores</Label>
    <Grid celled="internally">
        <Grid.Row columns={2}>
            <Grid.Column>
             <Input fluid style={{ marginBottom: '0.7em' }} label={<Label> Toponímicos </Label>} labelPosition="left" 
             defaultValue={unidadSimple.dept_toponimicos}
             name="dept_toponimicos" />
            </Grid.Column>

            <Grid.Column>
                <Input fluid style={{ marginBottom: '0.7em' }} label={<Label> Onomásticos </Label>} labelPosition="left" 
                defaultValue={unidadSimple.dept_onomasticos}
                name="dept_onomasticos" />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
            <Grid.Column>
             <Input fluid style={{ marginBottom: '0.7em' }} label={<Label> Cronológicos </Label>} labelPosition="left" 
             defaultValue={unidadSimple.dept_cronologicos}
             name="dept_cronologicos" />
            </Grid.Column>

            <Grid.Column>
                <Input fluid style={{ marginBottom: '0.7em' }} label={<Label> Otros actores </Label>} labelPosition="left" 
                defaultValue={unidadSimple.dept_otros}
                name="dept_otros" />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
            <Grid.Column>
             <Input fluid style={{ marginBottom: '0.7em' }} label={<Label> Tipo de registros </Label>} labelPosition="left" 
             defaultValue={unidadSimple.dept_tipoDRegistro}
             name="dept_tipoDRegistro" />
            </Grid.Column>
        </Grid.Row>
    </Grid>

   
    <Button.Group  widths="2">
      <Button
            color="red"
            content="Editar"
            labelPosition="left"
            icon="edit"
          ></Button>
    </Button.Group>
</Segment>
  )
}

export default NuevaUnidadSimpleContenidoEstructuras
