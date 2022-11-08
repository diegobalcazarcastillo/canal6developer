import React from 'react'
import { Segment, Input, Button } from 'semantic-ui-react'

const NuevaUnidadSimpleForm = () => {
  return (
    <Segment >
        <Input fluid
        name="message"
        style={{ marginBottom: '0.7em' }}
        label={<Button icon={'add'}></Button>}
        labelPosition="left"
        placeholder="Contenido inicial <aquí va los componentes nuevos que se agregarán"
        ></Input>
        <Button.Group icon widths="2">
            <Button
                color="orange"
                content="Agregar"
                labelPosition="left"
                icon="edit"
            >
               

            </Button>
            <Button
                color="teal"
                content="Agregar"
                labelPosition="right"
                icon="cloud upload"
            ></Button>
        </Button.Group>
    </Segment>
  )
}

export default NuevaUnidadSimpleForm
