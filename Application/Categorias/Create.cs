using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;
using Domain;
namespace Application.Categorias 
{

    public class Create
    {
        public class Command : IRequest
        {
            public string id {get;set;}
            public string id_acervo {get;set;}
            public int id_coleccion {get;set;}
            public int id_serie {get;set;}
            public int id_subserie {get;set;}
            public int id_grupo {get;set;}
            public int id_subgrupo {get;set;}
            public int id_conjunto {get;set;}
            public int id_subconjunto {get;set;}
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
                var newobj = new CATEGORIA
                {
                    id = request.id,
                    id_acervo = request.id_acervo,
                    id_coleccion = request.id_coleccion,
                    id_serie = request.id_serie,
                    id_subserie = request.id_subserie,
                    id_grupo = request.id_grupo,
                    id_subgrupo = request.id_subgrupo,
                    id_conjunto = request.id_conjunto,
                    id_subconjunto = request.id_subconjunto,
                };
                _context.categoria.Add(newobj);
                var success = await _context.SaveChangesAsync() > 0;
                if (success) return Unit.Value;
                throw new System.Exception("Error al insertar el registro");
            }
        }
    }
}