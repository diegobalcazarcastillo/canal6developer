import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Icon, Label, Message, Segment } from 'semantic-ui-react'
import TextInput from '../components/Common/Form/TextInput'
import {Form as FinalForm, Field} from 'react-final-form'
import { RootStoreContext } from '../stores/RootStore'
import { IUserFormValues } from '../models/users'
import { FORM_ERROR } from 'final-form'
import { combineValidators, isRequired } from 'revalidate'
const Login = () => {

    const validate = combineValidators({
      email : isRequired('Email'),
      password : isRequired('Password')

    })
    const rootStore = useContext(RootStoreContext)
    const {login} = rootStore.userStore
  //función de prueba sleep, solo hace que se espere un momento
  const sleep = (ms: any) => new Promise ((resolve) => setTimeout(resolve, ms));

  const handleSubmitForm = async (values: IUserFormValues) => {
    

    
    //await sleep(800);
    return login(values).catch( (error) => ({[FORM_ERROR]: error}));
  
  }


  return (
    <Grid textAlign='center' verticalAlign='middle' className='app'>
      <Grid.Column style={{ maxWidth: 450}}>
        <Header as="h1" icon color="violet" textAlign='center'>
          <Icon name="code branch" color="violet" />
          Registro de Canal 6
        </Header>
        <FinalForm
        onSubmit={handleSubmitForm}
        validate={validate}
        render={ ({handleSubmit, submitting, values, form, submitError}) => (
        <Form size="large" onSubmit={handleSubmit}>
          <Segment stacked>

          <Field
            name="email"
            placeholder="Correo electrónico"
            type="text"
            icon="mail icon"
            component={TextInput}
          />

            <Field
            name="password"
            placeholder="Contraseña"
            type="password"
            icon="lock icon"
            component={TextInput}
            />

            <Button color="violet" fluid size="large" disabled={submitting}>
              Agregar usuario
            </Button>
            {submitError && (<Label color="red" basic content={submitError.statusText}/>)}
            <pre>
               {JSON.stringify(form.getState(), undefined, 2)}
              </pre>
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
