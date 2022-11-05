using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;
using Domain;
namespace Application.Subconjuntos
{

    public class Create
    {
        public class Command : IRequest
        {
            public int id_conjunto {get;set;}
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
                var newobj = new SUBCONJUNTO
                {
                    id_conjunto = request.id_conjunto,
                    nombre = request.nombre
                };
                _context.subconjunto.Add(newobj);
                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;
                throw new System.Exception("Error al insertar el registro");
            }
        }
    }
}