import { observable, action, makeObservable} from "mobx";
import { createContext } from "react";
import { ICategoria } from "../models/categoria";
import agent from '../api/agent'
import { IUnidadSimple } from "../models/unidadsimple";
class CategoriaStore
{
    constructor()  {
        makeObservable(this);
    }

    @observable ultimaUnidadSimple: IUnidadSimple = {
        id: -1,
        numero_topografico: '',
        id_categoria: '',
        nT_numerocasetes: -1,
        nT_numerocinta: -1,
        duracion: ''
    }
    @observable categorias: ICategoria[] = []
    @observable isModalVisible: boolean = false
    @observable categoriaElecta: ICategoria = {
        id: '',
        id_acervo: '',
        id_coleccion: 0,
        id_serie: 0,
        id_subserie: 0,
        id_grupo: 0,
        id_subgrupo: 0,
        id_conjunto: 0,
        id_subconjunto: 0
    }
    @action loadCategoria = async ()  => {
        /**/
        try{
            var response = await agent.Categorias.List();
            response.forEach(categoria => this.categorias.push(categoria));
        }catch(err){console.log(err);}
    }
    @action ShowModal = (show: boolean) => {
        this.isModalVisible = show
    }

    @action createCategoria = async (categoria: ICategoria) => {
        try {
        await agent.Categorias.create(categoria);
        this.categorias.push(categoria);
        } catch(err) {console.log(err);}
    }

    @action setUltimaUnidadSimple = (unidadSimple: IUnidadSimple) => {
        this.ultimaUnidadSimple = unidadSimple
        console.log(this.ultimaUnidadSimple.id)
        console.log(this.ultimaUnidadSimple.id_categoria)
    }

    @action setCategoria = async (categoria: ICategoria) => {
        this.categoriaElecta = categoria;
        var response: IUnidadSimple = await agent.UnidadSimple.ultimo(this.categoriaElecta.id);
        this.ultimaUnidadSimple = response;
        console.log('Categoría elegida : ' + categoria.id);
        console.log('UltimoId : ' + this.ultimaUnidadSimple.id);
    }

}

export default createContext(new CategoriaStore)