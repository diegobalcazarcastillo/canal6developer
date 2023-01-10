import React , {useState, useEffect, SyntheticEvent, useContext }from 'react'
import { Button, Form, Icon, Modal, Placeholder, Select } from 'semantic-ui-react'
import { IAcervo, IColeccion, IConjunto, IGrupo, ISerie, ISubconjunto, ISubGrupo, ISubSerie } from '../../models/InfoCategorias'
import agent from '../../api/agent'
import { ICategoria } from '../../models/categoria'
import {RootStoreContext} from '../../stores/RootStore'
import {observer} from 'mobx-react-lite'
import CategoriaFormItem from './CategoriaFormItem'

interface IProps {
  ShowCreateCategoriaModal(show: boolean),
  createCategoriaModal: boolean
}

const CategoriaForm: React.FC<IProps> = ({ShowCreateCategoriaModal, createCategoriaModal}) => {

  const initialCategoria = {
    id: '',
    id_acervo: '',
    id_coleccion: null,
    id_serie: null,
    id_subserie: null,
    id_grupo: null,
    id_subgrupo: null,
    id_conjunto: null,
    id_subconjunto: null
  }

 

  const [categoria, setCategoria] = useState<ICategoria>(initialCategoria)
  const [acervos, setAcervos] = useState<IAcervo[]>([]);
  const [colecciones, setColecciones] = useState<IColeccion[]>([]);
  const [series, setSerie] = useState<ISerie[]>([]);
  const [subseries, setSubserie] = useState<ISubSerie[]>([]);
  const [grupos, setGrupo] = useState<IGrupo[]>([]);
  const [subgrupos, setSubGrupo] = useState<ISubGrupo[]>([]);
  const [conjuntos, setConjunto] = useState<IConjunto[]>([]);
  const [subconjuntos, setSubconjunto] = useState<ISubconjunto[]>([]);

  const RootStore = useContext(RootStoreContext)
  const {createCategoria} = RootStore.categoriaStore
  
  const OnOpenModal = (event: SyntheticEvent, data: object) => 
  {
    agent.Acervo.List().then( (response) => {setAcervos(response);}) /* Carga Primera cadena*/
  }

  const handleSelectChange = (event: SyntheticEvent, data: any) => { 
    
    setCategoria({...categoria, [data.name]: data.value}); 
    
    switch(data.name) {
      case "id_acervo":
        agent.Coleccion.List().then( (response) => {const filterobj = response.filter( (obj) => {return obj.id_acervo == data.value}); setColecciones(filterobj);})
        break;
      case "id_coleccion":
        agent.Serie.List().then( (response) => {const filterobj = response.filter( (obj) => {return obj.id_coleccion == data.value}); setSerie(filterobj);})
        break;
      case "id_serie":
        agent.SubSerie.List().then( (response) => {const filterobj = response.filter( (obj) => {return obj.id_serie == data.value}); setSubserie(filterobj);})
        break;
      case "id_subserie":
        agent.Grupo.List().then( (response) => {const filterobj = response.filter( (obj) => {return obj.id_subserie == data.value}); setGrupo(filterobj);})
        break;
      case "id_grupo":
        agent.SubGrupo.List().then( (response) => {const filterobj = response.filter( (obj) => {return obj.id_grupo == data.value}); setSubGrupo(filterobj);})
        break;
      case "id_subgrupo":
        agent.Conjunto.List().then( (response) => {const filterobj = response.filter( (obj) => { return obj.id_subgrupo == data.value}); setConjunto(filterobj);})
        break;
      case "id_conjunto":
          agent.SubConjunto.List().then( (response) => {const filterobj = response.filter( (obj) => {return obj.id_conjunto == data.value}); setSubconjunto(filterobj);})
          break;
    }

    
    
  }

  const handleSubmit = () => {
    var idCategoria = 
        categoria.id_acervo + '-' +
        categoria.id_coleccion + '-' +
        (categoria.id_serie == null ? '' : categoria.id_serie + '-') +
        (categoria.id_subserie == null ? '' : categoria.id_subserie +  '-') +
        (categoria.id_grupo == null ? '' : categoria.id_grupo + '-' ) +
        (categoria.id_subgrupo == null ? '' : categoria.id_subgrupo +  '-' ) +
        (categoria.id_conjunto == null ? '' : categoria.id_conjunto + '-' ) +
        (categoria.id_subconjunto == null ? '' : categoria.id_subconjunto + '-' )
      
      
      /*
        Nota de utilidad: En Typescript esta función de slice funciona así
        console.log(idCategoria.slice(-1)) ** Me entrega el último caracter de la cadena
        console.log(idCategoria.slice(0, -1)) ** Me entrega la cadena sin el último caracter
      */

    var NewCategoria = {
      ...categoria,
      id: idCategoria.slice(-1) == '-' ? idCategoria.slice(0, -1) : idCategoria
    }
    createCategoria(NewCategoria);
    setCategoria(initialCategoria); //Reinicia cuando se vuelva a entrar
   
    ShowCreateCategoriaModal(false);
  }


  return (
    <Modal basic open={createCategoriaModal} onMount={OnOpenModal}>
          <Modal.Header>Agregar Categoría</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <Select placeholder='Acervo' name="id_acervo" onChange={handleSelectChange} options={acervos.map(ds => {return {key: ds.id,text: ds.nombre,value: ds.id}})}></Select>
              </Form.Field>
              
              <Form.Field>
                <Select placeholder='Colección' name="id_coleccion" onChange={handleSelectChange} options={colecciones.map(ds => {return {key: ds.id,text: ds.nombre,value: ds.id}})}></Select>  
              </Form.Field>

              <Form.Field>
                <Select placeholder='Serie' name="id_serie" onChange={handleSelectChange} options={series.map(ds => {return {key: ds.id,text: ds.nombre,value: ds.id}})}></Select>  
              </Form.Field>

              <Form.Field>
                <Select placeholder='SubSerie' name="id_subserie" onChange={handleSelectChange} options={subseries.map(ds => {return {key: ds.id,text: ds.nombre,value: ds.id}})}></Select>  
              </Form.Field>

              <Form.Field>
                <Select placeholder='Grupo' name="id_grupo" onChange={handleSelectChange} options={grupos.map(ds => {return {key: ds.id,text: ds.nombre,value: ds.id}})}></Select>  
              </Form.Field>

              <Form.Field>
                <Select placeholder='SubGrupo' name="id_subgrupo" onChange={handleSelectChange} options={subgrupos.map(ds => {return {key: ds.id,text: ds.nombre,value: ds.id}})}></Select>  
              </Form.Field>

              <Form.Field>
                <Select placeholder='Conjunto' name="g" onChange={handleSelectChange} options={conjuntos.map(ds => {return {key: ds.id,text: ds.nombre,value: ds.id}})}></Select>  
              </Form.Field>
              
              <Form.Field>
                <Select placeholder='SubConjunto' name="id_subconjunto" onChange={handleSelectChange} options={subconjuntos.map(ds => {return {key: ds.id,text: ds.nombre,value: ds.id}})}></Select>  
              </Form.Field>

            </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button basic color="green" onClick={handleSubmit} inverted>
                <Icon name="checkmark" /> Agregar
              </Button>
              <Button basic color="red" inverted onClick={() => ShowCreateCategoriaModal(false)}>
                <Icon name="remove" /> Cancel
              </Button>
            </Modal.Actions>
          
    </Modal>
  )
}

export default observer(CategoriaForm)