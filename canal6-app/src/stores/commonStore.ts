import { action, observable, makeObservable} from "mobx"
import { RootStore } from "./RootStore"

export default class CommonStore {
    rootStore: RootStore
    @observable token: string | null = null
    /**
     *
     */
    constructor(rootStore: RootStore) {
        makeObservable(this)
        this.rootStore = rootStore;
    }

    @action setToken = (token: string | null) => {
        window.localStorage.setItem('jwt', token!)
        this.token = token
    }
}