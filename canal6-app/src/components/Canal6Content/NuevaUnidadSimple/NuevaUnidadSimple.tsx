import React from 'react'
import { Segment, Comment } from 'semantic-ui-react'
import NuevaUnidadSimpleForm from './NuevaUnidadSimpleForm'
import NuevaUnidadSimpleHeader from './NuevaUnidadSimpleHeader'
import {observer} from 'mobx-react-lite'

const NuevaUnidadSimple = () => {
  return (
    <React.Fragment>
        <NuevaUnidadSimpleHeader></NuevaUnidadSimpleHeader>
        <NuevaUnidadSimpleForm></NuevaUnidadSimpleForm>
    </React.Fragment>
  )
}

export default NuevaUnidadSimple
