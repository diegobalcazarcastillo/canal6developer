import React , {useState, useEffect, SyntheticEvent, useContext }from 'react'
import { Button, Form, Icon, Modal, Placeholder, Select } from 'semantic-ui-react'
import { IAcervo, IColeccion, IConjunto, IGrupo, ISerie, ISubconjunto, ISubGrupo, ISubSerie } from '../../models/InfoCategorias'
import agent from '../../api/agent'
import { ICategoria } from '../../models/categoria'
import {RootStoreContext} from '../../stores/RootStore'
import {observer} from 'mobx-react-lite'
import { toast } from 'react-toastify'

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
  //States to Insert Acervo, Coleccion, ... (etc)
  const [toogleAcervo, setToogleAcervo] = useState(false)
  const [toogleColeccion, setToogleColeccion] = useState(false)
  const [toogleSerie, setToogleSerie] = useState(false)
  const [toogleSubSerie, setToogleSubSerie] = useState(false)
  const [toogleGrupo, setToogleGrupo] = useState(false)
  const [toogleSubGrupo, setToogleSubGrupo] = useState(false)
  const [toogleConjunto, setToogleConjunto] = useState(false)
  const [toogleSubConjunto, setToogleSubConjunto] = useState(false)
  const [insertValue, setInsertValue] = useState("")

  //State para las series
  const [categoria, setCategoria] = useState<ICategoria>(initialCategoria)
  const [acervos, setAcervos] = useState<IAcervo[]>([]);
  const [colecciones, setColecciones] = useState<IColeccion[]>([]);
  const [series, setSerie] = useState<ISerie[]>([]);
  const [subseries, setSubserie] = useState<ISubSerie[]>([]);
  const [grupos, setGrupo] = useState<IGrupo[]>([]);
  const [subgrupos, setSubGrupo] = useState<ISubGrupo[]>([]);
  const [conjuntos, setConjunto] = useState<IConjunto[]>([]);
  const [subconjuntos, setSubconjunto] = useState<ISubconjunto[]>([]);
  //Root para stores
  const RootStore = useContext(RootStoreContext)
  const {createCategoria} = RootStore.categoriaStore
  const handleTextChange = (event: SyntheticEvent, data: any) => setInsertValue(data.value) 


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

  const addElementTo = async (nameid: string, setToogle: React.Dispatch<React.SetStateAction<boolean>>) => {
      if(insertValue == '') 
      {
        toast.error("Necesitas agregar un texto")
        return
      }
      debugger
      switch(nameid)
      {
        case "id_acervo":
          let iacervo: IAcervo = { id: insertValue, nombre: insertValue};
          await agent.Acervo.create(iacervo);
          agent.Acervo.List().then( (response) => {setAcervos(response);})
          break;

        case "id_coleccion":
          let icoleecion: IColeccion = {id: 0, id_acervo: categoria.id_acervo, nombre: insertValue }
          await agent.Coleccion.create(icoleecion)
          agent.Coleccion.List().then( (response) => {const filterobj = response.filter( (obj) => {return obj.id_acervo == categoria.id_acervo}); setColecciones(filterobj);})
          break;

        case "id_serie":
          let iserie: ISerie = {id: 0, id_coleccion: categoria.id_coleccion, nombre: insertValue}
          await agent.Serie.create(iserie)
          agent.Serie.List().then( (response) => {const filterobj = response.filter( (obj) => {return obj.id_coleccion == categoria.id_coleccion}); setSerie(filterobj);})
          break;

        case "id_subserie":
          var isubserie: ISubSerie = {id: 0, id_serie: categoria.id_serie, nombre: insertValue}
          await agent.SubSerie.create(isubserie)
          agent.SubSerie.List().then( (response) => {const filterobj = response.filter( (obj) => {return obj.id_serie == categoria.id_serie}); setSubserie(filterobj);})
          break;

        case "id_grupo":
          let igrupo: IGrupo = {id: 0, id_subserie: categoria.id_subserie, nombre: insertValue}
          await agent.Grupo.create(igrupo)
          agent.Grupo.List().then( (response) => {const filterobj = response.filter( (obj) => {return obj.id_subserie == categoria.id_subserie}); setGrupo(filterobj);})
          break;

        case "id_subgrupo":
          let isubgrupo: ISubGrupo  = {id: 0, id_grupo: categoria.id_grupo, nombre: insertValue}
          await agent.SubGrupo.create(isubgrupo)
          agent.SubGrupo.List().then( (response) => {const filterobj = response.filter( (obj) => {return obj.id_grupo == categoria.id_grupo}); setSubGrupo(filterobj);})
          break;

        case "id_conjunto":
          let iconjunto: IConjunto  = {id: 0, id_subgrupo: categoria.id_subgrupo, nombre: insertValue}
          await agent.Conjunto.create(iconjunto)
          agent.Conjunto.List().then( (response) => {const filterobj = response.filter( (obj) => { return obj.id_subgrupo == categoria.id_subgrupo}); setConjunto(filterobj);})
          break;

        case "id_subconjunto":
          let isubconjunto: ISubconjunto  = {id: 0, id_conjunto: categoria.id_conjunto, nombre: insertValue}
          await agent.SubConjunto.create(isubconjunto)
          agent.SubConjunto.List().then( (response) => {const filterobj = response.filter( (obj) => {return obj.id_conjunto == categoria.id_conjunto}); setSubconjunto(filterobj);})
          break;
      }
    setToogle(false)
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

  const showSelectOrAdd = (toogle: boolean, placeholder: string , name: string, mapa: any, setToogle: React.Dispatch<React.SetStateAction<boolean>>) => 
  {
      var SelectOrAddControl;
      if(!toogle){
        SelectOrAddControl = 
          <React.Fragment>
          <Form.Select 
            width={12} 
            placeholder={placeholder} 
            name={name} 
            onChange={handleSelectChange} 
            options={mapa.map(ds => {return {key: ds.id,text: ds.nombre,value: ds.id}})} >
            </Form.Select>
            <Form.Button width={2} color='blue' onClick={() => setToogle(!toogle)}>+</Form.Button>
          </React.Fragment>
      }
      else {
        SelectOrAddControl = 
        <React.Fragment>
        <Form.Input width={12} onChange={handleTextChange}></Form.Input>
        <Form.Button width={2} color='green' onClick={() => addElementTo(name, setToogle)}>Agregar</Form.Button>
        <Form.Button width={2} color='red' onClick={() => setToogle(!toogle)}>Cancelar</Form.Button>
        </React.Fragment>
      }
      return SelectOrAddControl
  }

  return (
    <Modal basic open={createCategoriaModal} onMount={OnOpenModal}>
          <Modal.Header>Agregar Categoría</Modal.Header>
          <Modal.Content>
            <Form>

              <Form.Group >
                {showSelectOrAdd(toogleAcervo, 'Acervo', 'id_acervo', acervos, setToogleAcervo)}
              </Form.Group>

              <Form.Group>
                {showSelectOrAdd(toogleColeccion, 'Colección', 'id_coleccion', colecciones, setToogleColeccion)}
              </Form.Group>

              <Form.Group>
                {showSelectOrAdd(toogleSerie, 'Serie', 'id_serie', series, setToogleSerie)}
              </Form.Group>

              <Form.Group>
                {showSelectOrAdd(toogleSubSerie, 'SubSerie', 'id_subserie', subseries, setToogleSubSerie)}
              </Form.Group>

              <Form.Group>
                {showSelectOrAdd(toogleGrupo, 'Grupo', 'id_grupo', grupos , setToogleGrupo)}
              </Form.Group>

              <Form.Group>
                {showSelectOrAdd(toogleSubGrupo, 'SubGrupo', 'id_subgrupo', subgrupos , setToogleSubGrupo)}
              </Form.Group>

              <Form.Group>
                {showSelectOrAdd(toogleConjunto, 'Conjunto', 'id_conjunto', conjuntos , setToogleConjunto  )}
              </Form.Group>

              <Form.Group>
                {showSelectOrAdd(toogleSubConjunto, 'SubConjunto', 'id_subconjunto', subconjuntos, setToogleSubConjunto )}
              </Form.Group>

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