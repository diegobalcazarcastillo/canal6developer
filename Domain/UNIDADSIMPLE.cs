using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class UNIDADSIMPLE
    {

        [Key]        
        public int id { get; set; }
        [Key]
        public string id_categoria { get; set; }
        public string numero_topografico { get; set; }
        public int NT_numerocasetes { get; set; }
        public int NT_numerocinta { get; set; }
        public string duracion {get;set;}
        public string soporte {get;set;}
        public string ie_casete {get;set;}
        public string ie_cajaprotectora {get;set;}
        public string alcance_contenido {get;set;}
        public string dept_toponimicos {get;set;}
        public string dept_onomasticos {get;set;}
        public string dept_cronologicos {get;set;}
        public string dept_otros {get;set;}
        public string dept_tipoDRegistro {get;set;}
        public string lengua {get;set;}
        public string condiciones_acceso {get;set;}
        public string existencia_localizacion_copias {get;set;}
        public string unidades_descripcion_asociada {get;set;}
        public string documentos_asociados {get;set;}
        public string notas {get;set;}
        public string notas_control_interno {get;set;}
        public string fechaDRegistro {get;set;}
        public string fechaDUltimaAct {get;set;}
        public string Descriptores {get;set;}
    }
}