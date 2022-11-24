import { observable, action, makeObservable} from "mobx";
import { createContext } from "react";
import agent from '../api/agent'
import { IUnidadSimple } from "../models/unidadsimple";
class UnidadSimpleStore
{
    constructor()  {
        makeObservable(this);
    }
    @observable isEdit: boolean = false;
    @observable UnidadesSimplesElectas: IUnidadSimple[] = [];
    @observable ultimaUnidadSimple: IUnidadSimple = {
        id: -1,
        numero_topografico: '',
        id_categoria: '',
        nT_numerocasetes: -1,
        nT_numerocinta: -1,
        duracion: ''
    }

    @action showEdit = (edit: boolean) => { 
        this.isEdit = edit } // Esta variable lo voy a usar la parte de NuevaUnidadSimple

    @action createUnidadSimple = async (unidadSimple: IUnidadSimple) => {
        try {
        await agent.UnidadSimple.create(unidadSimple);
        console.log('CREADO');
        } catch(err) {console.log(err);}
    }
    @action listUnidadSimple = async (id_categoria: string) => 
    {
        try {
            var unidadSimpleElecta = await agent.UnidadSimple.List(id_categoria);
            this.UnidadesSimplesElectas = unidadSimpleElecta 
            } catch(err) {console.log(err);}
    }
}

export default createContext(new UnidadSimpleStore)