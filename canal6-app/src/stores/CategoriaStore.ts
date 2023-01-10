import { observable, action, makeObservable, toJS} from "mobx";
import { createContext } from "react";
import { ICategoria } from "../models/categoria";
import agent from '../api/agent'
import { IUnidadSimple } from "../models/unidadsimple";
import { IAcervo, IInfoCategoria } from "../models/InfoCategorias";
import { RootStore } from "./RootStore";
export default class CategoriaStore
{

    rootStore: RootStore; //Inyectando la dependencia de rootStore, permite acceder a todos los store de todos los lados
    constructor(rootStore: RootStore)  {
        makeObservable(this);
        this.rootStore = rootStore
    }

    @observable categorias: ICategoria[] = []
    
    @action loadCategoria = async ()  => {
        try{
            var response = await agent.Categorias.List();
            response.forEach(categoria => this.categorias.push(categoria));
        }catch(err){console.log(err);}
    }
    
    @action createCategoria = async (categoria: ICategoria) => {
        try {
        await agent.Categorias.create(categoria);
        this.categorias.push(categoria);
        } catch(err) {console.log(err);}
    }

   
}

// export default createContext(new CategoriaStore)