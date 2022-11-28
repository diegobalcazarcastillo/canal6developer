
export interface IAcervo {
    id: string,
    nombre: string 
} 
export interface IColeccion {
    id: number,
    id_acervo: string,
    nombre: string
}
export interface ISerie {
    id: number,
    id_coleccion: number,
    nombre: string
}
export interface ISubSerie {
    id: number,
    id_serie: number,
    nombre: string
}
export interface IGrupo {
    id: number,
    id_subserie: number,
    nombre: string
}
export interface ISubGrupo {
    id: number,
    id_grupo: number,
    nombre: string
}
export interface IConjunto {
    id: number,
    id_subgrupo: number,
    nombre: string
}
export interface ISubconjunto {
    id: number,
    id_conjunto: number,
    nombre: string
} 


export interface IInfoCategoria {

    nombre_acervo: string,
    nombre_coleccion: string,
    nombre_serie: string,
    nombre_subserie: string,
    nombre_grupo: string,
    nombre_subgrupo: string,
    nombre_conjunto: string,
    nombre_subconjunto: string

}