using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;
using Domain;
namespace Application.Colecciones
{

    public class Create
    {
        public class Command : IRequest
        {
            
            public string id_acervo {get;set;}
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
                var newobj = new COLECCION
                {
                    id_acervo = request.id_acervo,
                    nombre = request.nombre
                };
                _context.coleccion.Add(newobj);
                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;
                throw new System.Exception("Error al insertar el registro");
            }
        }


    }
}