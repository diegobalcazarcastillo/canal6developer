using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class COLECCION
    {
        [Key]
        public int id { get; set; }
        public string id_acervo { get; set; }
        public string nombre { get; set; }
    }
}
