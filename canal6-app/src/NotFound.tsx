import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, Header, Icon, Segment } from 'semantic-ui-react'

const NotFound = () => {
  return (
    <Grid textAlign='center' className='app' verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 800}}>
        <Segment >
            <Header>
                <Icon name="search"></Icon>
                404 - Page Not Found
            </Header>
            <Segment.Inline>
                <Button as={Link} to="/Login" primary>
                    Regresa a la página de inicio
                </Button>
            </Segment.Inline>
        </Segment>
        </Grid.Column>
    </Grid>
  )
}

export default NotFound
