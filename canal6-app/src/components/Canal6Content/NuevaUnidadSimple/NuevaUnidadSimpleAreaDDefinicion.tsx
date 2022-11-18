import React, {useContext, useState, useEffect} from 'react'
import { Segment, Input, Button, Label, Grid } from 'semantic-ui-react'
import CategoriaStore from '../../../stores/CategoriaStore'
import UnidadSimpleStore from '../../../stores/UnidadSimpleStore'
import {observer} from 'mobx-react-lite'
import { IUnidadSimple } from '../../../models/unidadsimple'
import agent from '../../../api/agent'
const NuevaUnidadSimpleAreaDDefinicion = () => {

    const initialUnidadSimple = {
        id : -1,
        id_categoria: '',
        numero_topografico: '',
        NT_numerocasetes: -1,
        NT_numerocinta: -1,
        duracion: ''
    }

    const [unidadsimple, setUnidadSimple] = useState<IUnidadSimple>(initialUnidadSimple)
    const {categoriaElecta, ultimaUnidadSimple} = useContext(CategoriaStore)
    const {createUnidadSimple} = useContext(UnidadSimpleStore)



    const handleTextChange = event => {

        setUnidadSimple({...unidadsimple, 
                        [event.target.name]: event.target.value, 
                        id_categoria: categoriaElecta.id});
        
        
    }

    const handleSubmit = () => {

        createUnidadSimple(unidadsimple)


        console.log(unidadsimple);
    }

    return (
        <Segment >
            <Label style={{ marginBottom: '0.7em' }}  as='a' color='teal' ribbon>1.1 Código de referencia</Label>
            <Input fluid style={{ marginBottom: '0.7em' }} placeholder={ categoriaElecta.id + '-' + (ultimaUnidadSimple.id + 1)   } labelPosition="left" name="id_categoria"  onChange={handleTextChange}></Input>

            <Label style={{ marginBottom: '0.7em' }}  as='a' color='teal' ribbon> 1.2 Número topográfico</Label>
            <Input fluid style={{ marginBottom: '0.7em' }} labelPosition="left" placeholder="XXX-XXX-XXX" name="numero_topografico" onChange={handleTextChange}></Input>

            <Label style={{ marginBottom: '0.7em' }} as='a' color='teal' ribbon> 1.3 Número topográfico</Label>
            <Grid celled="internally">
                <Grid.Row columns={2}>
                    <Grid.Column>
                     <Input fluid style={{ marginBottom: '0.7em' }} label={<Label> # de casetes</Label>} labelPosition="left" placeholder="1" name="NT_numerocasetes" onChange={handleTextChange}/>
                    </Grid.Column>

                    <Grid.Column>
                        <Input fluid style={{ marginBottom: '0.7em' }} label={<Label> # de cinta </Label>} labelPosition="left" placeholder=" 1 " name="NT_numerocinta" onChange={handleTextChange}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Label style={{ marginBottom: '0.7em' }} as='a' color='teal' ribbon>1.4 Duración</Label>
            <Input fluid style={{ marginBottom: '0.7em' }} labelPosition="left" placeholder="00:00" name="duracion" onChange={handleTextChange} />
    
    
            
            <Button.Group  widths="2">
                <Button
                    color="orange"
                    content="Agregar"
                    labelPosition="left"
                    onClick={handleSubmit}
                    icon="edit">
                </Button>
            </Button.Group>
        </Segment>
      )
}

export default observer(NuevaUnidadSimpleAreaDDefinicion)
