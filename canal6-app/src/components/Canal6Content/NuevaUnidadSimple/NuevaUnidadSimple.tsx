import React from 'react'
import { Segment, Comment } from 'semantic-ui-react'
import NuevaUnidadSimpleForm from './NuevaUnidadSimpleForm'
import NuevaUnidadSimpleHeader from './NuevaUnidadSimpleHeader'

const NuevaUnidadSimple = () => {
  return (
    <React.Fragment>
        <NuevaUnidadSimpleHeader></NuevaUnidadSimpleHeader>
        <NuevaUnidadSimpleForm></NuevaUnidadSimpleForm>
    </React.Fragment>
  )
}

export default NuevaUnidadSimple
