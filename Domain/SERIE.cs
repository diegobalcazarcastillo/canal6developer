using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class SERIE
    {
        [Key]
        public int id { get; set; }
        public int id_coleccion { get; set; }
        public string nombre { get; set; }
    }
}
