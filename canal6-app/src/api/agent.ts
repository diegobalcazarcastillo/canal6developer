import axios, { AxiosResponse } from 'axios'
import { ICategoria } from '../models/categoria';
import { IUnidadSimple} from '../models/unidadsimple'
import { IAcervo, IColeccion, IConjunto, IGrupo, ISerie, ISubconjunto, ISubGrupo, ISubSerie } from '../models/InfoCategorias';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}


const Categorias = {
    List: ()  : Promise<ICategoria[]> => request.get('/categorias'),
    create: (categoria: ICategoria) => request.post('/categorias', categoria)
}


const Acervo = {
    List: ()  : Promise<IAcervo[]> => request.get('/acervos'),
    create: (categoria: IAcervo) => request.post('/acervos', categoria)
}
const Coleccion = {
    List: ()  : Promise<IColeccion[]> => request.get('/colecciones'),
    create: (categoria: IColeccion) => request.post('/colecciones', categoria)
}
const Serie = {
    List: ()  : Promise<ISerie[]> => request.get('/series'),
    create: (categoria: ISerie) => request.post('/series', categoria)
}
const SubSerie = {
    List: ()  : Promise<ISubSerie[]> => request.get('/subseries'),
    create: (categoria: ISubSerie) => request.post('/subseries', categoria)
}
const Grupo = {
    List: ()  : Promise<IGrupo[]> => request.get('/grupos'),
    create: (categoria: IGrupo) => request.post('/grupos', categoria)
}
const SubGrupo = {
    List: ()  : Promise<ISubGrupo[]> => request.get('/subgrupos'),
    create: (categoria: ISubGrupo) => request.post('/subgrupos', categoria)
}
const Conjunto = {
    List: ()  : Promise<IConjunto[]> => request.get('/conjuntos'),
    create: (categoria: IConjunto) => request.post('/conjuntos', categoria)
}
const SubConjunto = {
    List: ()  : Promise<ISubconjunto[]> => request.get('/subconjuntos'),
    create: (categoria: ISubconjunto) => request.post('/subconjuntos', categoria)
}

const UnidadSimple = {
    List: (id_categoria: string)  : Promise<IUnidadSimple[]> => request.get('/unidadsimple/list/' + id_categoria), // Da la lista de Unidades simples de una categoría
    create: (categoria: IUnidadSimple) => request.post('/unidadsimple', categoria),
    ultimo: (id_categoria: string) : Promise<IUnidadSimple> => request.get('/unidadsimple/ultimo/' + id_categoria) // Da la última Unidad simple registrada
}

export default
{
    Acervo,
    Categorias,
    Coleccion,
    Serie,
    SubSerie,
    Grupo, 
    SubGrupo,
    Conjunto,
    SubConjunto,
    UnidadSimple
}