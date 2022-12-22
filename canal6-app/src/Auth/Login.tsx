import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'

const Login = () => {
  return (
    <Grid textAlign='center' verticalAlign='middle' className='app'>
      <Grid.Column style={{ maxWidth: 450}}>
        <Header as="h1" icon color="violet" textAlign='center'>
          <Icon name="code branch" color="violet" />
          Registro de Canal 6
        </Header>
        <Form size="large">
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
        <Message>
            Regístrate <Link to="/Register">aquí</Link>
        </Message>
      </Grid.Column>
    </Grid>
  )
}

export default Login
