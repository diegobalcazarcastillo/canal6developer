using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;
using Domain;
namespace Application.Conjuntos 
{

    public class Create
    {
        public class Command : IRequest
        {
            public int id_subgrupo {get;set;}
            public string nombre { get; set; }
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
                var newobj = new CONJUNTO
                {
                    id_subgrupo = request.id_subgrupo,
                    nombre = request.nombre
                };
                _context.conjunto.Add(newobj);
                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;
                throw new System.Exception("Error al insertar el registro");
            }
        }
    }
}