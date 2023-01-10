import axios, { AxiosResponse } from 'axios'
import { ICategoria } from '../models/categoria';
import { IUnidadSimple} from '../models/unidadsimple'
import { IAcervo, IColeccion, IConjunto, IGrupo, ISerie, ISubconjunto, ISubGrupo, ISubSerie } from '../models/InfoCategorias';
import {history} from '../index'
import { toast } from 'react-toastify';
import { IUser, IUserFormValues } from '../models/users';


axios.defaults.baseURL = 'http://localhost:5000/api';
//const navigate = useNavigate()
//Obtener los errores de la aplicación
axios.interceptors.response.use(undefined, (error) =>{ 
    

    /*Network Error */
    if(error.message == 'Network Error' && !error.response)
    {
        toast.error('Network Error! Quizá el API esté abajo o no tengas una buena conexión de red')
        return;
    }

    /**API ERROR */
    const {status} = error.response
    switch(status)
    {
        case 404:
            history.push('/NotFound')
            break;
        case 500:
            toast.error('Server error!')
            break;
    }
} )

const debug = false;
const responseBody = (response: AxiosResponse) => response.data

const request = {
    get: (url: string) => { if(debug) {console.log(url);} return axios.get(url).then(responseBody)}, //Es console lo voy a dejar para corroborar a que llama el API, pero se tiene que quitar en deinitiva
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
   
    create: (categoria: IAcervo) => request.post('/acervos', categoria),
    single: (id: string) : Promise<IAcervo> =>  request.get('/acervos/' + id)
}
const Coleccion = {
    List: ()  : Promise<IColeccion[]> => request.get('/colecciones'),
    create: (categoria: IColeccion) => request.post('/colecciones', categoria),
    single: (id: string) : Promise<IAcervo> =>  request.get('/colecciones/' + id),
}
const Serie = {
    List: ()  : Promise<ISerie[]> => request.get('/series'),
    create: (categoria: ISerie) => request.post('/series', categoria),
    single: (id: string) : Promise<IAcervo> =>  request.get('/series/' + id)
}
const SubSerie = {
    List: ()  : Promise<ISubSerie[]> => request.get('/subseries'),
    create: (categoria: ISubSerie) => request.post('/subseries', categoria),
    single: (id: string) : Promise<IAcervo> =>  request.get('/subseries/' + id)
}
const Grupo = {
    List: ()  : Promise<IGrupo[]> => request.get('/grupos'),
    create: (categoria: IGrupo) => request.post('/grupos', categoria),
    single: (id: string) : Promise<IAcervo> =>  request.get('/grupos/' + id)
}
const SubGrupo = {
    List: ()  : Promise<ISubGrupo[]> => request.get('/subgrupos'),
    create: (categoria: ISubGrupo) => request.post('/subgrupos', categoria),
    single: (id: string) : Promise<IAcervo> =>  request.get('/subgrupos/' + id)
}
const Conjunto = {
    List: ()  : Promise<IConjunto[]> => request.get('/conjuntos'),
    create: (categoria: IConjunto) => request.post('/conjuntos', categoria),
    single: (id: string) : Promise<IAcervo> =>  request.get('/conjuntos/' + id)
}
const SubConjunto = {
    List: ()  : Promise<ISubconjunto[]> => request.get('/subconjuntos'),
    create: (categoria: ISubconjunto) => request.post('/subconjuntos', categoria),
    single: (id: string) : Promise<IAcervo> =>  request.get('/subconjuntos/' + id)
}

const UnidadSimple = {
    List: (id_categoria: string)  : Promise<IUnidadSimple[]> => request.get('/unidadsimple/list/' + id_categoria), // Da la lista de Unidades simples de una categoría
    create: (categoria: IUnidadSimple) => request.post('/unidadsimple', categoria),
    ultimo: (id_categoria: string) : Promise<IUnidadSimple> => request.get('/unidadsimple/ultimo/' + id_categoria) // Da la última Unidad simple registrada
}



const user = {
    login: (user: IUserFormValues) : Promise<IUser> => request.post('/user/login', user),
    register: (user: IUserFormValues) : Promise<IUser> => request.post('/user/register', user),
    current: () : Promise<IUser> => request.get('/user')
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
    UnidadSimple,
    user
}