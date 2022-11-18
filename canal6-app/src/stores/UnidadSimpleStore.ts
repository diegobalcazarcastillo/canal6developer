import { observable, action, makeObservable} from "mobx";
import { createContext } from "react";
import { ICategoria } from "../models/categoria";
import agent from '../api/agent'
import { IUnidadSimple } from "../models/unidadsimple";
class UnidadSimpleStore
{
    constructor()  {
        makeObservable(this);
    }
    @observable ultimaUnidadSimple: IUnidadSimple = {
        id: -1,
        numero_topografico: '',
        id_categoria: '',
        NT_numerocasetes: -1,
        NT_numerocinta: -1,
        duracion: ''
    }
    
    
    

    @action createUnidadSimple = async (unidadSimple: IUnidadSimple) => {
        try {
        await agent.UnidadSimple.create(unidadSimple);
        console.log('CREADO');
        } catch(err) {console.log(err);}
    }

    

   /* @action setUltimaUnidadSimple = async () =>
    {
        try
        {
            var response = await agent.UnidadSimple.ultimo(this.categoriaElecta.id);
            this.ultimaUnidadSimple = response;
        }
        catch(err) {console.log(err)} 
    }*/
}

export default createContext(new UnidadSimpleStore)