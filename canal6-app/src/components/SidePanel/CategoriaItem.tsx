import React, {useContext, useState} from 'react'
import { Icon, Menu, Segment } from 'semantic-ui-react'
import { ICategoria } from '../../models/categoria'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import UnidadSimpleStore from '../../stores/UnidadSimpleStore'
import CategoriaInfo from './CategoriaInfo'

interface IProps
{
    categoria: ICategoria
}

const CategoriaItem: React.FC<IProps> = ({categoria}) => {  

const {listUnidadSimple, setEdit, setNuevaUnidadSImple} = useContext(UnidadSimpleStore)
const [info, setInfo] = useState<boolean>(false)

const navigate = useNavigate();

  return (
    <React.Fragment>
      <Menu.Item
        key={categoria.id}
        name={categoria.id}
        style={{ opacity: 0.7 }}
      >
        # {categoria.id}
        <Icon
          name="add circle"
          onClick={() => {
            setNuevaUnidadSImple(categoria.id);
            setEdit(false);
            navigate("Nueva");
          }}
        />
        <Icon
          name="list ul"
          onClick={() => {
            listUnidadSimple(categoria.id);
            navigate("Consulta");
          }}
        />
        <Icon
          name="info"
          onClick={() => {
            setInfo(true);
          }}
        />
      </Menu.Item>

      <CategoriaInfo
        mostrarInfo={info}
        setMostrarInfo={setInfo}
        categoria={categoria}
      />
    </React.Fragment>
  );
}

export default observer(CategoriaItem)
