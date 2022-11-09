import React , {useState, useEffect, SyntheticEvent }from 'react'
import axios from 'axios'
import { Button, DropdownProps, Form, Icon, Input, Modal, Select } from 'semantic-ui-react'
import { IAcervo, IColeccion, IConjunto, IGrupo, ISerie, ISubconjunto, ISubGrupo, ISubSerie } from '../../models/InfoCategorias'
import agent from '../../api/agent'
import { ICategoria } from '../../models/categoria'

interface IProps{
    selectedModal: boolean,
    closeModal: () => void,
    createCategoria: (categoria: ICategoria) => void
}

const CategoriaForm: React.FC<IProps> = ({ selectedModal, closeModal, createCategoria }) => {

  const initialCategoria = {
    id: '',
    id_acervo: '',
    id_coleccion: 0,
    id_serie: 0,
    id_subserie: 0,
    id_grupo: 0,
    id_subgrupo: 0,
    id_conjunto: 0,
    id_subconjunto: 0
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

  
  
  const handleSelectChange = (event: SyntheticEvent, data: any) => { 
    
    setCategoria({...categoria, [data.name]: data.value});
  }

  const handleSubmit = () => {
    let NewCategoria = {
      ...categoria,
      id: 
      categoria.id_acervo + '-' +
      categoria.id_coleccion + '-' +
      categoria.id_serie + '-' +
      categoria.id_subserie + '-' +
      categoria.id_grupo + '-' +
      categoria.id_subgrupo + '-' +
      categoria.id_conjunto + '-' +
      categoria.id_subconjunto 
    }

   createCategoria(NewCategoria);
   setCategoria(initialCategoria); //Reinicia cuando se vuelva a entrar
   closeModal();
  }


  return (
    
    <Modal basic open={selectedModal}>
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
              <Button basic color="red" inverted onClick={closeModal}>
                <Icon name="remove" /> Cancel
              </Button>
            </Modal.Actions>
          
        </Modal>
  )
}

export default CategoriaForm
