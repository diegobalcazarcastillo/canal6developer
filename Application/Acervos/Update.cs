using System.Threading;
using System.Threading.Tasks;
using MediatR;
using System.Linq;
using Persistence;
using Application.Errors;

namespace Application.Acervos
{
    public class Update
    {
        public class Command : IRequest
        {
            public string id {get;set;}
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
                var acervo = _context.acervo.Where(x => x.id  == request.id).First();
                if(acervo == null) throw new RestException(System.Net.HttpStatusCode.NotFound);
                acervo.nombre = request.nombre;
                var success = await _context.SaveChangesAsync() > 0;
                if(success) return Unit.Value;
                throw new System.Exception("Error al actualizar el registro");
            }
        }
    }
}