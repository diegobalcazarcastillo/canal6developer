using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class SUBCONJUNTO
    {
        [Key]
        [Column("int")]
        public int id { get; set; }
        public int id_conjunto { get; set; }
        public string nombre { get; set; }
    }
}
