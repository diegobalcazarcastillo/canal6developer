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
        }

        public class Handler : IRequestHandler<Command>
        {
            private DataContext _context;
            public Handler(DataContext context)
            {
                _context = context ?? throw new System.ArgumentNullException(nameof(context));
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var UnidadSimpleFromStore = _context.unidadsimple.Where(x => x.id == request.id && x.id_categoria == request.id_categoria).First();
                

                if(UnidadSimpleFromStore == null) throw new RestException(System.Net.HttpStatusCode.NotFound);

              
                UnidadSimpleFromStore.soporte = request.soporte;
                _context.unidadsimple.Update(UnidadSimpleFromStore);
                
                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;

                throw new System.Exception("Error al actualizar el registro");
            }
        }
    }
}