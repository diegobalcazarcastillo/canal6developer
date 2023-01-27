import React, {useContext, useState} from 'react'
import NuevaUnidadSimpleAreaDDefinicion from './NuevaUnidadSimpleAreaDDefinicion'
import {RootStoreContext} from '../../../stores/RootStore'
import { IUnidadSimple } from '../../../models/unidadsimple'
import { useNavigate } from 'react-router-dom'
import {observer} from 'mobx-react-lite'
import { toast } from 'react-toastify'
import NuevaUnidadSimpleAreaCaractFisica from './NuevaUnidadSimpleAreaCaractFisica'
import NuevaUnidadSimpleContenidoEstructuras from './NuevaUnidadSimpleContenidoEstructuras'
import NuevaUnidadSimpleCondiciones from './NuevaUnidadSimpleCondiciones'
import NuevaUnidadSimpleExLocCopias from './NuevaUnidadSimpleExLocCopias'
import { Segment } from 'semantic-ui-react'

const NuevaUnidadSimpleForm = () => {
  
  const rootStore = useContext(RootStoreContext)
  const navigate = useNavigate()
  const [waiting, setWaiting] = useState(false); 
  const {createUnidadSimple, 
        setUnidadSimple,
        setEdit, 
        updateUnidadSimple, 
        UnidadSimpleElecta, 
        isEdit} = rootStore.unidadSimpleStore

  const handleUnidadSimpleChange = (event: any) => {  
    setUnidadSimple({...UnidadSimpleElecta, 
    [event.target.name]: event.target.value});}

  const  handleCreateEditUnidadSimple = async () => {
    setWaiting(true)
    let mensaje = "Registro " + UnidadSimpleElecta.id_categoria + "-" + UnidadSimpleElecta.id 
    if(!isEdit)
    {
        let inserted = await createUnidadSimple(UnidadSimpleElecta)
        if(inserted != undefined)
          {
            toast.success(mensaje + " creado" )
            setEdit(true)
            navigate("/Main/Editar")
          }
    }
    else 
    {
      let updated = await updateUnidadSimple(UnidadSimpleElecta)
      if(updated != undefined) 
        toast.success(mensaje + " actualizado" )
    }
    setWaiting(false)
  }
    
  const ShowEditComponentes = (mostrar: boolean, ultimaUnidadSimple: IUnidadSimple) => 
  {
    if(mostrar) {
        return (
        <Segment>
        <NuevaUnidadSimpleAreaCaractFisica 
          unidadSimple={ultimaUnidadSimple} 
          handleUnidadSimpleChange={handleUnidadSimpleChange}
          handleCreateEditUnidadSimple={handleCreateEditUnidadSimple}
          isWaiting={waiting} />
        <NuevaUnidadSimpleContenidoEstructuras  
          unidadSimple={ultimaUnidadSimple} 
          handleUnidadSimpleChange={handleUnidadSimpleChange}
          handleCreateEditUnidadSimple={handleCreateEditUnidadSimple}
          isWaiting={waiting} />
        <NuevaUnidadSimpleCondiciones 
          unidadSimple={ultimaUnidadSimple} 
          handleUnidadSimpleChange={handleUnidadSimpleChange}
          handleCreateEditUnidadSimple={handleCreateEditUnidadSimple}
          isWaiting={waiting} />
        <NuevaUnidadSimpleExLocCopias 
          unidadSimple={ultimaUnidadSimple} 
          handleUnidadSimpleChange={handleUnidadSimpleChange}
          handleCreateEditUnidadSimple={handleCreateEditUnidadSimple}
          isWaiting={waiting} />
        </Segment>)        
    } 
  }
  
  return (
      <>
      <NuevaUnidadSimpleAreaDDefinicion 
        unidadaSimple={UnidadSimpleElecta}
        isEdit={isEdit}
        isWaiting={waiting}
        handleUnidadSimpleChange={handleUnidadSimpleChange} 
        handleCreateEditUnidadSimple={handleCreateEditUnidadSimple} />
        {ShowEditComponentes(isEdit, UnidadSimpleElecta)}
      </>
  )
}

export default observer(NuevaUnidadSimpleForm)
