using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class UNIDADSIMPLE
    {
        
        public int id { get; set; }
        public string id_categoria { get; set; }
        public string numero_topografico { get; set; }
        public int NT_numerocasetes { get; set; }
        public int NT_numerocinta { get; set; }
        public string duracion {get;set;}
    }
}