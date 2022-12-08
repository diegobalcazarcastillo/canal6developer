import React from 'react'
import { Segment, Input, Button, Label, Grid } from 'semantic-ui-react'
import { IUnidadSimple } from '../../../models/unidadsimple'

interface IProps
{
    unidadaSimple: IUnidadSimple
    isEdit: boolean,
    handleUnidadSimpleChange(event: any) : void
    handleCreateEditUnidadSimple() : void
 }

const NuevaUnidadSimpleAreaDDefinicion: React.FC<IProps> = 
    ({unidadaSimple, isEdit, handleUnidadSimpleChange, handleCreateEditUnidadSimple}) => {

    const createEditAddButton = (edit: boolean) => {
        var botonEdit;
        if(!edit){
            botonEdit = <Button
            color="orange"
            content="Agregar"
            labelPosition="left"
            onClick={handleCreateEditUnidadSimple}
            icon="edit"
          ></Button>;
        }
        else {
            botonEdit = <Button
            color="teal"
            content="Editar"
            labelPosition="left"
            onClick={handleCreateEditUnidadSimple}
            icon="edit"
          ></Button>
        }
       return botonEdit
    }

    const handleTextChange = event => { handleUnidadSimpleChange(event)}


    return (
       
        <Segment >
            
            <Label circular color='teal' key='teal'>1</Label> <Label>Área de identificación</Label><br /><br />
            <Label style={{ marginBottom: '0.7em' }}  as='a' color='teal' ribbon>1.1 Código de referencia</Label>
            <Input fluid style={{ marginBottom: '0.7em' }}  value={unidadaSimple.id_categoria + '-' + unidadaSimple.id } 
                                                                   labelPosition="left" name="id_categoria"  onChange={handleTextChange}></Input>

            <Label style={{ marginBottom: '0.7em' }}  as='a' color='teal' ribbon> 1.2 Número topográfico</Label>
            <Input fluid style={{ marginBottom: '0.7em' }} labelPosition="left"  
                    placeholder={ "Hi-XXXX" } 
                    defaultValue={ isEdit === false ?  null : unidadaSimple.numero_topografico}
                    name="numero_topografico" onChange={handleTextChange}>
            </Input>

            <Label style={{ marginBottom: '0.7em' }} as='a' color='teal' ribbon> 1.3 Número topográfico</Label>
            <Grid celled="internally">
                <Grid.Row columns={2}>
                    <Grid.Column>
                     <Input fluid style={{ marginBottom: '0.7em' }} label={<Label> # de casetes</Label>} labelPosition="left" 
                     placeholder={"1"} 
                     defaultValue={( isEdit == false ? "" : unidadaSimple.nT_numerocasetes )}
                     name="nT_numerocasetes" onChange={handleTextChange}/>
                    </Grid.Column>

                    <Grid.Column>
                        <Input fluid style={{ marginBottom: '0.7em' }} label={<Label> # de cinta </Label>} labelPosition="left" 
                        placeholder={"1"} 
                        defaultValue={( isEdit == false ? "" : unidadaSimple.nT_numerocinta )} name="nT_numerocinta" onChange={handleTextChange}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Label style={{ marginBottom: '0.7em' }} as='a' color='teal' ribbon>1.4 Duración</Label>
            <Input fluid style={{ marginBottom: '0.7em' }} labelPosition="left" 
                placeholder={ (isEdit == false ? "00:00:00" : "" )} 
                defaultValue={( isEdit == false ? "" : unidadaSimple.duracion )}
                name="duracion" onChange={handleTextChange} />
            <Button.Group  widths="2">
                {createEditAddButton(isEdit)}
            </Button.Group>
        </Segment>
      )
}

export default NuevaUnidadSimpleAreaDDefinicion
