using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;
using Domain;
namespace Application.Grupos
{

    public class Create
    {
        public class Command : IRequest
        {
            
            public int id_subserie {get;set;}
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
                var newobj = new GRUPO
                {
                    id_subserie = request.id_subserie,
                    nombre = request.nombre
                };
                _context.grupo.Add(newobj);
                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;
                throw new System.Exception("Error al insertar el registro");
            }
        }


    }
}