import React, {useContext} from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { ICategoria } from '../../models/categoria'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import CategoriaStore from '../../stores/CategoriaStore'
import UnidadSimpleStore from '../../stores/UnidadSimpleStore'

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
           name={categoria.id}
           style={{opacity: 0.7}}
           >
            # {categoria.id}
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
