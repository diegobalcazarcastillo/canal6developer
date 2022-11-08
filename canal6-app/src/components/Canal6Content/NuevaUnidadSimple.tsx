import React from 'react'
import { Segment, Comment } from 'semantic-ui-react'
import NuevaUnidadSimpleForm from './NuevaUnidadSimpleForm'
import NuevaUnidadSimpleHeader from './NuevaUnidadSimpleHeader'

const NuevaUnidadSimple = () => {
  return (
    <React.Fragment>
        <NuevaUnidadSimpleHeader></NuevaUnidadSimpleHeader>
        <Segment>
            {/*Cosas a agregar aquí*/}
            <Comment.Group></Comment.Group>
        </Segment>
        <NuevaUnidadSimpleForm></NuevaUnidadSimpleForm>
    </React.Fragment>
  )
}

export default NuevaUnidadSimple
