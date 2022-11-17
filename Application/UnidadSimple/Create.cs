using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;
using Domain;
namespace Application.UnidadSimple
{

    public class Create
    {
        public class Command : IRequest
        {
            public string id_categoria { get; set; }
            public string numero_topografico { get; set; }
            public int NT_numerocasetes { get; set; }
            public int NT_numerocinta { get; set; }
            public string duracion {get;set;} 
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
                var newobj = new UNIDADSIMPLE
                {
                    id_categoria = request.id_categoria,
                    numero_topografico = request.numero_topografico,
                    NT_numerocasetes = request.NT_numerocasetes,
                    NT_numerocinta = request.NT_numerocinta,
                    duracion = request.duracion
                    
                };
                _context.unidadsimple.Add(newobj);
                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;
                throw new System.Exception("Error al insertar el registro");
            }
        }
    }
}