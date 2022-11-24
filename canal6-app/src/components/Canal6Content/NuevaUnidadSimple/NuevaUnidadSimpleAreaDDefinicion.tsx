import React, {useContext, useState, useEffect} from 'react'
import { Segment, Input, Button, Label, Grid } from 'semantic-ui-react'
import CategoriaStore from '../../../stores/CategoriaStore'
import UnidadSimpleStore from '../../../stores/UnidadSimpleStore'
import {observer} from 'mobx-react-lite'
import { IUnidadSimple } from '../../../models/unidadsimple'
import { useNavigate } from 'react-router-dom'
const NuevaUnidadSimpleAreaDDefinicion = () => {

    const initialUnidadSimple = {
        id : -1,
        id_categoria: '',
        numero_topografico: '',
        nT_numerocasetes: -1,
        nT_numerocinta: -1,
        duracion: ''
    }

    useEffect(() => {
        console.log('ultimauNIDAD' + ultimaUnidadSimple.numero_topografico)
      }, []);

    const [unidadsimple, setUnidadSimple] = useState<IUnidadSimple>(initialUnidadSimple)
    const {categoriaElecta, ultimaUnidadSimple} = useContext(CategoriaStore)
    const {createUnidadSimple, isEdit} = useContext(UnidadSimpleStore)
    

    const navigate = useNavigate()

    const createEditAddButton = (edit: boolean) => {
       
       
       
        var botonEdit;
        if(!edit){
            botonEdit = <Button
            color="orange"
            content="Agregar"
            labelPosition="left"
            onClick={handleSubmit}
            icon="edit"
          ></Button>;
        }
        else {
            botonEdit = <Button
            color="blue"
            content="Editar"
            labelPosition="left"
            onClick={() => {console.log('editar')}}
            icon="edit"
          ></Button>
        }
       return botonEdit
    }



    const handleTextChange = event => {

        setUnidadSimple({...unidadsimple, 
                        [event.target.name]: event.target.value, 
                        id: isNaN(ultimaUnidadSimple.id) ? 1 : (ultimaUnidadSimple.id + 1),
                        id_categoria: categoriaElecta.id});
        
        
    }

    //Agrega la Nueva Unidad Simple y regresa a Main
    const handleSubmit = () => {

        createUnidadSimple(unidadsimple)
        navigate("/Main");
    }

    return (
        <Segment >
            <Label style={{ marginBottom: '0.7em' }}  as='a' color='teal' ribbon>1.1 Código de referencia</Label>
            <Input fluid style={{ marginBottom: '0.7em' }} value={ (isEdit == false ? categoriaElecta.id :  ultimaUnidadSimple.id_categoria ) + '-' + 
                                                                   (isEdit == false ? isNaN(ultimaUnidadSimple.id) ? 1 : (ultimaUnidadSimple.id + 1) : ultimaUnidadSimple.id)} 
                                                                   labelPosition="left" name="id_categoria"  onChange={handleTextChange}></Input>

            <Label style={{ marginBottom: '0.7em' }}  as='a' color='teal' ribbon> 1.2 Número topográfico</Label>
            <Input fluid style={{ marginBottom: '0.7em' }} labelPosition="left" 
                    placeholder={ (isEdit == false ? "Hi-XXXX" : "" )} 
                    defaultValue={( isEdit == false ? "" : ultimaUnidadSimple.numero_topografico )}
                    name="numero_topografico" onChange={handleTextChange}>
            </Input>

            <Label style={{ marginBottom: '0.7em' }} as='a' color='teal' ribbon> 1.3 Número topográfico</Label>
            <Grid celled="internally">
                <Grid.Row columns={2}>
                    <Grid.Column>
                     <Input fluid style={{ marginBottom: '0.7em' }} label={<Label> # de casetes</Label>} labelPosition="left" 
                     placeholder={(isEdit == false ? "1" : "" )} 
                     defaultValue={( isEdit == false ? "" : ultimaUnidadSimple.nT_numerocasetes )}
                     name="nT_numerocasetes" onChange={handleTextChange}/>
                    </Grid.Column>

                    <Grid.Column>
                        <Input fluid style={{ marginBottom: '0.7em' }} label={<Label> # de cinta </Label>} labelPosition="left" 
                        placeholder={ (isEdit == false ? "1" : "" )} 
                        defaultValue={( isEdit == false ? "" : ultimaUnidadSimple.nT_numerocinta )} name="nT_numerocinta" onChange={handleTextChange}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <Label style={{ marginBottom: '0.7em' }} as='a' color='teal' ribbon>1.4 Duración</Label>
            <Input fluid style={{ marginBottom: '0.7em' }} labelPosition="left" 
                placeholder={ (isEdit == false ? "00:00:00" : "" )} 
                defaultValue={( isEdit == false ? "" : ultimaUnidadSimple.duracion )}
                name="duracion" onChange={handleTextChange} />
    
    
            
            <Button.Group  widths="2">
                {createEditAddButton(isEdit)}
            </Button.Group>
        </Segment>
      )
}

export default observer(NuevaUnidadSimpleAreaDDefinicion)
