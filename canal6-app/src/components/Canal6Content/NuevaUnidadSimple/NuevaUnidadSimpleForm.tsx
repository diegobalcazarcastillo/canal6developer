import React, {useContext, useState, useEffect, Component} from 'react'
import NuevaUnidadSimpleAreaDDefinicion from './NuevaUnidadSimpleAreaDDefinicion'
import CategoriaStore from '../../../stores/CategoriaStore'
import UnidadSimpleStore from '../../../stores/UnidadSimpleStore'
import { IUnidadSimple } from '../../../models/unidadsimple'
import { useNavigate } from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import NuevaUnidadSimpleAreaCaractFisica from './NuevaUnidadSimpleAreaCaractFisica'
import { Label, Segment } from 'semantic-ui-react'
import NuevaUnidadSimpleContenidoEstructuras from './NuevaUnidadSimpleContenidoEstructuras'
import NuevaUnidadSimpleCondiciones from './NuevaUnidadSimpleCondiciones'
import NuevaUnidadSimpleExLocCopias from './NuevaUnidadSimpleExLocCopias'

const NuevaUnidadSimpleForm = () => {
  
  const initialUnidadSimple = {
    id : -1,
    id_categoria: '',
    numero_topografico: '',
    nT_numerocasetes: -1,
    nT_numerocinta: -1,
    duracion: '',
    soporte: '',
    ie_casete: '',
    ie_cajaprotectora: '',
    alcance_contenido: '',
    dept_toponimicos: '',
    dept_onomasticos: '',
    dept_cronologicos: '',
    dept_otros: '',
    dept_tipoDRegistro: '',
    lengua: '',
    condiciones_acceso: '',
    existencia_localizacion_copias: '',
    unidades_descripcion_asociada: '',
    documentos_asociados: '',
    notas: '',
    notas_control_interno: '',
    fechaDRegistro: '',
    fechaDUltimaAct: '',
    Descriptores: ''
}

    const navigate = useNavigate()
    const {categoriaElecta, ultimaUnidadSimple} = useContext(CategoriaStore)
    const {createUnidadSimple, isEdit} = useContext(UnidadSimpleStore)

    //Estado de nueva variable
    const [unidadsimple, setUnidadSimple] = useState<IUnidadSimple>(initialUnidadSimple)
    //Tomar la edición de las variables
    const handleUnidadSimpleChange = (event: any) => {
        setUnidadSimple({...unidadsimple, 
        [event.target.name]: event.target.value, 
        id: isNaN(ultimaUnidadSimple.id) ? 1 : (ultimaUnidadSimple.id + 1),
        id_categoria: categoriaElecta.id});
    }
    //Aquí va a agregarse la categoría
    const handleCreateEditUnidadSimple = ()=> {
      if(!isEdit)
      {
      createUnidadSimple(unidadsimple)
      navigate("/Main");
      }
      else {console.log('Aquí vamos a editar, aún no implementado');}
    }
    
    const ShowEditComponentes = (mostrar: boolean, ultimaUnidadSimple: IUnidadSimple) => 
    {
      if(mostrar) {
          return (
            <>
          <NuevaUnidadSimpleAreaCaractFisica unidadSimple={ultimaUnidadSimple} />
          <NuevaUnidadSimpleContenidoEstructuras unidadSimple={ultimaUnidadSimple} />
          <NuevaUnidadSimpleCondiciones unidadSimple={ultimaUnidadSimple} />
          <NuevaUnidadSimpleExLocCopias unidadSimple={ultimaUnidadSimple} />
          </>)        
      } 
    }
  
  return (
    
    <>
      
      <NuevaUnidadSimpleAreaDDefinicion unidadaSimple={ultimaUnidadSimple} categoriaElecta={categoriaElecta} isEdit={isEdit} handleUnidadSimpleChange={handleUnidadSimpleChange} handleCreateEditUnidadSimple={handleCreateEditUnidadSimple}></NuevaUnidadSimpleAreaDDefinicion>
      {ShowEditComponentes(isEdit, ultimaUnidadSimple)}
      
      </>
    
  )
}

export default observer(NuevaUnidadSimpleForm)
