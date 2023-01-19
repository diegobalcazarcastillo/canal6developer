import { createContext } from 'react'
import CategoriaStore from './CategoriaStore'
import CommonStore from './commonStore'
import UnidadSimpleStore from './UnidadSimpleStore'
import UserStore from './UserStore'
export class RootStore {
    categoriaStore: CategoriaStore
    userStore: UserStore
    unidadSimpleStore: UnidadSimpleStore
    commonStore: CommonStore
    
    constructor()
    {
        this.categoriaStore = new CategoriaStore(this)
        this.userStore = new UserStore(this)
        this.unidadSimpleStore = new UnidadSimpleStore(this)
        this.commonStore = new CommonStore(this)
    }
}

export const RootStoreContext = createContext(new RootStore)