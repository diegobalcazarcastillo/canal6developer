import React, { useContext } from 'react'
import {Dropdown, Grid, Header, Icon} from 'semantic-ui-react'
import { RootStoreContext } from '../../stores/RootStore'

const UserPanel = () => {
 
    const rootStore = useContext(RootStoreContext)
    const { user, logout } = rootStore.userStore
  const dropdwonOptions = () => [
     {
        key: 'user',
        text: (
            <span>
                Mail <strong> {user == null ? "" : user.email} </strong>
            </span>
        ),
        disabled: true
     },
     {
        key: 'signout',
        text: (<span onClick={logout}>Salir</span>),
        disabled: false
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
                 trigger={<span>{user == null ? "" : user.userName}</span>}
                 options={dropdwonOptions()}
                >
                    
                </Dropdown>
            </Header>
        </Grid.Column>
    </Grid>
    
  )
}

export default UserPanel
