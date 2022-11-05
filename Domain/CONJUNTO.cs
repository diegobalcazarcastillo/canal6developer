using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class CONJUNTO
    {
        [Key]
        public int id { get; set; }
        public int id_subgrupo { get; set; }
        public string nombre { get; set; }
    }
}
