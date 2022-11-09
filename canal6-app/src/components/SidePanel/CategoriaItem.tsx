import React from 'react'
import { Menu } from 'semantic-ui-react'
import { ICategoria } from '../../models/categoria'


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
  return (
   <Menu.Item
           key={categoria.id}
           onClick={() => console.log(categoria)}
           name={nameCategoria(categoria)}
           style={{opacity: 0.7}}>
            # {nameCategoria(categoria)}
        </Menu.Item>
  )
}

export default CategoriaItem
