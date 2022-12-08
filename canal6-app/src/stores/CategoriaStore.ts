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
    
    @observable informacionCategoria: IInfoCategoria = {
    
        nombre_acervo : '', 
        nombre_coleccion : '',
        nombre_serie : '',
        nombre_subserie : '',
        nombre_grupo : '',
        nombre_subgrupo : '',
        nombre_conjunto : '',
        nombre_subconjunto : ''
    }

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

    @action setCategoria = async (categoria: ICategoria) => {
        this.categoriaElecta = categoria;
    }

    @action setInfoCategoria = async () => 
    {
        var nombre_acervo = await agent.Acervo.single(this.categoriaElecta.id_acervo);
        var nombre_coleccion = await agent.Coleccion.single(this.categoriaElecta.id_coleccion.toString())
        var nombre_serie = await agent.Serie.single(this.categoriaElecta.id_serie.toString());
        var nombre_subserie = await agent.SubSerie.single(this.categoriaElecta.id_subserie.toString());
        var nombre_grupo = await agent.Grupo.single(this.categoriaElecta.id_grupo.toString());
        var nombre_subgrupo =  await agent.SubGrupo.single(this.categoriaElecta.id_subgrupo.toString());
        var nombre_conjunto = 
            this.categoriaElecta.id_conjunto == null ? '' : 
            await agent.Conjunto.single(this.categoriaElecta.id_conjunto.toString());
       var nombre_subconjunto = 
            this.categoriaElecta.id_subconjunto == null ? '' :
            await agent.SubConjunto.single(this.categoriaElecta.id_subconjunto.toString());
       var NewInfoCategoria: IInfoCategoria = {
            nombre_acervo: nombre_acervo[0].nombre,
            nombre_coleccion: nombre_coleccion[0].nombre,
            nombre_serie : nombre_serie[0].nombre,
            nombre_subserie : nombre_subserie[0].nombre,
            nombre_grupo : nombre_grupo[0].nombre,
            nombre_subgrupo : nombre_subgrupo[0].nombre,
            nombre_conjunto : this.categoriaElecta.id_conjunto == null ? 'N/A' : nombre_conjunto[0].nombre, //nombre_conjunto[0].nombre,
            nombre_subconjunto : this.categoriaElecta.id_subconjunto == null ? 'N/A' : nombre_subconjunto[0].nombre
        }
        this.informacionCategoria = NewInfoCategoria
    }

}

export default createContext(new CategoriaStore)