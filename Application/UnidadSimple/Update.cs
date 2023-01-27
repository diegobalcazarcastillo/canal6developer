using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using System.Linq;
using Application.Errors;

namespace Application.UnidadSimple
{
    public class Update
    {
        public class Command : IRequest
        {
            public int id {get;set;}
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

        public class Handler : IRequestHandler<Command>
        {
            private readonly Application.Interfaces.IUserAccesor UserAccesor;
            private DataContext _context;
            public Handler(DataContext context, Application.Interfaces.IUserAccesor UserAccesor)
            {
                _context = context ?? throw new System.ArgumentNullException(nameof(context));
                this.UserAccesor = UserAccesor;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {

                var user = UserAccesor.GetCurrentUserName();
                var UnidadSimpleFromStore = _context.unidadsimple.Where(x => x.id == request.id && x.id_categoria == request.id_categoria).First();
                if(UnidadSimpleFromStore == null) throw new RestException(System.Net.HttpStatusCode.NotFound);

                UnidadSimpleFromStore.numero_topografico = request.numero_topografico;
                UnidadSimpleFromStore.NT_numerocasetes = request.NT_numerocasetes;
                UnidadSimpleFromStore.NT_numerocinta = request.NT_numerocinta;
                UnidadSimpleFromStore.duracion = request.duracion;
                UnidadSimpleFromStore.soporte = request.soporte;
                UnidadSimpleFromStore.ie_casete = request.ie_casete;
                UnidadSimpleFromStore.ie_cajaprotectora = request.ie_cajaprotectora;
                UnidadSimpleFromStore.alcance_contenido =request.alcance_contenido;
                UnidadSimpleFromStore.dept_toponimicos =request.dept_toponimicos;
                UnidadSimpleFromStore.dept_onomasticos =request.dept_onomasticos;
                UnidadSimpleFromStore.dept_cronologicos =request.dept_cronologicos;
                UnidadSimpleFromStore.dept_otros =request.dept_otros;
                UnidadSimpleFromStore.dept_tipoDRegistro =request.dept_tipoDRegistro;
                UnidadSimpleFromStore.lengua =request.lengua;
                UnidadSimpleFromStore.condiciones_acceso =request.condiciones_acceso;
                UnidadSimpleFromStore.existencia_localizacion_copias =request.existencia_localizacion_copias;
                UnidadSimpleFromStore.unidades_descripcion_asociada =request.unidades_descripcion_asociada;
                UnidadSimpleFromStore.documentos_asociados =request.documentos_asociados;
                UnidadSimpleFromStore.notas =request.notas;
                UnidadSimpleFromStore.notas_control_interno =request.notas_control_interno;
                UnidadSimpleFromStore.UserEdit = user;
                UnidadSimpleFromStore.fechaDUltimaAct = System.DateTime.Now;
                UnidadSimpleFromStore.Descriptores =request.Descriptores;
                _context.unidadsimple.Update(UnidadSimpleFromStore);
    
                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;

                throw new System.Exception("Error al actualizar el registro");
            }
        }
    }
}