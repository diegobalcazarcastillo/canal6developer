using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class GRUPO
    {
        [Key]
        public int id { get; set; }
        public int id_subserie { get; set; }
        public string nombre { get; set; }
    }
}
