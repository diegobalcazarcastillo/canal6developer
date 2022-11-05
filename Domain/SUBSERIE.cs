using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class SUBSERIE
    {
        [Key]
        public int id { get; set; }
        public int id_serie { get; set; }
        public string nombre { get; set; }
    }
}
