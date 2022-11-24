import React, {useContext} from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { ICategoria } from '../../models/categoria'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import CategoriaStore from '../../stores/CategoriaStore'
import UnidadSimpleStore from '../../stores/UnidadSimpleStore'

function nameCategoria(categoria: ICategoria): string { 
    let strCategoria = categoria.id_acervo + "-" +
    categoria.id_coleccion + "-" +
    categoria.id_serie + "-" +
    categoria.id_subserie + "-" +
    categoria.id_grupo + "-" +
    categoria.id_subgrupo + "-" +
    categoria.id_conjunto + "-" +
    categoria.id_subconjunto;
    
    return strCategoria
  } ;

interface IProps
{
    categoria: ICategoria
}


const CategoriaItem: React.FC<IProps> = ({categoria}) => {
  
const {setCategoria} = useContext(CategoriaStore);
const {listUnidadSimple, showEdit}  = useContext(UnidadSimpleStore)
const navigate = useNavigate();

  return (
   <Menu.Item
           key={categoria.id}
           name={nameCategoria(categoria)}
           style={{opacity: 0.7}}
           
           >
            # {nameCategoria(categoria)}
            <Icon name="add circle" onClick={() => {
            setCategoria(categoria);
            showEdit(false);
            navigate("Nueva");
            } }/>
            <Icon name="list ul" onClick={() => {
            listUnidadSimple(categoria.id);
            navigate("Consulta");
            } }/>
        </Menu.Item>
  )
}

export default observer(CategoriaItem)
