using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using MediatR;
using Persistence;

namespace Application.Colecciones
{
    public class Update
    {
        public class Command : IRequest
        {
            public int id {get;set;}
            public string nombre {get;set;}
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
                var actualizar = _context.coleccion.Where(x => x.id  == request.id).First();
                if(actualizar == null) throw new RestException(System.Net.HttpStatusCode.NotFound);
                actualizar.nombre = request.nombre;
                var success = await _context.SaveChangesAsync() > 0;
                if(success) return Unit.Value;
                throw new System.Exception("Error al actualizar el registro");
            }

            
        }
    }
}