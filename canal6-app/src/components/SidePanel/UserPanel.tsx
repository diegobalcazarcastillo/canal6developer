import React from 'react'
import {Dropdown, Grid, Header, Icon} from 'semantic-ui-react'

const UserPanel = () => {
 
  const dropdwonOptions = () => [
     {
        key: 'user',
        text: (
            <span>
                Soy el <strong>User</strong>
            </span>
        ),
        disabled: true
     },
     {
        key: 'avatar',
        text: (
            <span>
                Cambiar mi avatar (?)
            </span>
        ),
        disabled: true
     }

  ]

  return (
    <Grid style={{ background: '#4c3c4c', margin: 0}}>
        <Grid.Column>
            <Grid.Row>
                <Header inverted floated='left' as="h2">
                    <Icon name="code" />
                    <Header.Content>Canal 6</Header.Content>
                </Header>
            </Grid.Row>
            <Header style={{ padding: '0.25em'}} as="h4"  inverted>
                <Dropdown
                 trigger={<span>User</span>}
                 options={dropdwonOptions()}
                >
                    
                </Dropdown>
            </Header>
        </Grid.Column>
    </Grid>
    
  )
}

export default UserPanel
