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

    @observable UnidadesSimplesElectas: IUnidadSimple[] = [];

    @action createUnidadSimple = async (unidadSimple: IUnidadSimple) => {
        try {
        await agent.UnidadSimple.create(unidadSimple);
        console.log('CREADO');
        } catch(err) {console.log(err);}
    }
    @action listUnidadSimple = async () => 
    {
        try {
            var unidadSimpleElecta = await agent.UnidadSimple.List();
            this.UnidadesSimplesElectas = unidadSimpleElecta 
            console.log(this.UnidadesSimplesElectas[0].numero_topografico);
            } catch(err) {console.log(err);}
    }


    

   
}

export default createContext(new UnidadSimpleStore)