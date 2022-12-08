import React, {useContext, useEffect, useState} from 'react'
import { Button, Grid, Icon, Modal } from 'semantic-ui-react'
import CategoriaStore from '../../stores/CategoriaStore'
import {observer} from 'mobx-react-lite'
import { IInfoCategoria } from '../../models/InfoCategorias'
import agent from '../../api/agent'
import { ICategoria } from '../../models/categoria'

interface IProps
{
    categoria: ICategoria,
    mostrarInfo: boolean,
    setMostrarInfo (showInfo: boolean) : void
}

const CategoriaInfo: React.FC<IProps> = ({ mostrarInfo, setMostrarInfo, categoria}) => {
  
  const initInfoCategoria: IInfoCategoria = {
    nombre_acervo: "",
    nombre_coleccion: "",
    nombre_serie: "",
    nombre_subserie: "",
    nombre_grupo: "",
    nombre_subgrupo: "",
    nombre_conjunto: "",
    nombre_subconjunto: "",
  }

  const [infoCategoria, setInfoCategoria] = useState<IInfoCategoria>(initInfoCategoria)

  const loadInfo = async () => {
    console.log('LOAD_INFO');
    var nombre_acervo = await agent.Acervo.single(categoria.id_acervo)
    var nombre_coleccion = await agent.Coleccion.single(categoria.id_coleccion.toString())
    var nombre_serie = await agent.Serie.single(categoria.id_serie.toString())
    var nombre_subserie = await agent.SubSerie.single(categoria.id_subserie.toString())
    var nombre_grupo = await agent.Grupo.single(categoria.id_grupo.toString())
    var nombre_subgrupo = await agent.SubGrupo.single(categoria.id_subgrupo.toString())
    var nombre_conjunto = categoria.id_conjunto == null ? "" : await agent.Conjunto.single(categoria.id_conjunto.toString())
    var nombre_subconjunto = categoria.id_subconjunto == null ? "" : await agent.SubConjunto.single(categoria.id_subconjunto.toString())
    
    var NewInfoCategoria: IInfoCategoria = {
      nombre_acervo: nombre_acervo[0].nombre,
      nombre_coleccion: nombre_coleccion[0].nombre,
      nombre_serie: nombre_serie[0].nombre,
      nombre_subserie: nombre_subserie[0].nombre,
      nombre_grupo: nombre_grupo[0].nombre,
      nombre_subgrupo: nombre_subgrupo[0].nombre,
      nombre_conjunto: categoria.id_conjunto == null ? "N/A" : nombre_conjunto[0].nombre, //nombre_conjunto[0].nombre,
      nombre_subconjunto: categoria.id_subconjunto == null ? "N/A" : nombre_subconjunto[0].nombre,
    };
    setInfoCategoria(NewInfoCategoria); 
  }

  useEffect(() => {
    if (mostrarInfo) loadInfo(); //Solo debe de cargar cuando lleguen valores positivos
  }, [mostrarInfo]);

    return (
      <Modal open={mostrarInfo} dimmer="inverted">
        <Modal.Header>
          {" "}
          <Icon name="info" /> Información de la categoría
        </Modal.Header>
        <Modal.Content>
          <Grid centered>
            <Grid.Column width={6}>
              {"Id_Acervo : " + categoria.id_acervo} <br />
              {"Id_Colección : " + categoria.id_coleccion} <br />
              {"Id_Serie : " + categoria.id_serie} <br />
              {"Id_Subserie : " + categoria.id_subserie} <br />
              {"Id_Grupo : " + categoria.id_grupo} <br />
              {"Id_Subgrupo : " + categoria.id_subgrupo} <br />
              {"Id_Conjunto : " + categoria.id_conjunto} <br />
              {"Id_Subconjunto : " + categoria.id_subconjunto} <br />
            </Grid.Column>
            <Grid.Column width={6}>
              {" Descripción : " + infoCategoria.nombre_acervo} <br />
              {" Descripción : " + infoCategoria.nombre_coleccion} <br />
              {" Descripción : " + infoCategoria.nombre_serie} <br />
              {" Descripción : " + infoCategoria.nombre_subserie} <br />
              {" Descripción : " + infoCategoria.nombre_grupo} <br />
              {" Descripción : " + infoCategoria.nombre_subgrupo} <br />
              {" Descripción : " + infoCategoria.nombre_conjunto} <br />
              {" Descripción : " + infoCategoria.nombre_subconjunto} <br />
            </Grid.Column>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" inverted onClick={() => setMostrarInfo(false)}>
            Cerrar
          </Button>
        </Modal.Actions>
      </Modal>
    );
}




export default observer(CategoriaInfo)
