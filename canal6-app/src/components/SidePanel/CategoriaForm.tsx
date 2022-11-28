import React , {useState, useEffect, SyntheticEvent, useContext }from 'react'
import { Button, Form, Icon, Modal, Placeholder, Select } from 'semantic-ui-react'
import { IAcervo, IColeccion, IConjunto, IGrupo, ISerie, ISubconjunto, ISubGrupo, ISubSerie } from '../../models/InfoCategorias'
import agent from '../../api/agent'
import { ICategoria } from '../../models/categoria'
import CategoriaStore from '../../stores/CategoriaStore'
import {observer} from 'mobx-react-lite'
import CategoriaFormItem from './CategoriaFormItem'



const CategoriaForm: React.FC = () => {

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
  
  const {isModalVisible, ShowModal, createCategoria} = useContext(CategoriaStore);
  const [categoria, setCategoria] = useState<ICategoria>(initialCategoria)
  const [acervos, setAcervos] = useState<IAcervo[]>([]);
  const [colecciones, setColecciones] = useState<IColeccion[]>([]);
  const [series, setSerie] = useState<ISerie[]>([]);
  const [subseries, setSubserie] = useState<ISubSerie[]>([]);
  const [grupos, setGrupo] = useState<IGrupo[]>([]);
  const [subgrupos, setSubGrupo] = useState<ISubGrupo[]>([]);
  const [conjuntos, setConjunto] = useState<IConjunto[]>([]);
  const [subconjuntos, setSubconjunto] = useState<ISubconjunto[]>([]);

  useEffect(() => {
    agent.Acervo.List().then( (response) => {setAcervos(response);})
    agent.Coleccion.List().then( (response) => {setColecciones(response);})
    agent.Serie.List().then( (response) => {setSerie(response);})
    agent.SubSerie.List().then( (response) => {setSubserie(response);})
    agent.Grupo.List().then( (response) => {setGrupo(response);})
    agent.SubGrupo.List().then( (response) => {setSubGrupo(response);})
    agent.Conjunto.List().then( (response) => {setConjunto(response);})
    agent.SubConjunto.List().then( (response) => {setSubconjunto(response);})
  }
  , []);

  
  const handleSelectChange = (event: SyntheticEvent, data: any) => { setCategoria({...categoria, [data.name]: data.value});}

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
    ShowModal(false);
  }


  return (
    
    <Modal basic open={isModalVisible}>
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
                <Select placeholder='Conjunto' name="id_conjunto" onChange={handleSelectChange} options={conjuntos.map(ds => {return {key: ds.id,text: ds.nombre,value: ds.id}})}></Select>  
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
              <Button basic color="red" inverted onClick={() => ShowModal(false)}>
                <Icon name="remove" /> Cancel
              </Button>
            </Modal.Actions>
          
        </Modal>
  )
}

export default observer(CategoriaForm)



/* <CategoriaFormItem handleSelectChange={handleSelectChange} colecciones={acervos} placeholder='Acervo' name='id_acervo' loadCatalogos={loadCatalogos} />
const loadCatalogos = (acervoNueva: IAcervo) => {

  /**Estamos experimentando con esta parte acervoNueva: IAcervo
    setAcervos([
      ...acervos,
      acervoNueva
    ]);


    setAcervos([
      ...acervos,
      acervoNueva
    ]);





    console.log('Carga de catálogos');
    
  }

*/ 