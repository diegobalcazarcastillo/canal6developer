import React, {useContext, useState} from 'react'
import { Icon, Menu, Segment } from 'semantic-ui-react'
import { ICategoria } from '../../models/categoria'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import CategoriaStore from '../../stores/CategoriaStore'
import UnidadSimpleStore from '../../stores/UnidadSimpleStore'
import CategoriaInfo from './CategoriaInfo'

interface IProps
{
    categoria: ICategoria
}

const CategoriaItem: React.FC<IProps> = ({categoria}) => {  
const {setCategoria, setInfoCategoria} = useContext(CategoriaStore); //esto debería de ser un estado, pero lo resuelvo después
const {listUnidadSimple, showEdit}  = useContext(UnidadSimpleStore)
const [mostrarInfo, setMostrarInfo] = useState<boolean>(false)

const showModalInfo = (show: boolean) => {setMostrarInfo(show)}

const navigate = useNavigate();

  return (
    <React.Fragment>
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
            <Icon name="info" onClick={() => {
            setCategoria(categoria);
            setInfoCategoria();
            showModalInfo(true)
            } }/>
        </Menu.Item>

        <CategoriaInfo isModalVisible={mostrarInfo} showModalInfo={showModalInfo} />
        </React.Fragment>
        )
}

export default observer(CategoriaItem)
