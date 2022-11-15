import React, {useContext} from 'react'
import { Segment, Input, Button, Label, Grid } from 'semantic-ui-react'
import CategoriaStore from '../../stores/CategoriaStore'
import {observer} from 'mobx-react-lite'

const NuevaUnidadSimpleAreaDDefinicion = () => {

    const {categoriaElecta} = useContext(CategoriaStore)


    return (
        <Segment >
            <Label style={{ marginBottom: '0.7em' }}  as='a' color='teal' ribbon>
             1.1 Código de referencia
            </Label>
            <Input fluid
            style={{ marginBottom: '0.7em' }}
            placeholder={categoriaElecta.id}
            labelPosition="left"
            
            ></Input>

            <Label style={{ marginBottom: '0.7em' }}  as='a' color='teal' ribbon>
             1.2 Número topográfico
            </Label>
            <Input fluid        
            style={{ marginBottom: '0.7em' }}
            
            labelPosition="left"
            placeholder="XXX-XXX-XXX"
            ></Input>

            <Label style={{ marginBottom: '0.7em' }} 
            as='a' color='teal' ribbon>
             1.3 Número topográfico
            </Label>
            <Grid celled="internally">
                <Grid.Row columns={2}>
                    <Grid.Column>

                    <Input fluid        
                        style={{ marginBottom: '0.7em' }}
                        label={<Label> # de casetes</Label>}
                        labelPosition="left"
                        placeholder="1"
                        ></Input>
                    </Grid.Column>

                    <Grid.Column>
                    <Input fluid        
                        style={{ marginBottom: '0.7em' }}
                        label={<Label> # de cinta </Label>}
                        labelPosition="left"
                        placeholder=" 1 "
                        ></Input>
                    </Grid.Column>

                </Grid.Row>
            </Grid>

            

            <Label style={{ marginBottom: '0.7em' }} 
            as='a' color='teal' ribbon>
             1.4 Duración
            </Label>

            <Input fluid        
            style={{ marginBottom: '0.7em' }}
            labelPosition="left"
            placeholder="00:00"
            ></Input>
    
    
            
            <Button.Group  widths="2">
                <Button
                    color="orange"
                    content="Agregar"
                    labelPosition="left"
                    icon="edit">
                </Button>
            </Button.Group>
        </Segment>
      )
}

export default observer(NuevaUnidadSimpleAreaDDefinicion)
