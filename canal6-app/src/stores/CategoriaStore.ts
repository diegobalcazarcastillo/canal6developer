import { observable, action, makeObservable} from "mobx";
import { createContext } from "react";
import { ICategoria } from "../models/categoria";
import agent from '../api/agent'
class CategoriaStore
{
    constructor()  {
        makeObservable(this);
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

    @action setCategoria = (categoria: ICategoria) => {
        console.log('Loyo' + categoria.id);
        this.categoriaElecta = categoria
    }
}

export default createContext(new CategoriaStore)