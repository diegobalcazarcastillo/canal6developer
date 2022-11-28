import React, {useContext, useEffect, useState} from 'react'
import { ICategoria } from '../../models/categoria'
import { Button, ButtonContent, Form, Grid, Icon, Input, Label, LabelDetailProps, Modal, Placeholder, Segment, Select } from 'semantic-ui-react'
import CategoriaStore from '../../stores/CategoriaStore'
import {observer} from 'mobx-react-lite'
import agent from '../../api/agent'
import { IAcervo } from '../../models/InfoCategorias'

interface IProps
{
    isModalVisible: boolean,
    showModalInfo (showInfo: boolean) : void
}

const CategoriaInfo: React.FC<IProps> = ({ isModalVisible, showModalInfo}) => {
  
    const {informacionCategoria, categoriaElecta} = useContext(CategoriaStore)



    return (
        
    <Modal open={isModalVisible} dimmer="inverted">
          <Modal.Header> <Icon name="info" /> Información de la categoría</Modal.Header>
          <Modal.Content>
            
                
         <Grid centered>
             <Grid.Column width={6}>
                {'Id_Acervo : ' + categoriaElecta.id_acervo } <br/>
                {'Id_Colección : ' + categoriaElecta.id_coleccion } <br/>
                {'Id_Serie : ' + categoriaElecta.id_serie } <br/>
                {'Id_Subserie : ' + categoriaElecta.id_subserie} <br/>
                {'Id_Grupo : ' + categoriaElecta.id_grupo } <br/>
                {'Id_Subgrupo : ' + categoriaElecta.id_subgrupo } <br/>
                {'Id_Conjunto : ' + categoriaElecta.id_conjunto} <br/>
                {'Id_Subconjunto : ' + categoriaElecta.id_subconjunto } <br/>
             </Grid.Column>
             <Grid.Column width={6}>
             {informacionCategoria.nombre_acervo} <br/>
                {' Descripción : ' + informacionCategoria.nombre_coleccion} <br/>
                {' Descripción : ' + informacionCategoria.nombre_serie} <br/>
                {' Descripción : ' + informacionCategoria.nombre_subserie} <br/>
                {' Descripción : ' + informacionCategoria.nombre_grupo} <br/>
                {' Descripción : ' + informacionCategoria.nombre_subgrupo} <br/>
                {' Descripción : ' + informacionCategoria.nombre_conjunto} <br/>
                {' Descripción : ' + informacionCategoria.nombre_subconjunto} <br/>
             </Grid.Column>
                
                
                </Grid>
                
              
        
            </Modal.Content>
            <Modal.Actions>
              <Button color="red" inverted onClick={() => showModalInfo(false)}>
                Cerrar
              </Button>
            </Modal.Actions>
          
        </Modal>
  )
}




export default observer(CategoriaInfo)
