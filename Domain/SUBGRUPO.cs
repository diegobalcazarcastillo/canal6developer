using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class SUBGRUPO
    {
        [Key]
        public int id { get; set; }
        public int id_grupo { get; set; }
        public string nombre { get; set; }
    }
}
