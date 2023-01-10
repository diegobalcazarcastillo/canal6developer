import { action, computed, makeObservable, observable } from "mobx";
import agent from "../api/agent";
import { IUser, IUserFormValues } from "../models/users";
import { RootStore } from "./RootStore";

export default class UserStore 
{
    @observable user: IUser | null = null
    rootStore: RootStore;
    constructor(rootStore: RootStore)  {
        makeObservable(this);
        this.rootStore = rootStore
    }


    @computed get IsLoggedIn() {
        return !!this.user
    } 

    @action login = async (values: IUserFormValues) =>
    {
        try
        {
            var user = await agent.user.login(values)
            this.user = user
        }
        catch(error) {console.log(error)}
        

    }


}