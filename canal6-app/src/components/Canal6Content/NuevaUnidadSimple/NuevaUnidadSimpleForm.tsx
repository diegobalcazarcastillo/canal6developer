import React, {useContext} from 'react'
import NuevaUnidadSimpleAreaDDefinicion from './NuevaUnidadSimpleAreaDDefinicion'
import UnidadSimpleStore from '../../../stores/UnidadSimpleStore'
import { IUnidadSimple } from '../../../models/unidadsimple'
import { useNavigate } from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import NuevaUnidadSimpleAreaCaractFisica from './NuevaUnidadSimpleAreaCaractFisica'
import NuevaUnidadSimpleContenidoEstructuras from './NuevaUnidadSimpleContenidoEstructuras'
import NuevaUnidadSimpleCondiciones from './NuevaUnidadSimpleCondiciones'
import NuevaUnidadSimpleExLocCopias from './NuevaUnidadSimpleExLocCopias'

const NuevaUnidadSimpleForm = () => {
  
  const navigate = useNavigate()
  const {createUnidadSimple, setUnidadSimple, UnidadSimpleElecta, isEdit, setEdit} = useContext(UnidadSimpleStore)

  const handleUnidadSimpleChange = (event: any) => {
      setUnidadSimple({...UnidadSimpleElecta, 
      [event.target.name]: event.target.value});
  }

  const handleCreateEditUnidadSimple = () => {
    if(!isEdit)
    {
      createUnidadSimple(UnidadSimpleElecta)
      setEdit(true)
      navigate("/Main/Editar");
    }
    else 
    {
      console.log(UnidadSimpleElecta.id);
    }
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
      <NuevaUnidadSimpleAreaDDefinicion 
        unidadaSimple={UnidadSimpleElecta}
        isEdit={isEdit}
        handleUnidadSimpleChange={handleUnidadSimpleChange} 
        handleCreateEditUnidadSimple={handleCreateEditUnidadSimple} />
        {ShowEditComponentes(isEdit, UnidadSimpleElecta)}
      </>
  )
}

export default observer(NuevaUnidadSimpleForm)
