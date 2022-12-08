import { observable, action, makeObservable} from "mobx";
import { createContext } from "react";
import { ICategoria } from "../models/categoria";
import agent from '../api/agent'
import { IUnidadSimple } from "../models/unidadsimple";
import { IAcervo, IInfoCategoria } from "../models/InfoCategorias";
class CategoriaStore
{
    constructor()  {
        makeObservable(this);
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

export default createContext(new CategoriaStore)