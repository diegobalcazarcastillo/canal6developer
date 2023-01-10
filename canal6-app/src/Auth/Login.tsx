import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'

import {Form as FinalForm, Field} from 'react-final-form'

const Login = () => {

  const showResult = async (values: any) => {
    console.log(values)
  }


  return (
    <Grid textAlign='center' verticalAlign='middle' className='app'>
      <Grid.Column style={{ maxWidth: 450}}>
        <Header as="h1" icon color="violet" textAlign='center'>
          <Icon name="code branch" color="violet" />
          Registro de Canal 6
        </Header>
        <FinalForm
        onSubmit={showResult}
        render={ ({handleSubmit}) => (
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
            fluid
            name="email"
            icon="mail"
            iconPosition="left"
            placeholder="Email"
            type="email"
            />

            <Form.Input
            fluid
            name="password"
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
            />
          
            <Button color="violet" fluid size="large">
              Agregar usuario
            </Button>
          </Segment>
        </Form>
        )} />


        <Message>
            Regístrate <Link to="/Register">aquí</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default Login
