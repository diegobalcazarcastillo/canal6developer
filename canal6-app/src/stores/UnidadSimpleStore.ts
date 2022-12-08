import { observable, action, makeObservable} from "mobx";
import { createContext } from "react";
import agent from '../api/agent'
import { IUnidadSimple } from "../models/unidadsimple";
class UnidadSimpleStore
{
    constructor()  {
        makeObservable(this);
    }
    @observable isEdit: boolean = false; //Esta bandera es para el componente de Nueva/Editar, le indica su comportamiento
    @observable UnidadesSimplesElectas: IUnidadSimple[] = []; //Determina las unidades electas para mostrar en el componente de consulta
    @observable UnidadSimpleElecta: IUnidadSimple = { // Determina la UnidadSimple a Editar
        id: -1,
        numero_topografico: '',
        id_categoria: '',
        nT_numerocasetes: -1,
        nT_numerocinta: -1,
        duracion: '',
        soporte: '',
        ie_casete: '',
        ie_cajaprotectora: '',
        alcance_contenido: '',
        dept_toponimicos: '',
        dept_onomasticos: '',
        dept_cronologicos: '',
        dept_otros: '',
        dept_tipoDRegistro: '',
        lengua: '',
        condiciones_acceso: '',
        existencia_localizacion_copias: '',
        unidades_descripcion_asociada: '',
        documentos_asociados: '',
        notas: '',
        notas_control_interno: '',
        fechaDRegistro: '',
        fechaDUltimaAct: '',
        Descriptores: ''
    }

    @action setUnidadSimple = async (unidadSimple: IUnidadSimple) => {
        this.UnidadSimpleElecta = unidadSimple
    }
    /** Resetea la unidad simple para crear una nueva, requiere la categoría a agregar */
    @action setNuevaUnidadSImple = async (id_categoria: string) => {
        var response: IUnidadSimple = await agent.UnidadSimple.ultimo(id_categoria);
        const initialUnidadSimple = {
            id : isNaN(response.id) ? 1 : response.id + 1,
            id_categoria: id_categoria,
            numero_topografico: '',
            nT_numerocasetes: -1,
            nT_numerocinta: -1,
            duracion: '',
            soporte: '',
            ie_casete: '',
            ie_cajaprotectora: '',
            alcance_contenido: '',
            dept_toponimicos: '',
            dept_onomasticos: '',
            dept_cronologicos: '',
            dept_otros: '',
            dept_tipoDRegistro: '',
            lengua: '',
            condiciones_acceso: '',
            existencia_localizacion_copias: '',
            unidades_descripcion_asociada: '',
            documentos_asociados: '',
            notas: '',
            notas_control_interno: '',
            fechaDRegistro: '',
            fechaDUltimaAct: '',
            Descriptores: ''
        }
     this.UnidadSimpleElecta = initialUnidadSimple; 
     console.log("Nueva Carga => " + this.UnidadSimpleElecta.id)
     console.log("Hi => " + this.UnidadSimpleElecta.numero_topografico)

    }
    @action setEdit = (edit: boolean) => { this.isEdit = edit } // Esta variable lo voy a usar la parte de NuevaUnidadSimple

    @action createUnidadSimple = async (unidadSimple: IUnidadSimple) => {
        try {
        await agent.UnidadSimple.create(unidadSimple);
        console.log('Unidad Simple Creada (OK)');
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