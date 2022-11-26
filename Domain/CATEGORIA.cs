using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class CATEGORIA
    {
        [Key]
        public string id {get;set;}
        public string id_acervo {get;set;}
        public int? id_coleccion {get;set;}
        public int? id_serie {get;set;}
        public int? id_subserie {get;set;}
        public int? id_grupo {get;set;}
        public int? id_subgrupo {get;set;}
        public int? id_conjunto {get;set;}
        public int? id_subconjunto {get;set;}
    }
}
